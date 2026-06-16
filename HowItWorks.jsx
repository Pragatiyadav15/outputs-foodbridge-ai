import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { processSteps } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { pulseLottie } from "../ui/lottieData";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white dark:bg-slate-950">
      <SectionHeader
        eyebrow="How It Works"
        title="Four steps from hostel surplus to human impact."
        copy="Designed for busy mess teams and field NGOs, every step is fast, clear, and auditable."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute right-0 top-0 h-36 w-36 opacity-30 transition group-hover:scale-125">
                <Lottie animationData={pulseLottie} loop autoplay />
              </div>
              <div className="relative z-10">
                <span className="text-sm font-black text-bridge-orange">STEP {index + 1}</span>
                <div className="my-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-bridge-emerald text-white shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{step.copy}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
