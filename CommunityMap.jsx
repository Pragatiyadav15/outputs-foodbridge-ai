import { motion } from "framer-motion";
import { liveDonations } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function CommunityMap() {
  return (
    <section className="section-pad mesh dark:bg-slate-950">
      <SectionHeader
        eyebrow="Community Network"
        title="Live donations moving across the city."
        copy="Volunteers, mess managers, and NGOs share one map so urgency turns into coordinated action."
      />
      <div className="glass relative mx-auto mt-16 h-[560px] max-w-7xl overflow-hidden rounded-[2rem] p-6">
        <div className="absolute inset-6 rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(16,185,129,.18),transparent_55%),linear-gradient(135deg,rgba(30,58,138,.12),rgba(245,158,11,.1))]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M18 42 C36 18, 52 38, 71 62"
            stroke="#10B981"
            strokeWidth="0.45"
            fill="none"
            strokeDasharray="3 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
          />
          <motion.path
            d="M58 28 C49 48, 43 64, 21 42"
            stroke="#F59E0B"
            strokeWidth="0.38"
            fill="none"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.25 }}
          />
        </svg>
        {liveDonations.map((donation, index) => (
          <motion.div
            key={donation.from}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.18 }}
            className="absolute"
            style={{ left: donation.x, top: donation.y }}
          >
            <div className="relative">
              <span className="absolute -inset-4 animate-ping rounded-full bg-bridge-emerald/30" />
              <div className="relative min-w-56 rounded-3xl bg-white p-4 shadow-soft dark:bg-slate-900">
                <p className="text-sm font-black text-slate-950 dark:text-white">{donation.from}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-300">to {donation.to}</p>
                <p className="mt-3 text-2xl font-black text-bridge-emerald">{donation.meals} meals</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
