import type { MetadataRoute } from "next";
import { links } from "@/content/content";

const fallbackUrl = "https://fathimasana.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: links.portfolio || fallbackUrl, lastModified: new Date() }];
}
