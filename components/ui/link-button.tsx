import { ArrowUpRight, Download, Github, Linkedin, Mail, Play } from "lucide-react";

const icons = { ArrowUpRight, Github, Linkedin, Play, Download, Mail };

export function LinkButton({
  href,
  children,
  icon,
  variant = "outline",
  download,
}: {
  href: string;
  children: React.ReactNode;
  icon?: keyof typeof icons;
  variant?: "solid" | "outline" | "text";
  download?: boolean;
}) {
  if (!href) return null;
  const Icon = icon ? icons[icon] : null;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors ${
        variant === "solid"
          ? "bg-[var(--accent)] text-[#061016] hover:bg-white"
          : variant === "text"
            ? "px-0 text-[var(--accent)] hover:text-white"
            : "border hairline text-white hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
      }`}
    >
      {children}
      {Icon && <Icon size={15} strokeWidth={1.8} />}
    </a>
  );
}
