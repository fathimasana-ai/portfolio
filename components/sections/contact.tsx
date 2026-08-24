import { links, profile } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { LinkButton } from "@/components/ui/link-button";
import { publicAssetExists } from "@/lib/assets";

export function Contact() {
  return (
    <footer id="contact" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="12" title="Contact" intro="Interested in the intersection of AI, business and useful products? I would be glad to connect." /></Reveal>
      <Reveal>
        <div className="grid gap-10 border-y hairline py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-2xl font-medium tracking-[-.03em] text-white sm:text-4xl">{profile.name}</p><p className="mt-3 text-[var(--muted)]">{profile.tagline}</p><div className="mt-7 flex flex-wrap gap-3"><LinkButton href={`mailto:${links.email}`} icon="Mail">Email</LinkButton><LinkButton href={links.linkedin} icon="Linkedin">LinkedIn</LinkButton><LinkButton href={links.github} icon="Github">GitHub</LinkButton><LinkButton href={links.portfolio} icon="ArrowUpRight">Portfolio</LinkButton>{publicAssetExists(links.cv) && <LinkButton href={links.cv} icon="Download" download>CV</LinkButton>}</div></div>
          <div className="text-sm text-[var(--muted)] md:text-right"><p className="font-mono text-[0.65rem] uppercase tracking-[.12em]">Direct line</p><a href={`mailto:${links.email}`} className="mt-3 inline-block text-white hover:text-[var(--accent)] focus-ring">{links.email}</a></div>
        </div>
      </Reveal>
      <div className="mt-9 flex flex-col justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with intention.</span></div>
    </footer>
  );
}
