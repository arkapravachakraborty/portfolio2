"use client";

import { projectsData } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full bg-black px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-7xl">

                {/* Top Left Aligned Heading */}
                <div className="mb-12 text-left">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                        Portfolio Showcase
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Featured Projects
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-white" />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className="group flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl"
                        >
                            <div>
                                {/* Project Title */}
                                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-neutral-200">
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p className="mt-4 text-base font-normal leading-relaxed text-neutral-400">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-bold text-neutral-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="mt-8 flex items-center space-x-4 border-t border-neutral-900 pt-6">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-neutral-200"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-neutral-600 hover:bg-neutral-800"
                                >
                                    View Code
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}