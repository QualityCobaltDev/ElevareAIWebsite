import net from 'node:net';
import tls from 'node:tls';

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  timeoutMs?: number;
};

type MailOptions = {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
};

function encodeBase64(value: string) {
  return Buffer.from(value, 'utf8').toString('base64');
}

function splitLines(data: string) {
  return data.split(/\r?\n/).filter(Boolean);
}

async function readResponse(socket: net.Socket | tls.TLSSocket) {
  return new Promise<string>((resolve, reject) => {
    let buffer = '';
    const onData = (chunk: Buffer) => {
      buffer += chunk.toString('utf8');
      const lines = splitLines(buffer);
      if (!lines.length) return;
      const last = lines[lines.length - 1];
      if (/^\d{3} /.test(last)) {
        socket.off('data', onData);
        resolve(buffer);
      }
    };

    socket.on('data', onData);
    socket.once('error', reject);
  });
}

function assertCode(response: string, allowedPrefix: string[]) {
  const lines = splitLines(response);
  const code = lines[lines.length - 1]?.slice(0, 3) ?? '';
  if (!allowedPrefix.includes(code)) {
    throw new Error(`SMTP command failed with code ${code}`);
  }
}

async function sendCommand(socket: net.Socket | tls.TLSSocket, command: string, expected: string[]) {
  socket.write(`${command}\r\n`);
  const response = await readResponse(socket);
  assertCode(response, expected);
}

export async function sendSmtpMail(config: SmtpConfig, mail: MailOptions) {
  const timeoutMs = config.timeoutMs ?? 10_000;
  const socket: net.Socket | tls.TLSSocket = config.secure
    ? tls.connect({ host: config.host, port: config.port, servername: config.host })
    : net.createConnection({ host: config.host, port: config.port });

  socket.setTimeout(timeoutMs);

  try {
    const greeting = await readResponse(socket);
    assertCode(greeting, ['220']);

    await sendCommand(socket, `EHLO elevareai.store`, ['250']);
    await sendCommand(socket, 'AUTH LOGIN', ['334']);
    await sendCommand(socket, encodeBase64(config.user), ['334']);
    await sendCommand(socket, encodeBase64(config.pass), ['235']);
    await sendCommand(socket, `MAIL FROM:<${mail.from}>`, ['250']);
    await sendCommand(socket, `RCPT TO:<${mail.to}>`, ['250', '251']);
    await sendCommand(socket, 'DATA', ['354']);

    const headers = [
      `From: ${mail.from}`,
      `To: ${mail.to}`,
      `Subject: ${mail.subject}`,
      `Reply-To: ${mail.replyTo || mail.from}`,
      'MIME-Version: 1.0',
      mail.html
        ? 'Content-Type: multipart/alternative; boundary="elevareai-boundary"'
        : 'Content-Type: text/plain; charset=utf-8'
    ];

    const body = mail.html
      ? [
          '--elevareai-boundary',
          'Content-Type: text/plain; charset=utf-8',
          '',
          mail.text,
          '--elevareai-boundary',
          'Content-Type: text/html; charset=utf-8',
          '',
          mail.html,
          '--elevareai-boundary--'
        ].join('\r\n')
      : mail.text;

    socket.write(`${headers.join('\r\n')}\r\n\r\n${body}\r\n.\r\n`);
    const dataResponse = await readResponse(socket);
    assertCode(dataResponse, ['250']);

    await sendCommand(socket, 'QUIT', ['221']);
  } finally {
    socket.end();
    socket.destroy();
  }
}
