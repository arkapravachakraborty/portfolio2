# Arkaprava Chakraborty — Personal Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A high-performance, dark-themed personal portfolio website for **Arkaprava Chakraborty** (Full-Stack Software Engineer & M.Sc. Computer Science candidate). Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌟 Key Features

- **⚡ Next.js 16 App Router & React 19**: Powered by Server & Client Components for optimal page delivery and hydration.
- **🎨 Sleek Dark UI / UX**: Custom-tailored dark aesthetic featuring glowing gradients, smooth micro-interactions, and Vercel's Geist typography.
- **📱 Fully Responsive**: Tailored grid & flex layout systems optimized across mobile, tablet, and ultra-wide desktop screens.
- **🧩 Modular Data Architecture**: Clean separation between presentation components (`components/`) and structured content (`data/`), making updates effortless.
- **📂 Interactive Sections**:
  - **Hero**: Intro, quick action CTAs, and profile highlight.
  - **Projects Showcase**: Interactive cards featuring live demo & GitHub repository links with tech stack tags.
  - **About Me**: In-depth personal story, technical philosophy, and expertise focus.
  - **Experience**: Timeline of software engineering roles and open-source contributions.
  - **Skills**: Categorized skill matrix (Languages, Frontend, Backend, Databases & Dev Tools).
  - **Education**: Academic history & achievements.
  - **Contact**: Direct email integration & interactive social platform links.

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Font Optimization:** [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist & Geist Mono)

---

## 📂 Project Structure

```text
portfolio2/
├── app/
│   ├── globals.css         # Global Tailwind styles & directives
│   ├── layout.tsx          # Root layout with Geist font & SEO metadata
│   └── page.tsx            # Main single-page portfolio layout
├── components/             # Reusable UI Section Components
│   ├── Navbar.tsx          # Navigation bar with section scroll links
│   ├── Hero.tsx            # Hero banner & primary CTAs
│   ├── Projects.tsx        # Projects grid with tags & external links
│   ├── About.tsx           # Developer background & story
│   ├── Experience.tsx     # Work experience timeline
│   ├── Skills.tsx          # Technical skills grouped by category
│   ├── Education.tsx       # Educational degree cards
│   └── Contact.tsx         # Direct contact card & social grid
├── data/                   # Data models & content source files
│   ├── projects.ts         # Portfolio projects data array
│   ├── experience.ts       # Work experience details
│   ├── skills.ts           # Skill categories and skill items
│   └── education.ts        # Degree & university records
├── types/                  # TypeScript interfaces and type definitions
├── public/                 # Static assets (images, favicons, logos)
├── next.config.ts          # Next.js configuration settings
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and npm scripts
```

---

## 🚀 Featured Projects Showcase

| Project | Description | Stack | Links |
| :--- | :--- | :--- | :--- |
| **SwanPr** | AI Code Review Engine delivering line-by-line PR audits with AST parsing. | `TypeScript`, `LLMs`, `GitHub API`, `Inngest`, `Pinecone` | [Live Demo](https://swanpr.vercel.app) • [GitHub](https://github.com/arkapravachakraborty/swanpr) |
| **Chaiwinddev** | Lightweight utility-first CSS-in-JS library published on NPM. | `JavaScript`, `Node.js`, `CSS-in-JS`, `NPM` | [Live Demo](https://chaiwind-home-page.vercel.app) • [GitHub](https://github.com/arkapravachakraborty/Chaiwind-CSS) |
| **VidyaNetra AI** | Trust-driven retrieval engine with live web synthesis via Gemini API. | `Next.js`, `Google Gemini API`, `Serper API`, `Tailwind CSS` | [Live Demo](https://vidyanetraai.vercel.app/) • [GitHub](https://github.com/arkapravachakraborty/vidyanetraai) |
| **Special Forms** | Full-stack monorepo form builder & spreadsheet inspection engine. | `Next.js`, `Express`, `tRPC`, `Drizzle ORM`, `PostgreSQL` | [GitHub](https://github.com/arkapravachakraborty/special-forms) |
| **Poll io** | Real-time polling and analytics platform powered by WebSockets. | `Next.js`, `Node.js`, `Socket.io`, `Drizzle ORM`, `PostgreSQL` | [GitHub](https://github.com/arkapravachakraborty/livepoll) |
| **Real-Time Location Tracker** | High-concurrency geolocation tracking system with Kafka streams. | `Node.js`, `Socket.io`, `Apache Kafka`, `Leaflet`, `OIDC` | [GitHub](https://github.com/arkapravachakraborty/live-location) |

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher
- **npm** / **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arkapravachakraborty/portfolio2.git
   cd portfolio2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view your site live.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode at `http://localhost:3000` |
| `npm run build` | Builds the application for production deployment |
| `npm run start` | Starts the production build server locally |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

---

## 🌐 Connect with Me

- **Email:** [arkaprava200212345@gmail.com](mailto:arkaprava200212345@gmail.com)
- **Portfolio:** [arkapravachakraborty.vercel.app](https://arkapravachakraborty.vercel.app/)
- **LinkedIn:** [linkedin.com/in/arkapravachakraborty](https://linkedin.com/in/arkapravachakraborty)
- **GitHub:** [github.com/arkapravachakraborty](https://github.com/arkapravachakraborty)
- **Twitter / X:** [@Arkaprava01](https://x.com/Arkaprava01)
- **Hashnode:** [@arkapravachakraborty](https://hashnode.com/@arkapravachakraborty)
- **Instagram:** [@arkapravachakraborty1](https://www.instagram.com/arkapravachakraborty1)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use it as inspiration for your own portfolio!
