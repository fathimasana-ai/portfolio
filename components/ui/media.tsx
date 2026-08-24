"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

export function MediaFrame({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border hairline bg-[var(--surface)]">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-[var(--muted)]">
            <ImageOff size={23} strokeWidth={1.3} />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em]">Screenshot coming soon</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {caption && <figcaption className="mt-3 text-xs text-[var(--muted)]">{caption}</figcaption>}
    </figure>
  );
}
