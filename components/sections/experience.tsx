import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Experience() {
  return (
    <section id="experience" className="section-pad border-y hairline bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeader number="09" title="Leadership & Experience" /></Reveal>
        <div className="divide-y hairline border-y hairline">{experience.map((item, index) => <Reveal key={`${item.role}-${item.organisation}`} delay={index * .05}><article className="grid gap-4 py-7 md:grid-cols-[.8fr_1.2fr_auto] md:gap-8"><div className="flex items-start gap-3"><BriefcaseBusiness size={18} className="mt-1 text-[var(--accent)]" strokeWidth={1.4} /><div><h3 className="font-medium text-white">{item.role}</h3><p className="mt-1 text-sm text-[var(--accent)]">{item.organisation}</p></div></div><div><p className="text-sm leading-7 text-[var(--muted)]">{item.description}</p>{item.points && item.points.length > 0 && <ul className="mt-5 space-y-3">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-[var(--muted)]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" /><span>{point}</span></li>)}</ul>}</div>{item.period && <p className="font-mono text-[0.65rem] uppercase tracking-[.1em] text-[var(--muted)] md:text-right">{item.period}</p>}</article></Reveal>)}</div>
      </div>
    </section>
  );
}
