"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ArchitectureStep } from "@/content/types";

export function ArchitectureFlow({ steps }: { steps: ArchitectureStep[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-12 rounded-2xl border border-[rgba(121,215,243,.25)] bg-[#0a141b] p-5 sm:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div><p className="eyebrow">Architecture / interaction model</p><h3 className="mt-2 text-xl font-medium text-white">How VERA works</h3></div>
        <span className="hidden font-mono text-[0.65rem] text-[var(--muted)] sm:block">Select a stage to inspect</span>
      </div>
      <div className="hidden gap-2 md:grid md:grid-cols-6">
        {steps.map((step, index) => (
          <div key={step.label} className="relative min-w-0">
            <button
              type="button"
              className={`focus-ring flex min-h-16 w-full items-center justify-between rounded-lg border p-4 text-left transition-colors md:h-28 md:flex-col md:items-start ${
                active === index ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "hairline bg-[#0e1820] hover:border-[var(--line-bright)]"
              }`}
              aria-expanded={active === index}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span className="font-mono text-[0.6rem] text-[var(--accent)]">0{index + 1}</span>
              <span className="mt-2 min-w-0 break-words text-sm font-medium leading-5 text-white">{step.label}</span>
              <ChevronDown className="md:hidden" size={16} />
            </button>
            {index < steps.length - 1 && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[var(--accent)] md:block" size={17} />}
          </div>
        ))}
      </div>
      <div className="mt-3 hidden min-h-36 rounded-lg border border-[rgba(121,215,243,.25)] bg-[#0e1820] p-5 text-sm leading-7 text-[var(--muted)] md:block">
        {steps[active].detail}
      </div>
      <div className="space-y-2 md:hidden">
        {steps.map((step, index) => (
          <div key={step.label}>
            <button
              type="button"
              className={`focus-ring flex min-h-16 w-full items-center justify-between rounded-lg border p-4 text-left transition-colors ${
                active === index ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "hairline bg-[#0e1820] hover:border-[var(--line-bright)]"
              }`}
              aria-expanded={active === index}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span className="font-mono text-[0.6rem] text-[var(--accent)]">0{index + 1}</span>
              <span className="mx-3 min-w-0 break-words text-sm font-medium leading-5 text-white">{step.label}</span>
              <ChevronDown className="shrink-0" size={16} />
            </button>
            {active === index && <p className="min-h-36 rounded-b-lg border-x border-b border-[rgba(121,215,243,.25)] bg-[#0a141b] p-4 text-sm leading-6 text-[var(--muted)]">{step.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
