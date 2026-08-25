import { research } from "@/content/content";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Research() {
  return (
    <section id="research" className="section-pad border-y hairline bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeader number="05" title="Research" intro="An applied question at the intersection of technology, business and the UAE context." /></Reveal>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="min-w-0"><span className="inline-flex rounded-full border border-[rgba(121,215,243,.35)] bg-[var(--accent-soft)] px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--accent)]">{research.status}</span><h3 className="mt-7 break-words text-2xl font-medium leading-tight text-white sm:text-3xl">{research.title}</h3>{research.pdf && <div className="mt-8"><LinkButton href={research.pdf} icon="Download">Read full research</LinkButton></div>}</div>
            <div className="grid min-w-0 gap-8 sm:grid-cols-2">
              <div className="sm:col-span-2"><p className="eyebrow">Research question</p><p className="mt-3 text-lg leading-8 text-white">{research.question}</p></div>
              <div><p className="eyebrow">Objective</p><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{research.objective}</p></div>
              <div><p className="eyebrow">Methodology</p><ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">{research.methodology.map((item) => <li key={item}>— {item}</li>)}</ul></div>
              <div><p className="eyebrow">Areas of focus</p><div className="mt-4 flex flex-wrap gap-2">{research.areas.map((area) => <span key={area} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{area}</span>)}</div></div>
              {(research.findings.length > 0 || research.recommendations.length > 0) ? <div className="space-y-7">
                {research.findings.length > 0 && <div><p className="eyebrow">Findings</p><div className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">{research.findings.map((item) => <p key={item}>— {item}</p>)}</div></div>}
                {research.recommendations.length > 0 && <div><p className="eyebrow">Recommendations</p><div className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">{research.recommendations.map((item) => <p key={item}>— {item}</p>)}</div></div>}
              </div> : <div className="space-y-7">
                <div><p className="eyebrow">Findings</p><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Findings are set out in the full research document.</p></div>
                <div><p className="eyebrow">Recommendations</p><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Recommendations are set out in the full research document.</p></div>
              </div>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
