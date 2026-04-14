"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface Project {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  live?: string;
  wip?: boolean;
}

const projects: Project[] = [
  {
    name: "COCODE Sentinel",
    description:
      "Revisor de PRs de GitHub potenciado por IA que entrega feedback técnico de alta calidad usando LLMs. Integra GitHub Apps, NestJS y una taxonomía de severidad personalizada.",
    stack: ["NestJS", "Next.js", "TypeScript", "Claude API", "GitHub Apps", "PostgreSQL", "Vercel", "Tailwind CSS", "Zustand"],
    link: "https://www.linkedin.com/posts/gaspar-serna-8a0945215_softwaredevelopment-developertools-github-ugcPost-7449824679516807168-ToQe",
    wip: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-12"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-blue-400"
        >
          Proyectos
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Lo que construí.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col rounded-xl border border-white/8 bg-white/3 p-5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
            >
              {project.wip && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-medium text-yellow-400">
                  <span className="h-1 w-1 rounded-full bg-yellow-400" />
                  EN PROGRESO
                </span>
              )}

              <h3 className="mb-2 text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                {project.name}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-white/50">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/6 bg-white/4 px-2 py-0.5 text-[10px] font-medium text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub repository`}
                    className="flex items-center gap-1.5 text-xs text-white/40 transition hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Post
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="flex items-center gap-1.5 text-xs text-white/40 transition hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
