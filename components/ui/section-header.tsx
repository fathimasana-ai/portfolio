export function SectionHeader({
  number,
  title,
  intro,
}: {
  number: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow mb-4">{number} — {title}</p>
      <h2 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{intro}</p>}
    </div>
  );
}
