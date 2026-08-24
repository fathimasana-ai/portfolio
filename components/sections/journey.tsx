import { journey, journeyIntro } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Journey() {
  return (
    <section id="journey" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="02" title="My Journey" intro={journeyIntro} /></Reveal>
      <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-6">
        {journey.map((step, index) => (
          <Reveal key={step.label} delay={index * 0.04} className="relative border-l hairline pb-10 pl-6 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-7 lg:pr-6 last:pb-0">
            <span className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-[var(--accent)] lg:-top-[5px] lg:left-0" />
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)]">{step.period}</p>
            <h3 className="mt-3 text-lg font-medium text-white">{step.label}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
