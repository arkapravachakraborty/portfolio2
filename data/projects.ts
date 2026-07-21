import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
    {
        title: "SwanPr",
        description:
            "AI Code Review Engine that delivers line-by-line pull request audits across 3+ code metrics. Built with an event-driven webhook backend processing payloads with 98.9% uptime, leveraging AST parsing to cut token costs by 40% and keep review latency under 30 seconds.",
        tags: ["TypeScript", "LLMs", "GitHub API", "Inngest", "Pinecone"],
        liveLink: "https://swanpr.vercel.app",
        codeLink: "https://github.com/arkapravachakraborty/swanpr",
    },
    {
        title: "Chaiwinddev",
        description:
            "A utility-first CSS-in-JS engine featuring 100+ utility classes for zero-runtime layout styling. Implemented the MutationObserver API for seamless dynamic DOM style synchronizations and reduced layout injection overhead.",
        tags: ["JavaScript", "Node.js", "CSS-in-JS", "NPM"],
        liveLink: "https://chaiwind-home-page.vercel.app",
        codeLink: "https://github.com/arkapravachakraborty/Chaiwind-CSS",
    },

    {
        title: "VidyaNetra AI",
        description:
            "A trust-driven retrieval engine that searches the live web, verifies credibility, and generates cited research briefs. Evaluates scraped text with a custom Trust Engine algorithm and synthesizes context via Google Gemini LLM.",
        tags: ["Next.js", "Google Gemini API", "Serper API", "Web Scraping", "Tailwind CSS"],
        liveLink: "https://vidyanetraai.vercel.app/",
        codeLink: "https://github.com/arkapravachakraborty/vidyanetraai",
    },
    {
        title: "Currency Changer",
        description:
            "Real-time currency converter tracking 15+ global currencies using custom React Hooks to separate network layer logic from UI presentation, boosting responsiveness by 40%.",
        tags: ["React", "REST APIs", "JavaScript", "Tailwind CSS"],
        liveLink: "https://currency-convetor-six.vercel.app/",
        codeLink: "https://github.com/arkapravachakraborty/currencyConvetor",
    },
    {
        title: "Special Forms",
        description:
            "A full-stack, type-safe form builder and response collection engine architected as a Turborepo monorepo. Features dynamic schema building, real-database PostgreSQL persistence via tRPC endpoints, dynamic spreadsheet inspection, and password complexity analysis.",
        tags: ["Next.js", "Express", "tRPC", "Drizzle ORM", "PostgreSQL", "Turborepo"],
        codeLink: "https://github.com/arkapravachakraborty/special-forms",
    },
    {
        title: "OIDC Server",
        description:
            "Custom OpenID Connect (OIDC) identity server. Handles OAuth 2.0 PKCE flows, JWT token issuance, and user authentication to secure the user",
        tags: ["Node.js", "OIDC", "OAuth 2.0", "JWT"],
        codeLink: "https://github.com/arkapravachakraborty/OIDC1",
    },
    {
        title: "Poll io",
        description:
            "Real-time polling and analytics platform for creating, sharing, and analyzing dynamic polls. Uses Socket.io WebSockets for live creator analytics without page refreshes, auto-expiry controls, and one-click public results publishing.",
        tags: ["Next.js", "React Hook Form", "Node.js", "Socket.io", "Drizzle ORM", "PostgreSQL"],
        codeLink: "https://github.com/arkapravachakraborty/livepoll",
    },

    {
        title: "Real-Time Location Tracker",
        description:
            "High-concurrency geolocation tracking system utilizing WebSockets, OIDC authentication, and Kafka stream processing for live map updates and low-latency metrics.",
        tags: ["Node.js", "Socket.io", "Apache Kafka", "Leaflet", "OIDC"],
        codeLink: "https://github.com/arkapravachakraborty/live-location",
    },
    {
        title: "Million Check Boxes",
        description:
            "High-scale web application optimized for rendering and synchronizing a massive state grid of interactive check boxes in real time across connected clients.",
        tags: ["React", "JavaScript", "WebSockets", "State Management"],
        codeLink: "https://github.com/arkapravachakraborty/million-check-boxes",
    },

];