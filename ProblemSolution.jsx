import { motion } from "framer-motion";
import { ArrowRight, Heart, Trash2, Utensils } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

export function ProblemSolution() {
  return (
    <section className="section-pad mesh relative overflow-hidden dark:bg-slate-950">
      <SectionHeader
        eyebrow="Waste Into Care"
        title="A quiet daily loss becomes a visible chain of care."
        copy="FoodBridge AI reframes surplus as a time-sensitive resource, then connects it to verified people who can move it safely."
      />
      <div className="mx-auto mt-16 grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-soft"
        >
          <img
            src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=900&q=80"
            alt="Surplus food waiting to be redirected"
            className="h-80 w-full object-cover opacity-80"
          />
          <div className="p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/20 text-red-200">
              <Trash2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black">Before: edible food is invisible.</h3>
            <p className="mt-3 leading-7 text-slate-300">Surplus gets noticed too late, with no safe matching, pickup, or accountability loop.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bridge-orange text-slate-950 shadow-[0_18px_55px_rgba(245,158,11,.35)]"
        >
          <ArrowRight className="h-7 w-7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-white shadow-soft dark:bg-slate-900"
        >
          <img
            src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=900&q=80"
            alt="Families receiving meals"
            className="h-80 w-full object-cover"
          />
          <div className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-bridge-emerald dark:bg-emerald-400/15">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-950 dark:text-white">After: every meal has a route.</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">AI detects opportunity, matches a trusted NGO, and tracks food until it reaches people.</p>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl items-center gap-3 rounded-3xl bg-bridge-blue p-5 text-white shadow-soft">
        <Utensils className="h-6 w-6 shrink-0 text-bridge-orange" />
        <p className="font-semibold">The goal is simple: make donation feel easier, safer, and more rewarding than disposal.</p>
      </div>
    </section>
  );
}
