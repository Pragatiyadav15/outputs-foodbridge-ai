import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={clsx(
        "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300",
        variant === "primary" &&
          "bg-bridge-emerald text-white shadow-glow hover:-translate-y-0.5 hover:bg-emerald-500",
        variant === "secondary" &&
          "border border-slate-200 bg-white/70 text-slate-900 shadow-soft backdrop-blur hover:-translate-y-0.5 hover:border-bridge-orange hover:text-bridge-blue dark:border-white/15 dark:bg-white/10 dark:text-white",
        variant === "warm" &&
          "bg-bridge-orange text-slate-950 shadow-[0_22px_70px_rgba(245,158,11,.28)] hover:-translate-y-0.5 hover:bg-amber-400",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </button>
  );
}
