"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:gaspar.serna.dev@gmail.com",
    description: "gaspar.serna.dev@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/gxspxr",
    description: "github.com/gxspxr",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaspar-serna-8a0945215",
    description: "linkedin.com/in/gaspar-serna-8a0945215",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-32">
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
          Contacto
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Trabajemos juntos.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-md text-base text-white/50"
        >
          ¿Querés trabajar juntos o simplemente saludar? Siempre estoy abierto
          a nuevas oportunidades, proyectos interesantes o simplemente una
          buena charla.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          {links.map(({ icon: Icon, label, href, description }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={`Contactar por ${label}`}
              className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/3 px-5 py-4 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/50 transition group-hover:border-blue-500/30 group-hover:text-blue-400">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {label}
                </span>
                <span className="text-xs text-white/40">{description}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-white/20 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
