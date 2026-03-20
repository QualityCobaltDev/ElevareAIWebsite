# ElevareAI Website

Production-ready Next.js website for **ElevareAI** with App Router, TypeScript, Tailwind, SEO, and deployment setup for **elevareai.store** on Contabo VPS.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Data-driven content layer in `src/content/*`
- Docker standalone build for production

## Content source-of-truth
Company-specific statements were derived from the public LinkedIn profile: `https://www.linkedin.com/in/elevareai/`.

Where business details are not explicitly available, editable placeholders are centralized in:
- `src/content/site.ts`
- `src/content/services.ts`
- `src/content/faqs.ts`

## Local development
```bash
npm install
npm run dev
```
Open: `http://localhost:3000`

## Quality checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Docker (local)
```bash
docker compose -f compose.yaml up -d --build
```
Site runs on `http://localhost:3000`.

## Production deploy on Contabo VPS (Ubuntu 24.04)

### 1) Prepare server
```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker nginx
```

### 2) Clone repo and configure
```bash
git clone <your-repo-url> /opt/elevareai
cd /opt/elevareai
cp .env.example .env
```

### 3) Build and run app container
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

### 5) SSL with Certbot
```bash
sudo certbot --nginx -d elevareai.store -d www.elevareai.store
```

### 6) Ongoing updates
```bash
cd /opt/elevareai
git pull
docker compose -f compose.production.yaml up -d --build
```

## Editable business placeholders before launch
Update these with verified details:
- `src/content/site.ts`
  - `email`, `phone`
  - `tagline`, `description` (if refined)
- Legal pages:
  - `src/app/privacy/page.tsx`
  - `src/app/terms/page.tsx`

## Project structure
```txt
src/
  app/
    about/
    contact/
    services/
    privacy/
    terms/
    api/contact/
  components/
    layout/
    sections/
    ui/
  content/
  lib/
deploy/nginx/
```
