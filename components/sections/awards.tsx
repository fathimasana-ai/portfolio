import { Award as AwardIcon } from "lucide-react";
import { awards, otherAchievements } from "@/content/content";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Awards() {
  return (
    <section id="awards" className="section-pad mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Reveal><SectionHeader number="06" title="Hackathons & Awards" intro="Recognition for ideas, communication and building useful technology with others." /></Reveal>
      <div className="grid gap-3 lg:grid-cols-3">
        {awards.map((award, index) => <Reveal key={award.title} delay={index * 0.05}><article className={`h-full min-w-0 rounded-xl border p-6 sm:p-8 ${index === 0 ? "border-[rgba(121,215,243,.4)] bg-[var(--accent-soft)] lg:col-span-2" : "hairline bg-[var(--surface)]"}`}><div className="flex justify-between gap-4"><AwardIcon size={23} className="text-[var(--accent)]" strokeWidth={1.4} /><span className="font-mono text-[0.65rem] text-[var(--muted)]">{award.date}</span></div><h3 className="mt-8 max-w-xl break-words text-xl font-medium leading-snug text-white sm:text-2xl">{award.title}</h3><p className="mt-3 text-sm text-[var(--accent)]">{award.event}{award.organisation && ` · ${award.organisation}`}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">{award.description}</p>{award.highlights.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{award.highlights.map((item) => <span key={item} className="rounded-full border hairline px-3 py-2 text-xs text-[var(--muted)]">{item}</span>)}</div>}{award.proof && <div className="mt-7"><LinkButton href={award.proof} icon="ArrowUpRight">View proof</LinkButton></div>}</article></Reveal>)}
      </div>
      {otherAchievements.length > 0 && <Reveal><div className="mt-12 border-t hairline pt-8"><p className="eyebrow">Other achievements</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{otherAchievements.map((item) => <li key={item} className="border-b hairline pb-3 text-sm text-[var(--muted)]">— {item}</li>)}</ul></div></Reveal>}
    </section>
  );
}
