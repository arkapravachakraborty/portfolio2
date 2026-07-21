import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
    {
        title: "Chaiwind CSS Engine",
        description:
            "A lightweight, utility-first CSS-in-JS styling engine engineered for optimal performance, fast build times, and zero-runtime overhead.",
        tags: ["TypeScript", "Node.js", "CSS-in-JS", "NPM"],
        liveLink: "https://www.npmjs.com/package/chaiwinddev",
        codeLink: "https://github.com",
    },
    {
        title: "Real-Time Location Tracker",
        description:
            "High-concurrency geolocation tracking system utilizing WebSockets and Kafka stream processing for live map updates and low-latency metrics.",
        tags: ["Node.js", "Socket.io", "Apache Kafka", "Leaflet"],
        liveLink: "https://example.com",
        codeLink: "https://github.com",
    },
    {
        title: "Auth & Identity App",
        description:
            "Modern full-stack authentication web app featuring token rotation, secure session storage, and granular access control logic.",
        tags: ["React", "Tailwind CSS", "REST API", "JavaScript"],
        codeLink: "https://github.com",
    },

];