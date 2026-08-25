import { education } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Education() {
  return (
    <section id="education" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="08" title="Academic Profile" /></Reveal>
      {education.length > 0 && (
        <>
          <Reveal>
            <article className="grid items-end gap-10 border-t hairline pt-8 md:grid-cols-[1fr_auto]">
              <div className="min-w-0">
                <p className="eyebrow">{education[0].school} · {education[0].location}</p>
                <h3 className="mt-5 break-words text-2xl font-medium text-white sm:text-4xl">{education[0].qualification}</h3>
                <p className="mt-4 text-sm text-[var(--muted)]">{education[0].completed}</p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {education[0].subjects.map((subject) => (
                    <span key={subject} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{subject}</span>
                  ))}
                </div>
                {education[0].highlights && education[0].highlights.length > 0 && (
                  <ul className="mt-6 space-y-2 text-sm leading-6 text-[var(--muted)]">
                    {education[0].highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="md:text-right">
                <p className="text-[clamp(5rem,13vw,10rem)] font-medium leading-[.8] tracking-[-.09em] text-[var(--accent)]">{education[0].score}</p>
                <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[.12em] text-[var(--muted)]">{education[0].scoreLabel}</p>
              </div>
            </article>
          </Reveal>
          {education.slice(1).length > 0 && (
            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {education.slice(1).map((item, index) => (
                <Reveal key={`${item.school}-${item.qualification}`} delay={index * 0.05}>
                  <article className="h-full min-w-0 rounded-xl border hairline bg-[var(--surface)] p-6 sm:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="eyebrow break-words">{item.school} · {item.location}</p>
                        <h3 className="mt-4 break-words text-xl font-medium leading-snug text-white sm:text-2xl">{item.qualification}</h3>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[.8] tracking-[-.07em] text-[var(--accent)]">{item.score}</p>
                        <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[.1em] text-[var(--muted)]">{item.scoreLabel}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-[var(--muted)]">{item.completed}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.subjects.map((subject) => (
                        <span key={subject} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{subject}</span>
                      ))}
                    </div>
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-6 space-y-2 text-sm leading-6 text-[var(--muted)]">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
