import type { MetadataRoute } from "next";
import { links } from "@/content/content";

const fallbackUrl = "https://fathimasana.vercel.app";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = links.portfolio || fallbackUrl;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
