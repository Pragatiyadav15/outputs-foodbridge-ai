import { Moon, Sun, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { navItems } from "../data/content";

export function Header({ dark, onToggleTheme }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
    >
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full text-slate-950 dark:text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bridge-emerald text-white shadow-glow">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="text-base font-black">FoodBridge AI</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white/70 hover:text-bridge-blue dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-800 transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/10 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="#cta"
            className="focus-ring hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-bridge-blue sm:inline-flex dark:bg-white dark:text-slate-950"
          >
            Donate Food
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
