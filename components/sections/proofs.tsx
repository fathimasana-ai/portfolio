import { ArrowUpRight, FileCheck2 } from "lucide-react";
import { proofs } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function Proofs() {
  return (
    <section id="proofs" className="section-pad border-y hairline bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeader number="11" title="Proof / Documents" intro="A growing evidence library for projects, awards, academic results and research." /></Reveal>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{proofs.map((proof, index) => <Reveal key={proof.title} delay={index * .03}><article className="flex h-full flex-col rounded-xl border hairline bg-[var(--surface)] p-6"><div className="flex items-center justify-between"><FileCheck2 size={21} className="text-[var(--accent)]" strokeWidth={1.3} /><span className="font-mono text-[0.62rem] uppercase tracking-[.12em] text-[var(--muted)]">{proof.category}</span></div><h3 className="mt-7 text-lg font-medium leading-snug text-white">{proof.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{proof.description}</p><div className="mt-auto pt-7">{proof.href ? <a href={proof.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--accent)] hover:text-white focus-ring">View proof <ArrowUpRight size={15} /></a> : <span className="font-mono text-[0.65rem] uppercase tracking-[.12em] text-[var(--muted)]">Coming soon</span>}</div></article></Reveal>)}</div>
      </div>
    </section>
  );
}
