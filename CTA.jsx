import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section id="cta" className="section-pad bg-white dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mesh mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-slate-950 p-8 text-white shadow-[0_32px_110px_rgba(15,23,42,.28)] md:p-14"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-bridge-orange">Take Action</p>
            <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Your Leftover Food Is Someone's Next Meal.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Start with one hostel, one verified NGO, one safe pickup window. The bridge grows from there.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Button variant="warm">Start Donating</Button>
            <Button variant="secondary" className="dark:bg-white/10">Become a Partner</Button>
            <Button variant="primary">Join as Volunteer</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
