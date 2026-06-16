import { motion } from "framer-motion";
import { environmentalMetrics } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function Environment() {
  return (
    <section className="section-pad bg-white dark:bg-slate-950">
      <SectionHeader
        eyebrow="Environmental Impact"
        title="Less waste means fewer emissions, less water loss, and more shared abundance."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3">
        {environmentalMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-500 to-bridge-blue p-8 text-white shadow-glow"
            >
              <motion.div
                animate={{ scale: [1, 1.16, 1], opacity: [0.25, 0.42, 0.25] }}
                transition={{ repeat: Infinity, duration: 4 + index }}
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white"
              />
              <Icon className="relative h-10 w-10 text-amber-200" />
              <p className="relative mt-12 text-5xl font-black">{metric.value}</p>
              <p className="relative mt-3 text-lg font-semibold text-emerald-50">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
