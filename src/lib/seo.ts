/**
 * Page metadata and schema.org JSON-LD builders. Pages describe *what* they
 * are; this module owns *how* that becomes <head> tags and structured data.
 */
import type { Metadata } from "next";
import { absoluteUrl, business, siteUrl } from "@/config/business";
import { gbpServiceAreas, services } from "@/content";

const BUSINESS_ID = `${siteUrl}/#business`;

interface PageMetaInput {
  readonly title: string;
  readonly description: string;
  /** Site path beginning with "/". */
  readonly path: string;
}

/** Title, description, canonical and Open Graph tags for one page. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    // `absolute` stops the layout's title template appending the brand twice.
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [{ url: "/logo.jpeg", width: 1024, height: 1024, alt: business.name }],
    },
  };
}

type JsonLd = Record<string, unknown>;

/** The Locksmith (LocalBusiness subtype) entity, rendered once in the root layout. */
export function businessSchema(): JsonLd {
  const sameAs = business.socials.map((s) => s.url);
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": BUSINESS_ID,
    name: business.name,
    url: siteUrl,
    logo: absoluteUrl("/logo.jpeg"),
    image: absoluteUrl("/logo.jpeg"),
    telephone: business.phoneE164,
    email: business.email,
    hasMap: business.gbpUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    areaServed: gbpServiceAreas.map((town) => ({
      "@type": "Place",
      name: `${town}, ${business.address.state}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/${s.slug}`) },
      })),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  areaServed: readonly string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: input.areaServed.map((town) => ({
      "@type": "Place",
      name: `${town}, ${business.address.state}`,
    })),
  };
}

export interface Crumb {
  readonly name: string;
  readonly path: string;
}

export function breadcrumbSchema(crumbs: readonly Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
