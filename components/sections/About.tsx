"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stack = [
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "TypeScript", "BullMQ", "Redis", "JWT", "Jest"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "JavaScript", "Zustand"] },
  { category: "Bases de datos", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { category: "Cloud y herramientas", items: ["Docker", "Git", "Postman"] },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-12"
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-blue-400"
        >
          Sobre mí
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Un desarrollador que entrega.
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-base leading-relaxed text-white/60"
        >
          Construyo productos reales, de principio a fin. En el backend me encargo de diseñar APIs, modelar la lógica de negocio, implementar colas de eventos e integrar servicios externos. Me gusta entender bien el problema antes de escribir la primera línea de código. En el frontend construyo interfaces funcionales y cuidadas — componentes reutilizables, flujos de autenticación, dashboards y formularios complejos — siempre con foco en que la experiencia del usuario sea clara y coherente.
        </motion.p>

        {/* Tech stack */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {stack.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-widest text-white/30 pt-[3px]">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium text-white/70 transition hover:border-blue-500/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
