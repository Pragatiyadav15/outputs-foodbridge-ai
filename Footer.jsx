import { Github, Instagram, Linkedin, Mail, UtensilsCrossed } from "lucide-react";

const links = ["About", "Contact", "NGOs", "Privacy Policy", "Terms"];

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bridge-emerald text-white">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <span className="text-xl font-black">FoodBridge AI</span>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            AI-powered food redistribution for hostels, NGOs, colleges, volunteers, and social-impact partners.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {links.map((link) => (
            <a key={link} href="#home" className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center">
        <p>2026 FoodBridge AI. Built for safer giving and measurable impact.</p>
        <div className="flex gap-2">
          {[Mail, Linkedin, Instagram, Github].map((Icon, index) => (
            <a
              key={index}
              href="#home"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-bridge-emerald"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
