import { motion } from "framer-motion";
import { Activity, CloudSun, Leaf, TrendingUp, UsersRound } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const bars = [44, 68, 52, 81, 73, 94, 88];
const heatmap = Array.from({ length: 24 }, (_, index) => (index * 17) % 100);

export function DashboardPreview() {
  return (
    <section id="dashboard" className="section-pad bg-slate-950 text-white">
      <SectionHeader
        eyebrow="Dashboard Preview"
        title="A command center for trust, logistics, and impact."
        copy="Hostels, NGOs, and colleges see donation analytics, heatmaps, food saved trends, environmental metrics, and active partner capacity."
      />
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_32px_110px_rgba(0,0,0,.38)] backdrop-blur"
      >
        <div className="rounded-[1.5rem] bg-slate-900 p-5">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-bridge-emerald">FoodBridge AI Ops</p>
              <h3 className="mt-2 text-2xl font-black">Donation Intelligence Dashboard</h3>
            </div>
            <div className="flex gap-2">
              {["Live", "Weekly", "CSR"].map((tab) => (
                <span key={tab} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">{tab}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.45fr_.9fr]">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Meals today", value: "2,846", icon: Activity },
                { label: "Active NGOs", value: "64", icon: UsersRound },
                { label: "CO2 prevented", value: "4.8 t", icon: Leaf },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[.06] p-5">
                    <Icon className="mb-5 h-6 w-6 text-bridge-orange" />
                    <p className="text-3xl font-black">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </div>
                );
              })}
              <div className="rounded-3xl border border-white/10 bg-white/[.06] p-5 md:col-span-3">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-black">Food saved trends</h4>
                  <TrendingUp className="h-5 w-5 text-bridge-emerald" />
                </div>
                <div className="flex h-56 items-end gap-3">
                  {bars.map((height, index) => (
                    <motion.div
                      key={height}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.8 }}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-bridge-emerald to-bridge-orange"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[.06] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-black">Pickup heatmap</h4>
                  <CloudSun className="h-5 w-5 text-bridge-orange" />
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {heatmap.map((intensity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.015 }}
                      className="aspect-square rounded-xl"
                      style={{ background: `rgba(16,185,129,${0.18 + intensity / 135})` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-5">
                <h4 className="font-black">Weekly prediction</h4>
                <p className="mt-4 text-5xl font-black text-bridge-orange">+28%</p>
                <p className="mt-3 leading-7 text-slate-300">Higher surplus expected near weekend menus. AI recommends adding two NGO pickup slots.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
