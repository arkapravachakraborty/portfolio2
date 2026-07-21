"use client";

import React from "react";
import { educationData } from "@/data/education";

export default function Education() {
    return (
        <section
            id="education"
            className="w-full bg-black px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-7xl">

                {/* Top Left Aligned Heading */}
                <div className="mb-16 text-left">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                        Academic Background
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Education
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-white" />
                </div>

                {/* Education Timeline */}
                <div className="relative ml-4 space-y-12 border-l border-neutral-800 md:ml-6">
                    {educationData.map((item, index) => (
                        <div key={index} className="group relative pl-8 md:pl-10">

                            {/* Timeline Dot Indicator */}
                            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 transition-colors duration-200 group-hover:border-white group-hover:bg-white" />

                            {/* Education Card */}
                            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl md:p-8">

                                {/* Header: Degree & Institution + Duration */}
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                                            {item.degree}
                                        </h3>
                                        <div className="mt-1 flex items-center gap-2 text-base font-semibold text-neutral-300">
                                            <span>{item.institution}</span>
                                            {item.location && (
                                                <>
                                                    <span className="text-neutral-600">•</span>
                                                    <span className="text-sm font-normal text-neutral-400">
                                                        {item.location}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="inline-flex items-center self-start rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-bold text-neutral-300 sm:self-center">
                                        {item.duration}
                                    </div>
                                </div>

                                {/* Grade / Score Badge */}
                                {item.grade && (
                                    <div className="mt-5">
                                        <div className="inline-flex items-center gap-2.5 rounded-lg border border-neutral-700 bg-neutral-900/90 px-4 py-2 shadow-sm">
                                            <span className="text-lg font-bold text-white sm:text-xl">
                                                {item.grade}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Key Highlights / Details */}
                                {item.details && item.details.length > 0 && (
                                    <ul className="mt-6 space-y-3 text-sm font-normal leading-relaxed text-neutral-400 md:text-base">
                                        {item.details.map((detail, detailIdx) => (
                                            <li key={detailIdx} className="flex items-start gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-500" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}