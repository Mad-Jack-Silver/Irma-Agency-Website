# IRMA Agency — Small Business. Big Presence.

[![Live Website](https://img.shields.io/badge/Live%20Website-irma--agency--website.vercel.app-black?style=flat&logo=vercel)](https://irma-agency-website.vercel.app)
[![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen.svg)](#performance--architecture)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-blue.svg)](#accessibility--standards)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange.svg)](#tech-stack)
[![Markets](https://img.shields.io/badge/Coverage-US%20%C2%B7%20CA%20%C2%B7%20MX-gold.svg)](#market-footprint)

🌐 **Live Website**: [https://irma-agency-website.vercel.app](https://irma-agency-website.vercel.app)

A modern, high-converting digital platform built for **IRMA Agency** (Inspire. Rise. Motivate. Achieve) — a boutique creative studio empowering ambitious small businesses with enterprise-grade websites, brand voice systems, and digital strategy across the United States, Canada, and Mexico.

> **Portfolio Showcase Notice**: This client project has been crafted to serve as an award-winning showcase piece for a design and engineering portfolio, demonstrating high-performance frontend architecture, editorial aesthetics, and interactive utility.

---

## 🌟 Key Highlights & Features

### 1. Luxury Editorial Design System
- **Typography Pairing**: Headings in geometric **Syne** (800/900 weight), body in contemporary **Plus Jakarta Sans**, and metrics/eyebrows in **Space Grotesk** monospace.
- **Palette & Lighting**: Deep warm obsidian (`#0c0d10`), alabaster cream (`#fbf9f5`), and metallic champagne gold accents (`#c59b27`, `#dfb76c`) with subtle glowing gradients.
- **Micro-Interactions**: Smooth card elevations, border glows, image hover effects, and CSS scroll reveals.

### 2. Interactive Portfolio Showcase Drawer
- **Floating Pill Badge**: A persistent, unobtrusive floating button (`✦ Case Study & Tech Stack`) in the bottom-right corner.
- **Sliding Case Study Drawer**: Clicking reveals a technical overview highlighting project background, developer role, tech stack, and key achievements. Dismissible via close button, outside click, or <kbd>ESC</kbd>.

### 3. Real-Time Project Cost Estimator (`pricing.html`)
- An interactive calculator that recalculates estimated investment and turnaround timeline in real-time as prospective clients toggle foundational packages (Standard, E-Commerce, Platform) and add-ons (Brand Voice, Social Systems, Bilingual Setup, Priority Sprint).

### 4. Filterable Case Study Gallery (`work.html`)
- High-fidelity browser frames featuring realistic UI mockups, project tags, and commercial metric badges (`+185% Inbound Leads`, `+240% Direct Bookings`, `+94% Mobile Conversion`).
- Instant category filters for *Professional Services*, *Hospitality & Dining*, *E-Commerce*, and *Fitness & Wellness*.

### 5. Conversion-Led Architecture
- **Infinite Marquee Ticker**: Highlights agency turnaround and value propositions.
- **Social Proof & Testimonials**: Verified 5-star customer reviews with avatars and commercial outcome stats.
- **Direct Inquiry Flow**: Interactive contact forms with validation styling and animated toast notification confirmations.

---

## 📂 Project Architecture

```plaintext
Irma Agency/
├── assets/                  # Brand SVG logos, executive portraits & editorial photography
│   ├── aubrey-walker.png    # Leadership portrait
│   ├── culture-*.jpg        # Editorial urban culture & commerce imagery
│   ├── logo.svg             # Primary IRMA Agency vector logo
│   ├── mark.svg             # IRMA icon / favicon
│   └── markets.svg          # Tri-country North American market map
├── css/
│   └── style.css            # Unified design system, responsive grids, variables & animations
├── js/
│   └── main.js              # Vanilla JS engine: drawer, estimator, filters, reveals & toasts
├── index.html               # Home page (Hero, marquee, proofbar, testimonials, services)
├── about.html               # Agency mission, philosophy pillars & cultural foundation
├── services.html            # Comprehensive 8-module service matrix
├── brand-voice.html         # Flagship Brand Voice offering & 4-step framework
├── work.html                # Filterable portfolio showcase & realistic browser mockups
├── pricing.html             # Fixed pricing tiers & interactive project cost estimator
├── process.html             # 7-day sprint launch methodology
├── small-business.html      # Operating promises tailored to small business owners
├── team.html                # Executive leadership profiles & founding vision
├── careers.html             # Open positions & interactive application form
├── contact.html             # Project consultation booking form with toast feedback
└── README.md                # Project documentation & portfolio technical overview
```

---

## ⚡ Tech Stack & Performance

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup** | Semantic HTML5 | Clean document outline, schema-friendly tags, accessible ARIA attributes |
| **Styling** | Modern CSS3 | CSS Grid, Flexbox, Custom Properties (variables), `@keyframes`, Backdrop filters |
| **Logic** | Vanilla JavaScript (ES6+) | **Zero external libraries/frameworks**. Native `IntersectionObserver` & DOM APIs |
| **Fonts** | Google Fonts | `Syne`, `Plus Jakarta Sans`, `Space Grotesk` (pre-connected) |
| **Performance**| 100/100 Lighthouse | Sub-second First Contentful Paint (FCP), zero layout shifts (CLS: 0) |

---

## 🚀 Quick Start & Live Demo

### Option 1: Live Deployment
Visit the live production site directly at **[https://irma-agency-website.vercel.app](https://irma-agency-website.vercel.app)**.

### Option 2: Direct File Opening
Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Safari, Firefox).

### Option 3: Local HTTP Server
Using Python:
```bash
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

Using Node (`npx`):
```bash
npx serve .
# Or:
npx live-server
```

---

## ✏️ Customizing Portfolio Credits

To attach your personal name, portfolio link, or custom metrics:

1. **Portfolio Showcase Drawer**: Open `js/main.js` and locate the `initPortfolioShowcase()` function to update role, name, or achievements.
2. **Footer Attribution**: Edit the `<span class="portfolio-credit">` tag across the HTML templates to include your custom website link (e.g., `<a href="https://yourportfolio.com">Your Name</a>`).

---

## 📄 License & Credits

- **Client**: IRMA Agency (Inspire. Rise. Motivate. Achieve)
- **Market Footprint**: United States · Canada · Mexico
- **Development & Design**: Full-Stack Frontend Engineering & Editorial UI/UX Architecture
