import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/business";
import { serviceAreaPages, services } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services", "/service-areas", "/about", "/contact"];
  const contentPaths = [...services, ...serviceAreaPages].map((p) => `/${p.slug}`);
  return [...staticPaths, ...contentPaths].map((path) => ({ url: absoluteUrl(path) }));
}
