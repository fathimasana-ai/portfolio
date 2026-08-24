import { projects } from "@/content/content";
import { ArchitectureFlow } from "@/components/sections/architecture-flow";
import { LinkButton } from "@/components/ui/link-button";
import { MediaFrame } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Projects() {
  return (
    <section id="projects" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="04" title="Featured Projects" intro="Selected systems where I moved from an idea or problem to a working, testable experience." /></Reveal>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <article id={project.id} key={project.id} className="scroll-mt-28">
            <Reveal>
              <div className="grid min-w-0 gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
                <div>
                  <div className="flex items-start justify-between gap-4"><div className="min-w-0"><p className="eyebrow">Project 0{index + 1}</p><h3 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">{project.name}</h3><p className="mt-3 break-words text-lg text-[var(--accent)]">{project.subtitle}</p></div><span className="font-mono text-4xl text-white/10">0{index + 1}</span></div>
                  <p className="mt-8 text-base leading-8 text-[var(--muted)]">{project.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-3"><LinkButton href={project.github} icon="Github">GitHub</LinkButton><LinkButton href={project.liveDemo} icon="ArrowUpRight">Live demo</LinkButton><LinkButton href={project.demoVideo} icon="Play">Demo video</LinkButton></div>
                </div>
                <div className="grid content-start gap-3 sm:grid-cols-2">
                  {project.screenshots.length ? project.screenshots.map((shot) => <MediaFrame key={shot.src} {...shot} />) : <div className="flex min-h-56 items-center justify-center rounded-xl border hairline bg-[var(--surface)] p-8 text-center font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[var(--muted)] sm:col-span-2">Project screenshots coming soon</div>}
                </div>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-8 border-t hairline pt-10 md:grid-cols-2">
              <Reveal><div><p className="eyebrow">The problem</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.problem}</p></div></Reveal>
              {project.solution && <Reveal delay={0.06}><div><p className="eyebrow">The solution</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.solution}</p></div></Reveal>}
            </div>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <Reveal><div><p className="eyebrow">What I built</p><ul className="mt-5 space-y-3">{project.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-[var(--muted)]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />{feature}</li>)}</ul></div></Reveal>
              <Reveal delay={0.06}><div><p className="eyebrow">Technology</p><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{item}</span>)}</div><p className="eyebrow mt-10">My role</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.role}</p></div></Reveal>
            </div>
            {project.attribution && <div className="mt-10 border-l-2 border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-7 text-[#d7f4fc]"><strong className="font-medium text-white">Attribution &amp; provenance:</strong> {project.attribution}</div>}
            {project.architecture && <ArchitectureFlow steps={project.architecture} />}
          </article>
        ))}
      </div>
    </section>
  );
}
