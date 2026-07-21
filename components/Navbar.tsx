"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { Motion, AnimatePresence } from "framer-motion"; // Optional for smooth mobile menu transition

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Text Logo */}
                <Link href="/" className="group text-xl font-bold tracking-tight text-white">
                    ARKAPRAVA<span className="text-neutral-400 transition-colors group-hover:text-white"></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    aria-label="Toggle menu"
                    className="p-1 text-neutral-400 hover:text-white focus:outline-none md:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <nav className="border-b border-neutral-800 bg-black px-6 pb-6 pt-2 md:hidden">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-neutral-300 transition-colors hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}