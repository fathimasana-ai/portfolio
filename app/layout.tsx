import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { links, profile } from "@/content/content";
import { publicAssetExists } from "@/lib/assets";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

const fallbackUrl = "https://fathimasana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(links.portfolio || fallbackUrl),
  title: profile.seoTitle,
  description: profile.seoDescription,
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    type: "website",
    url: links.portfolio || fallbackUrl,
    images: publicAssetExists(profile.ogImage) ? [{ url: profile.ogImage, alt: profile.name }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
    images: publicAssetExists(profile.ogImage) ? [profile.ogImage] : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
