import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { stories } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function Stories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section id="stories" className="section-pad mesh dark:bg-slate-950">
      <SectionHeader
        eyebrow="Success Stories"
        title="The best metric is the person who received a meal."
        copy="Stories from hostel owners, NGOs, and volunteers who turned surplus into measurable care."
      />
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 lg:grid-cols-[.75fr_1fr]">
        <div className="grid gap-4">
          {stories.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`focus-ring rounded-3xl p-4 text-left transition ${
                active === index ? "bg-bridge-emerald text-white shadow-glow" : "glass text-slate-700 dark:text-slate-200"
              }`}
            >
              <p className="text-sm font-black">{item.metric}</p>
              <p className="mt-1 text-sm opacity-80">{item.role}</p>
            </button>
          ))}
        </div>
        <div className="glass overflow-hidden rounded-[2rem] p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="rounded-[1.5rem] bg-white p-7 dark:bg-slate-900"
            >
              <Quote className="mb-8 h-10 w-10 text-bridge-orange" />
              <p className="text-2xl font-black leading-snug text-slate-950 dark:text-white md:text-4xl">"{story.quote}"</p>
              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">{story.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{story.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActive((active - 1 + stories.length) % stories.length)}
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setActive((active + 1) % stories.length)}
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                    aria-label="Next story"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
