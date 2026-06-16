import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, HeartHandshake, Leaf, MapPin, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { HeroScene } from "../HeroScene";

const floatCards = [
  { label: "Fresh dinner packs", value: "240 meals", icon: Sparkles, className: "left-3 top-24" },
  { label: "NGO pickup ready", value: "12 min", icon: MapPin, className: "right-4 top-32" },
  { label: "Impact verified", value: "98% safe", icon: HeartHandshake, className: "bottom-20 left-8" },
  { label: "Waste prevented", value: "36 kg", icon: Leaf, className: "bottom-16 right-8" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 110]);

  return (
    <section id="home" className="mesh relative min-h-screen overflow-hidden px-5 pb-20 pt-32 dark:bg-slate-950">
      <div className="grid-mask absolute inset-0" />
      <motion.div style={{ y }} className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-bridge-emerald/20 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_.96fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-bold text-bridge-blue shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-emerald-100"
          >
            <Activity className="h-4 w-4 text-bridge-emerald" />
            AI food rescue network for campuses and NGOs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black leading-[1.02] text-slate-950 dark:text-white md:text-7xl xl:text-8xl"
          >
            Every Meal Saved Can Change a Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl"
          >
            Connect surplus hostel food with NGOs and people in need using AI-powered food redistribution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button>Donate Food Now</Button>
            <Button variant="secondary">Partner as NGO</Button>
          </motion.div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
            {["Verified NGOs", "Safe Pickup", "CSR Reports"].map((item) => (
              <div key={item} className="glass rounded-2xl px-3 py-4 text-xs font-bold text-slate-700 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative min-h-[560px]"
        >
          <div className="glass absolute inset-x-0 top-10 h-[500px] rounded-[2rem] p-2">
            <HeroScene />
          </div>
          {floatCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ opacity: { delay: 0.55 + index * 0.12 }, y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" } }}
                className={`glass absolute ${card.className} rounded-2xl p-4`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-bridge-emerald dark:bg-emerald-400/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-300">{card.label}</p>
                    <p className="text-lg font-black text-slate-950 dark:text-white">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
