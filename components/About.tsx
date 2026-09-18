"use client";

import React from "react";
import Image from "next/image";

// Replace with your actual Google Drive resume link
const RESUME_DRIVE_URL = "https://inapp.app/arka/arka-resume";

export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-black px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-7xl">

                {/* Top Left Aligned Heading */}
                <div className="mb-12 text-left">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                        Get To Know Me
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        About Me
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-white" />
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">

                    {/* Left Side: Photo Frame */}
                    <div className="flex flex-shrink-0 items-center justify-center">
                        <div className="relative h-[360px] w-[270px] sm:h-[420px] sm:w-[315px] lg:h-[460px] lg:w-[345px]">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neutral-700 to-neutral-900 opacity-75 blur-md" />

                            {/* Image Container */}
                            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-neutral-800 bg-neutral-900 shadow-2xl">
                                <Image
                                    src="/arkaprava3.png"
                                    alt="Arkaprava Chakraborty"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Bio & Details */}
                    <div className="flex flex-1 flex-col justify-between space-y-6 text-left">

                        {/* Bio */}
                        <div className="space-y-4 text-base font-normal leading-relaxed text-neutral-300 sm:text-lg">
                            <p>
                                Hello! I’m <strong className="font-bold text-white">Arkaprava Chakraborty</strong>, a passionate
                                Full-Stack Developer and Software Engineer focused on building fast, scalable web applications
                                and crafting clean user interfaces.
                            </p>
                            <p>
                                I thrive on solving complex technical challenges across both frontend and backend architectures,
                                working extensively with technologies like JavaScript, TypeScript, React, Next.js, and Node.js.
                            </p>
                            <p>
                                When I’m not coding, you can find me writing technical posts, working on open-source libraries,
                                or practicing algorithmic problem-solving.
                            </p>
                        </div>

                        {/* Social Links with Logos */}
                        <div className="pt-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                                Connect With Me
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {/* Hashnode */}
                                <a
                                    href="https://hashnode.com/@arkapravachakraborty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
                                >
                                    <svg
                                        className="h-5 w-5 fill-current text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
                                    </svg>
                                    Hashnode
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/arkapravachakraborty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
                                >
                                    <svg
                                        className="h-5 w-5 fill-current text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                    LinkedIn
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/arkapravachakraborty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
                                >
                                    <svg
                                        className="h-5 w-5 fill-current text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                    </svg>
                                    GitHub
                                </a>

                                {/* Twitter / X */}
                                <a
                                    href="https://x.com/Arkaprava01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
                                >
                                    <svg
                                        className="h-5 w-5 fill-current text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    Twitter
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/arkapravachakraborty1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
                                >
                                    <svg
                                        className="h-5 w-5 fill-current text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    Instagram
                                </a>
                            </div>
                        </div>

                        {/* Resume Button */}
                        <div className="pt-4">
                            <a
                                href={RESUME_DRIVE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-3.5 text-base font-extrabold text-black transition-all duration-200 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                            >
                                {/* Download Icon */}
                                <svg
                                    className="h-5 w-5 fill-none stroke-current stroke-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                Download Resume
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}