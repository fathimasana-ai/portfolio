import { ArrowDown, MapPin } from "lucide-react";
import { links, profile } from "@/content/content";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { publicAssetExists } from "@/lib/assets";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[min(850px,100vh)] items-center overflow-hidden border-b hairline pt-28">
      <div className="site-grid absolute inset-0 -z-20" />
      <div className="hero-glow absolute -right-32 top-12 -z-10 h-[34rem] w-[34rem] rounded-full" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <svg className="h-full w-full" viewBox="0 0 1200 760" fill="none" aria-hidden="true">
          <path d="M785 98L973 240L852 477L1068 611M973 240L1158 142M852 477L615 598" stroke="rgba(121,215,243,.13)" />
          <circle className="node" cx="785" cy="98" r="3" fill="#79d7f3" /><circle className="node" cx="973" cy="240" r="3" fill="#79d7f3" /><circle className="node" cx="852" cy="477" r="3" fill="#79d7f3" /><circle className="node" cx="1068" cy="611" r="3" fill="#79d7f3" />
        </svg>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal>
          <p className="eyebrow mb-8">01 — Profile</p>
          <div className="max-w-5xl">
            <h1 className="max-w-4xl text-[clamp(3.3rem,9vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.08em] text-white">{profile.name}</h1>
            <p className="mt-8 text-xl tracking-[-0.02em] text-[var(--accent)] sm:text-2xl">{profile.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">{profile.intro}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href="#projects" variant="solid">View projects <ArrowDown size={15} /></LinkButton>
            {publicAssetExists(links.cv) && <LinkButton href={links.cv} icon="Download" download>Download CV</LinkButton>}
            <LinkButton href={links.github} icon="Github">GitHub</LinkButton>
            <LinkButton href={links.linkedin} icon="Linkedin">LinkedIn</LinkButton>
          </div>
          <div className="mt-16 flex items-center gap-2 text-xs text-[var(--muted)]"><MapPin size={14} className="text-[var(--accent)]" />{profile.location}</div>
        </Reveal>
        <div className="mt-12 flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:mt-20"><span className="h-px w-10 bg-[var(--accent)]" />Scroll to explore</div>
      </div>
    </section>
  );
}
