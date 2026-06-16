import { motion } from "framer-motion";
import { impactStats } from "../../data/content";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { SectionHeader } from "../ui/SectionHeader";

export function Impact() {
  return (
    <section id="impact" className="section-pad bg-white dark:bg-slate-950">
      <SectionHeader
        eyebrow="Live Impact"
        title="Proof that surplus food can become dignity, fast."
        copy="Real-time counters make every mess manager, volunteer, and partner see the human value behind each saved meal."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {impactStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-bridge-emerald dark:bg-emerald-400/15">
                <Icon className="h-6 w-6" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-3xl font-black text-slate-950 dark:text-white" />
              <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-300">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
