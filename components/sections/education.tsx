import { education } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Education() {
  return (
    <section id="education" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="08" title="Academic Profile" /></Reveal>
      <Reveal>
        <div className="grid items-end gap-10 border-t hairline pt-8 md:grid-cols-[1fr_auto]">
          <div><p className="eyebrow">{education.school} · {education.location}</p><h3 className="mt-5 text-2xl font-medium text-white sm:text-4xl">{education.qualification}</h3><p className="mt-4 text-sm text-[var(--muted)]">{education.completed}</p><div className="mt-9 flex flex-wrap gap-2">{education.subjects.map((subject) => <span key={subject} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{subject}</span>)}</div></div>
          <div className="md:text-right"><p className="text-[clamp(5rem,13vw,10rem)] font-medium leading-[.8] tracking-[-.09em] text-[var(--accent)]">{education.score}</p><p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[.12em] text-[var(--muted)]">{education.scoreLabel}</p></div>
        </div>
      </Reveal>
    </section>
  );
}
