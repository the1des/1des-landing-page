# 1DES Landing Page

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/workers/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Landing page for **1DES** — Intelligent Trading, AI Automation & Real-Time Signals.  
Built with **Cloudflare Workers**, **D1** (SQLite), and **TailwindCSS**.

---

## 🚀 Features
- **Fast & serverless**: Runs entirely on [Cloudflare Workers](https://developers.cloudflare.com/workers/).
- **Database ready**: Uses [Cloudflare D1](https://developers.cloudflare.com/d1/) as the SQL database.
- **Modern UI**: TailwindCSS + responsive design.
- **SEO optimized**: Meta tags, OpenGraph, Twitter Cards, and JSON-LD structured data.
- **Waitlist form**: Stores submissions in D1.

---

## 📂 Project Structure
```

.
├── public/              # Static assets (favicon, OG image, etc.)
├── src/
│   ├── index.ts         # Worker entry point (routes, handlers)
│   ├── components/      # HTML components (footer, features, etc.)
│   └── api/             # API routes (e.g., /api/waitlist)
├── css/
│   └── styles.css       # Custom styles
├── wrangler.json        # Cloudflare Worker configuration
└── package.json

````

---

## 🛠️ Local Development

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`npm i -g wrangler`)

### Install dependencies
```bash
npm install
````

### Run locally

```bash
npm run dev
```

This starts a local Worker at `http://localhost:8787`.

---

## 📦 Deployment

Authenticate with Cloudflare and deploy:

```bash
wrangler login
wrangler deploy
```

---

## 🗄️ Database (D1)

This project uses [Cloudflare D1](https://developers.cloudflare.com/d1/).

### Create the database

If you haven’t already created the D1 database in the Cloudflare dashboard, do so first, then bind it in `wrangler.json`.

### Waitlist schema

Run this migration to create the `waitlist` table:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Run migrations

```bash
wrangler d1 migrations create init
wrangler d1 migrations apply one-des
```

### Test query

```bash
wrangler d1 execute one-des --command "SELECT * FROM waitlist;"
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 About 1DES

**1DES** builds AI-powered trading automation:
real-time data pipelines, ML-driven signals, and tools that democratize finance.

* Website: [https://1des.com](https://1des.com)
* Twitter: [@the1des](https://twitter.com/the1des)
* LinkedIn: [1DES](https://www.linkedin.com/company/1des)
