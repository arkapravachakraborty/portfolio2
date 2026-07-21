"use client";

import React from "react";
import { skillsData } from "@/data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full bg-black px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-7xl">

                {/* Top Left Aligned Heading */}
                <div className="mb-12 text-left">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                        Technical Proficiency
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Skills & Tools
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-white" />
                </div>

                {/* Skills Category Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl"
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-neutral-200">
                                {category.title}
                            </h3>

                            {/* Skill Badges */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-bold text-neutral-200 transition-colors duration-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}