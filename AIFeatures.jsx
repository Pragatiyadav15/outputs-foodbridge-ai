import { motion } from "framer-motion";
import { aiFeatures } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function AIFeatures() {
  return (
    <section id="ai-features" className="section-pad mesh dark:bg-slate-950">
      <SectionHeader
        eyebrow="AI Features"
        title="Intelligence that makes generosity operational."
        copy="Prediction, matching, routing, freshness, reporting, and support work together as one donation command center."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {aiFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8, boxShadow: "0 28px 90px rgba(16,185,129,.24)" }}
              className="rounded-3xl border border-slate-200 bg-white/78 p-7 shadow-soft backdrop-blur transition dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-bridge-blue text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{feature.copy}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
