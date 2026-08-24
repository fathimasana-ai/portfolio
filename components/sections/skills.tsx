import { skills } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-y hairline bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeader number="03" title="Technical Skills" intro="A working toolkit shaped by building, learning and shipping applied projects." /></Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06}>
              <article className="h-full rounded-xl border hairline bg-[var(--surface)] p-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-7 text-lg font-medium text-white">{group.category}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => <li key={item} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{item}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
