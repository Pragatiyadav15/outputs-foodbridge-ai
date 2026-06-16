import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, copy, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-bridge-emerald">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">{copy}</p>}
    </motion.div>
  );
}
