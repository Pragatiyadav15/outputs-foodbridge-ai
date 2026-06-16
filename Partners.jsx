import { partners } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function Partners() {
  const allPartners = [...partners, ...partners];
  return (
    <section className="overflow-hidden bg-slate-950 px-5 py-24 text-white">
      <SectionHeader eyebrow="Partner Organizations" title="Built for NGOs, colleges, hostels, and CSR teams." />
      <div className="relative mx-auto mt-14 max-w-7xl overflow-hidden">
        <div className="marquee flex w-max gap-4">
          {allPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex h-24 w-56 items-center justify-center rounded-3xl border border-white/10 bg-white/[.06] px-6 text-center text-lg font-black text-slate-100"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
