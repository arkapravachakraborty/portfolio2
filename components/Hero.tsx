"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-73px)] w-full items-center justify-center bg-black px-6 py-16 text-white"
        >
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">

                {/* Left Side: Text & Actions */}
                <div className="flex flex-1 flex-col items-start space-y-6 text-left">

                    {/* Greeting & Name */}
                    <div className="space-y-2">
                        {/* <span className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                            Welcome to my portfolio
                        </span> */}
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                            HI, I AM <br />
                            <span className="text-white">ARKAPRAVA CHAKRABORTY</span>
                        </h1>
                    </div>

                    {/* One Line Description */}
                    <p className="max-w-2xl text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl">
                        Full-Stack Developer building scalable web applications and high-performance digital experiences.
                    </p>

                    {/* Action Buttons & Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        {/* Contact Me CTA */}
                        <a
                            href="#contact"
                            className="rounded-lg bg-white px-7 py-3.5 text-base font-bold text-black transition-all duration-200 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Contact Me
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://linkedin.com/in/arkapravachakraborty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800"
                        >
                            LinkedIn
                        </a>

                        {/* GitHub Link */}
                        <a
                            href="https://github.com/arkapravachakraborty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right Side: Profile Image */}
                <div className="flex flex-1 items-center justify-center">

                    <div className="relative h-[360px] w-[270px] sm:h-[440px] sm:w-[330px] lg:h-[500px] lg:w-[375px]">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neutral-700 to-neutral-900 opacity-75 blur-md" />
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-neutral-800 bg-neutral-900 shadow-2xl">
                            <Image
                                src="/arkaprava1.png"
                                alt="Arkaprava Chakraborty"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}