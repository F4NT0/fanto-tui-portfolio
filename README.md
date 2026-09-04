<div align="center">

# 🖥️ Retro TUI Portfolio

A minimal, high-aesthetic Terminal User Interface portfolio template.  
Built with **Astro.js v7** & **Tailwind CSS v4**.

<br />

[![Astro](https://img.shields.io/badge/Astro-v7.0-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=flat)](LICENSE.MD)

<br />
<br />

<p align="center">
  <a href="http://localhost:4321"><strong>🌐 Launch Live Demo</strong></a>
</p>

</div>

<br />

---

## 🌐 Live Preview

Experience the interactive retro terminal portfolio live in your browser:
- 🔗 **Live Demo**: [http://localhost:4321](http://localhost:4321)

---

## 🎨 Monochrome Theme

Minimalist high-contrast monochrome design for a clean, professional look.

---

##  Live GitHub Repositories & Metrics

Real-time integration with the GitHub REST API:
- **Live Metrics**: Automatically fetches total stars ⭐, total forks 🍴, followers count 👥, and public repository statistics.
- **Language Breakdown**: Displays primary programming languages across all public repositories.
- **Featured Repositories Grid**: Interactive cards displaying repository stars, description, and direct links.

---

## ✨ Key Features

- **Dual-Mode UI** — Switch between an interactive **`>_ CLI Terminal`** (history, tab autocomplete) and a **`[#] TUI Portfólio`**.
- **100% Mobile & Touch Optimized** — Pinned window headers and responsive layout for mobile screens (Samsung Galaxy S23 FE, iPhones, Android).
- **🐙 Live GitHub Stats & Repos** — Real-time GitHub REST API metrics: total stars ⭐, forks 🍴, followers, languages breakdown & repositories.
- **Monochrome Theme** — Minimalist high-contrast monochrome design for a clean, professional look.
- **Live Activity Streaming** — Optional Discord Lanyard WebSocket integration for Spotify activity and live gaming status (disabled by default).
- **Zero-Backend Contact Form** — Working AJAX email transmission via FormSubmit.co with confetti celebration.
- **100% Static & Fast** — Built with Astro v7 for instant load times and zero overhead.

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/F4NT0/fanto-tui-portfolio.git
cd fanto-tui-portfolio
npm install

# Start local dev server
npm run dev
```

Open **`http://localhost:4321`** to view your live portfolio.

---

## ⚙️ Customization

- **Content & Bio** &rarr; [`src/data/portfolio.ts`](src/data/portfolio.ts)  
  *Update bio, skills matrix, hardware specs, collaborations (commented out - not currently used), and contact details.*

- **Themes & Integrations** &rarr; [`src/config/`](src/config/)  
  *Configure custom themes (`themeConfig.ts`) and Spotify RPC (`spotifyConfig.ts`).*
  > 💡 **Note:** Spotify live activity widget is disabled by default until configured with your Discord Lanyard User ID (`lanyardUserId: ""`).

---

## 💻 CLI Commands

|| Command | Description |
|| :--- | :--- |
|| `help` | List available commands (`man`) |
|| `about` | Bio, background & location (`cat bio.txt`) |
|| `skills` | Interactive proficiency meters (`cat skills.sh`) |
|| `collabs` | Projects & collaborations (`cat collabs.md`) - commented out - not currently used |
|| `neofetch` | System specs & ASCII art logo |
|| `github` | Live GitHub profile metrics, stars & language stats (`stats`, `gh`) |
|| `repos` | Explore featured repositories with stars & links (`projects`) |
|| `links` | Display quick links to LinkedIn, X (Twitter), GitHub & Email (`socials`) |
|| `spotify` | Live Spotify track & progress bar (`np`) |
|| `matrix` | Toggle digital rain canvas animation |
|| `gui` / `cli` | Switch layout mode |
|| `clear` | Clear terminal screen buffer (`cls`) |

---

## 📄 License

Distributed under the [MIT License](LICENSE.MD). © 2026 Gabriel Fanto Stundner
