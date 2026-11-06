/**
 * Service pages and service-area pages share the root URL namespace
 * ("/car-lockout-service", "/locksmith-kimberly-id"), so a single dynamic
 * route serves both. This registry resolves a slug to the right content.
 */
import { serviceAreaPages } from "./areas";
import { services } from "./services";
import type { Service, ServiceArea } from "./types";

export type SlugPage =
  | { readonly kind: "service"; readonly service: Service }
  | { readonly kind: "area"; readonly area: ServiceArea };

const pagesBySlug: ReadonlyMap<string, SlugPage> = new Map<string, SlugPage>([
  ...services.map((service) => [service.slug, { kind: "service", service }] as const),
  ...serviceAreaPages.map((area) => [area.slug, { kind: "area", area }] as const),
]);

// Crash at build time if two pages ever claim the same URL.
if (pagesBySlug.size !== services.length + serviceAreaPages.length) {
  throw new Error("Duplicate slug across services and service areas");
}

export function findPageBySlug(slug: string): SlugPage | undefined {
  return pagesBySlug.get(slug);
}

export function allSlugs(): string[] {
  return [...pagesBySlug.keys()];
}

export { serviceAreaPages, gbpServiceAreas, otherServiceAreas } from "./areas";
export { services } from "./services";
export type { Service, ServiceArea } from "./types";
