"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  remote?: boolean;
  stack: string[];
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Tutu Argentina",
    role: "Backend Developer",
    period: "Apr 2025 – Mar 2026",
    remote: true,
    stack: ["NestJS", "Redis", "BullMQ", "AWS"],
    bullets: [
      "Arquitecté y mantengo microservicios escalables para la plataforma principal usando NestJS.",
      "Implementé colas de trabajo con BullMQ y Redis para procesamiento asíncrono y notificaciones.",
    ],
  },
  {
    company: "Gearthlogic",
    role: "Full Stack Developer",
    period: "Jul 2024 – Jul 2025",
    remote: true,
    stack: ["NestJS", "React", "TypeScript"],
    bullets: [
      "Construí dashboards internos completos con backend en NestJS y frontend en React.",
      "Desarrollé flujos de autenticación complejos (JWT, acceso basado en roles) y manejo de sesiones.",
      "Colaboré directamente con stakeholders para traducir requerimientos en funcionalidades reales.",
    ],
  },
  {
    company: "EcoAdvisor",
    role: "Full Stack Developer",
    period: "Nov 2023 – Jul 2025",
    remote: true,
    stack: ["Node.js", "Express", "React", "MongoDB"],
    bullets: [
      "Desarrollé APIs RESTful y lógica de negocio para una plataforma SaaS de sostenibilidad.",
      "Integré fuentes de datos externas y construí pipelines de procesamiento con Node.js.",
      "Construí y mantuve la UI en React, manejando el estado global con Redux.",
    ],
  },
  {
    company: "MakiSan Tech",
    role: "Frontend Developer",
    period: "May 2023 – Oct 2023",
    remote: true,
    stack: ["React", "Redux Toolkit", "Figma"],
    bullets: [
      "Transformé diseños de Figma en componentes React responsivos y pixel-perfect.",
      "Administré el estado global con Redux Toolkit y optimicé el rendimiento de renderizado.",
      "Trabajé codo a codo con diseñadores para iterar sobre detalles de UI/UX.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
        className="space-y-12"
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-blue-400"
        >
          Experiencia
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Dónde trabajé.
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-4 space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/8" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-[#0a0a0a]" />

              {/* Card */}
              <div className="glass rounded-xl p-5 transition hover:border-white/10">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {job.role}
                      <span className="ml-2 text-blue-400">@ {job.company}</span>
                    </h3>
                    <p className="mt-0.5 text-xs text-white/40">{job.period}</p>
                  </div>
                  {job.remote && (
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-400">
                      Remoto
                    </span>
                  )}
                </div>

                {/* Bullets */}
                <ul className="mb-4 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-white/55">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/6 bg-white/4 px-2 py-0.5 text-[11px] font-medium text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
