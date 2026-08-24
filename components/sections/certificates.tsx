import { certificates } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { LinkButton } from "@/components/ui/link-button";
import { CertificatePreview } from "@/components/ui/certificate-preview";

export function Certificates() {
  return (
    <section id="certificates" className="section-pad border-y hairline bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeader number="07" title="Certifications & Learning" intro="Foundational study that supports the work — from computational thinking to machine learning and AI." /></Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => <Reveal key={certificate.title} delay={index * 0.04}><article className="flex h-full min-w-0 flex-col rounded-xl border hairline bg-[var(--surface)] p-6">{certificate.file ? <CertificatePreview file={certificate.file} /> : <div className="flex aspect-[1.55/1] items-center justify-center rounded-lg border hairline bg-[#090b10] text-center text-[var(--muted)]"><span className="font-mono text-[0.62rem] uppercase tracking-[.12em]">Certificate pending upload</span></div>}<h3 className="mt-6 break-words text-lg font-medium leading-snug text-white">{certificate.title}</h3><p className="mt-2 text-sm text-[var(--muted)]">{certificate.issuer}</p><div className="mt-auto flex items-center justify-between gap-4 pt-7"><span className="font-mono text-[0.65rem] text-[var(--muted)]">{certificate.year}</span>{certificate.verifyUrl && <LinkButton href={certificate.verifyUrl} icon="ArrowUpRight" variant="text">Verify</LinkButton>}</div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
