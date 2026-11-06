/**
 * Serves every service page ("/car-lockout-service") and service-area page
 * ("/locksmith-kimberly-id") from one route, since both live at the root.
 * All pages are generated at build time; unknown slugs call notFound().
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPage from "@/components/AreaPage";
import JsonLd from "@/components/JsonLd";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { allSlugs, findPageBySlug, gbpServiceAreas } from "@/content";
import { serviceAreas } from "@/data/siteData";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

// Every valid slug is prerendered by generateStaticParams, so only unknown
// slugs (which 404) ever read params at request time; blocking is fine there.
export const instant = false;

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const page = findPageBySlug(slug);
  if (!page) return {};
  const content = page.kind === "service" ? page.service : page.area;
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/${slug}`,
  });
}

export default async function SlugPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const page = findPageBySlug(slug);
  if (!page) notFound();
  const path = `/${slug}`;

  if (page.kind === "service") {
    const { service } = page;
    return (
      <>
        <JsonLd
          data={serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path,
            areaServed: gbpServiceAreas,
          })}
        />
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ])}
        />
        <ServicePageTemplate slug={path} />
      </>
    );
  }

  const area = serviceAreas.find((a) => a.slug === path);
  if (!area) notFound();
  const place = `${area.city}, ${area.state}`;
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Locksmith Services in ${place}`,
          description: area.metaDescription,
          path,
          areaServed: [area.city],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: place, path },
        ])}
      />
      <AreaPage area={area} />
    </>
  );
}
