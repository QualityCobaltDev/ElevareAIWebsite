# ElevareAI Website

Production-ready Next.js website for **ElevareAI** (`https://elevareai.store`) with upgraded premium UX, truth-based B2B content, SMTP-powered contact delivery, and VPS deployment assets for Docker + Nginx.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Structured content layer in `src/content/*`
- Standalone Docker build (`output: 'standalone'`)

## Content management (owner-editable)
Update business copy and structure from centralized files:
- `src/content/site.ts` (company profile, nav, CTAs, contact details, footer/legal note)
- `src/content/services.ts` (service definitions + detailed scope blocks)
- `src/content/faqs.ts` (homepage FAQs)
- `src/content/trust.ts` (trust/security principles and FAQs)

## Environment variables
Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Required SMTP variables for contact form email delivery:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@elevareai.store
SMTP_PASS=replace-with-real-password
CONTACT_TO_EMAIL=contact@elevareai.store
CONTACT_FROM_EMAIL=contact@elevareai.store
CONTACT_REPLY_TO=contact@elevareai.store
```

Notes:
- `CONTACT_TO_EMAIL` is where enquiries are delivered.
- `CONTACT_FROM_EMAIL` should be a valid mailbox allowed by your SMTP provider.
- For providers requiring implicit TLS (typical port 465), keep `SMTP_SECURE=true`.

## Local development
```bash
npm install
npm run dev
```
Open: `http://localhost:3000`

## Build and checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Docker (local)
```bash
docker compose -f compose.yaml up -d --build
```
Site: `http://localhost:3000`

## Production deployment (Contabo VPS)

### 1) Server prerequisites
```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker nginx
```

### 2) Deploy code
```bash
git clone <repo-url> /opt/elevareai
cd /opt/elevareai
cp .env.example .env
# Edit .env with real SMTP credentials
```

### 3) Start production container
```bash
docker compose -f compose.production.yaml up -d --build
```

### 4) Configure Nginx reverse proxy
```bash
sudo cp deploy/nginx/elevareai.store.conf /etc/nginx/sites-available/elevareai.store.conf
sudo ln -s /etc/nginx/sites-available/elevareai.store.conf /etc/nginx/sites-enabled/elevareai.store.conf
sudo nginx -t
sudo systemctl reload nginx
```

### 5) Enable SSL
```bash
sudo certbot --nginx -d elevareai.store -d www.elevareai.store
```

After SSL, enable HSTS in Nginx config when ready.

### 6) Updates
```bash
cd /opt/elevareai
git pull
docker compose -f compose.production.yaml up -d --build
```

## Contact form testing (safe)
1. Configure `.env` with a real SMTP account.
2. Submit a test enquiry from `/contact` using non-sensitive data.
3. Confirm email arrives at `contact@elevareai.store`.
4. Confirm honeypot/rate-limiting behavior:
   - submit repeatedly and verify eventual HTTP `429` response,
   - populate hidden `website` field manually and verify silent drop behavior (`ok: true`, no delivered email).

## Security notes
Implemented protections include:
- Server-side validation + sanitization
- Origin checking for POST requests
- Payload size enforcement
- In-memory per-IP rate limiting (single VPS friendly)
- Honeypot anti-spam field
- Security headers in `next.config.mjs`
- Additional reverse-proxy headers and request limits in `deploy/nginx/elevareai.store.conf`

## Project structure
```txt
src/
  app/
    about/
    contact/
    services/
    trust-security/
    privacy/
    terms/
    api/contact/
  components/
  content/
  lib/
deploy/nginx/
```
