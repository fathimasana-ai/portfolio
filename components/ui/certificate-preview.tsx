"use client";

import Image from "next/image";
import { FileText, ImageOff } from "lucide-react";
import { useState } from "react";

export function CertificatePreview({ file }: { file: string }) {
  const isPdf = /\.pdf($|\?)/i.test(file);
  const [failed, setFailed] = useState(false);

  if (isPdf) {
    return (
      <a href={file} target="_blank" rel="noopener noreferrer" className="flex aspect-[1.55/1] flex-col items-center justify-center gap-3 rounded-lg border hairline bg-[#090b10] text-[var(--accent)] focus-ring">
        <FileText size={32} strokeWidth={1.2} />
        <span className="font-mono text-[0.62rem] uppercase tracking-[.12em]">Open certificate PDF</span>
      </a>
    );
  }

  return (
    <div className="relative aspect-[1.55/1] overflow-hidden rounded-lg border hairline bg-[#090b10]">
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[var(--muted)]">
          <ImageOff size={24} strokeWidth={1.2} />
          <span className="font-mono text-[0.62rem] uppercase tracking-[.12em]">Preview coming soon</span>
        </div>
      ) : (
        <Image src={file} alt="Certificate document preview" fill sizes="(max-width: 768px) 100vw, 33vw" className="p-2 object-contain" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
