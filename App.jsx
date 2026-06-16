import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { Impact } from "./components/sections/Impact";
import { ProblemSolution } from "./components/sections/ProblemSolution";
import { HowItWorks } from "./components/sections/HowItWorks";
import { AIFeatures } from "./components/sections/AIFeatures";
import { DashboardPreview } from "./components/sections/DashboardPreview";
import { Stories } from "./components/sections/Stories";
import { Environment } from "./components/sections/Environment";
import { Partners } from "./components/sections/Partners";
import { CommunityMap } from "./components/sections/CommunityMap";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: Number(element.dataset.parallax) || -8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-bridge-white text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <Header dark={dark} onToggleTheme={() => setDark((value) => !value)} />
      <main>
        <Hero />
        <Impact />
        <ProblemSolution />
        <HowItWorks />
        <AIFeatures />
        <DashboardPreview />
        <Stories />
        <Environment />
        <Partners />
        <CommunityMap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
