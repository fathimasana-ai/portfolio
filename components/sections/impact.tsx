import { HeartHandshake } from "lucide-react";
import { impact } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Impact() {
  return (
    <section id="impact" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="10" title="Social Impact & Community" intro="People-facing experiences that keep the technical work grounded in real communities." /></Reveal>
      <div className="grid gap-3 md:grid-cols-3">{impact.map((item, index) => <Reveal key={item.title} delay={index * .05}><article className="h-full rounded-xl border hairline p-6"><HeartHandshake size={22} className="text-[var(--accent)]" strokeWidth={1.3} /><h3 className="mt-8 text-lg font-medium text-white">{item.title}</h3><p className="mt-2 text-sm text-[var(--accent)]">{item.organisation}</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p></article></Reveal>)}</div>
    </section>
  );
}
