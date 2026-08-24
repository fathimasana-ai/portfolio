"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const items = [
  ["Journey", "journey"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Contact", "contact"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[#07080b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <a href="#top" className="font-mono text-xs uppercase tracking-[0.18em] text-white focus-ring">FS<span className="text-[var(--accent)]">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {items.map(([label, href]) => <a key={href} href={`#${href}`} className="text-xs text-[var(--muted)] transition-colors hover:text-white focus-ring">{label}</a>)}
        </div>
        <button className="focus-ring flex min-h-11 min-w-11 items-center justify-center rounded-full text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t hairline bg-[#07080b] px-5 py-4 md:hidden">
          {items.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={`#${href}`} className="block border-b hairline py-4 text-sm text-[var(--muted)] last:border-0">{label}</a>)}
        </div>
      )}
    </header>
  );
}
