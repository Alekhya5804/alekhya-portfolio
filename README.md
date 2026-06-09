# Alekhya Ratnala — Portfolio Website

A modern, responsive, recruiter-focused portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

🔗 **Live Demo:** Deploy to Vercel or GitHub Pages (see below)

---

## Features

- Professional hero with typing effect & "Open to Work" badge
- Dark / Light mode toggle
- Smooth scroll animations (Framer Motion)
- Skills with animated progress bars
- Experience timeline (DRDO + Salesforce Internship)
- Project cards with GitHub & Live Demo links
- Certifications grid
- Resume preview & download
- Contact form (mailto integration)
- Fully responsive mobile navigation
- SEO optimized meta tags

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations |
| React Icons | Icon library |

---

## Project Structure

```
alekhya-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── SectionHeading.jsx
│   │   └── TypingEffect.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── portfolioData.js   # Edit all content here
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
cd alekhya-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview
```

---

## Customization

Edit **`src/data/portfolioData.js`** to update:

- Personal info (name, email, phone, social links)
- About section & education
- Skills & proficiency levels
- Experience & internships
- Projects & technologies
- Certifications

### Add Your Resume

Place your PDF at `public/resume.pdf` — the download buttons will work automatically.

### Update Social Links

```js
// src/data/portfolioData.js
linkedin: 'https://linkedin.com/in/your-profile',
github: 'https://github.com/your-username',
email: 'your.email@example.com',
```

---

## Deployment

### Option 1: Vercel (Recommended)

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Import Project** → select `alekhya-portfolio`
4. Framework Preset: **Vite**
5. Click **Deploy**

No extra configuration needed — Vercel auto-detects Vite.

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Option 2: GitHub Pages

1. Update `vite.config.js` base path to match your repo name:

```js
base: '/alekhya-portfolio/',
```

2. Add deploy script to `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Install gh-pages and deploy:

```bash
npm install -D gh-pages
npm run deploy
```

4. Enable GitHub Pages: Repo → **Settings** → **Pages** → Source: `gh-pages` branch

**Or use GitHub Actions** — create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          GITHUB_PAGES: 'true'
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## License

MIT — free to use and modify for your personal portfolio.

---

**Alekhya Ratnala** — Software Engineer & Salesforce Developer
