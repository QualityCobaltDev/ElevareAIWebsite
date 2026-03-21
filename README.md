# ElevareAI Website

Official production website for **ElevareAI** at **https://elevareai.store**.

This project uses Next.js App Router + TypeScript + Tailwind and is deployed on a Contabo VPS behind Nginx with Docker Compose.

---

## 1) What this repository contains

- Premium, truth-based marketing site pages (Home, About, Services, Service Details, Trust & Security, Contact, Privacy, Terms).
- Centralized editable content under `src/content/*`.
- Server-side contact form endpoint with SMTP delivery.
- Security hardening in both the app (`next.config.mjs`) and reverse proxy (`deploy/nginx/elevareai.store.conf`).
- Docker + Compose configuration for local and production deployment.

---

## 2) Quick tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Docker** standalone runtime (`output: 'standalone'`)

---

## 3) Editing website content (no code logic changes required)

Update these files when you want to change copy/navigation/contact info:

- `src/content/site.ts`
  - Company name, domain, tagline, nav, CTA labels, email, phone, footer/legal notes.
- `src/content/services.ts`
  - Services list + detailed service page sections (scope, outcomes, fit, etc.).
- `src/content/faqs.ts`
  - Homepage FAQ entries.
- `src/content/trust.ts`
  - Trust & Security page principles and FAQs.

Main route files:

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Services: `src/app/services/page.tsx`
- Service details: `src/app/services/[slug]/page.tsx`
- Trust & Security: `src/app/trust-security/page.tsx`
- Contact: `src/app/contact/page.tsx`

---

## 4) Required environment variables

Create `.env` from the example:

```bash
cp .env.example .env
```

Set all SMTP variables in `.env`:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://elevareai.store

SMTP_HOST=smtp.your-provider.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@elevareai.store
SMTP_PASS=replace-with-real-password
CONTACT_TO_EMAIL=contact@elevareai.store
CONTACT_FROM_EMAIL=contact@elevareai.store
CONTACT_REPLY_TO=contact@elevareai.store
```

### Notes

- `CONTACT_TO_EMAIL` is where form submissions are delivered.
- `CONTACT_FROM_EMAIL` must be allowed by your SMTP provider.
- `SMTP_SECURE=true` is recommended with port `465`.
- Never commit real credentials to git.

---

## 5) Local development

Install dependencies and start dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Validation commands

```bash
npm run typecheck
npm run lint
npm run build
```

---

## 6) Contact form behavior (production)

Endpoint: `POST /api/contact`

Implemented protections:

- Server-side validation and sanitization.
- Same-origin check.
- Payload size limit.
- Honeypot bot trap field.
- In-memory IP rate limit (single VPS friendly).
- SMTP-based delivery using env credentials.

If SMTP is misconfigured, the API safely returns an error without exposing secrets.

---

## 7) Run with Docker (local)

```bash
docker compose -f compose.yaml up -d --build
```

Application runs on `http://localhost:3000`.

---

## 8) Production deployment (Contabo VPS)

### A. Install prerequisites (first-time setup)

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker nginx
```

### B. Clone/update app and configure env

```bash
git clone <your-repo-url> /opt/elevareai
cd /opt/elevareai
cp .env.example .env
# Edit .env with real SMTP values
```

### C. Build and start production container

```bash
docker compose -f compose.production.yaml up -d --build
```

### D. Install Nginx site config

```bash
sudo cp deploy/nginx/elevareai.store.conf /etc/nginx/sites-available/elevareai.store.conf
sudo ln -s /etc/nginx/sites-available/elevareai.store.conf /etc/nginx/sites-enabled/elevareai.store.conf
sudo nginx -t
sudo systemctl reload nginx
```

### E. Enable SSL certificates

```bash
sudo certbot --nginx -d elevareai.store -d www.elevareai.store
```

After SSL is active, you can enable the HSTS line in `deploy/nginx/elevareai.store.conf`.

---

## 9) How to update the live website safely

From the VPS:

```bash
cd /opt/elevareai
git pull
docker compose -f compose.production.yaml up -d --build
sudo nginx -t && sudo systemctl reload nginx
```

Then verify:

1. Home page loads.
2. Contact form submits successfully.
3. Email arrives at `contact@elevareai.store`.
4. `https://elevareai.store/sitemap.xml` and `https://elevareai.store/robots.txt` are reachable.

---

## 10) Contact form test checklist

1. Submit from `/contact` with test business data.
2. Confirm delivery to `contact@elevareai.store`.
3. Submit invalid payload to verify validation errors.
4. Rapidly submit multiple times to confirm rate limiting (`429`).
5. Ensure hidden honeypot field (`website`) is empty in normal browser use.

---

## 11) Security implementation locations

- App headers + CSP: `next.config.mjs`
- API validation/rate limit/origin checks: `src/lib/contact.ts`
- SMTP sender: `src/lib/smtp.ts`
- Contact API route: `src/app/api/contact/route.ts`
- Nginx hardening + proxy behavior: `deploy/nginx/elevareai.store.conf`

---

## 12) Important operational notes

- Keep all public content factual (no fabricated clients, metrics, testimonials, certifications, or case studies).
- Privacy/Terms pages are operational drafts and should be finalized with legal review before formal legal use.
- This repository is configured for standalone Next.js output and current Docker/Nginx VPS deployment pattern.
