import { pageMetadata } from "@/lib/seo";
import ServicesSection from "@/components/ServicesSection";
import PageHeader from "@/components/PageHeader";
import { sitePhotos } from "@/data/siteData";

export const metadata = pageMetadata({
	title: "Locksmith Services in Twin Falls, ID | A & B Locksmiths LLC",
	description:
		"Explore our locksmith services: car lockouts, house lockouts, lock changes, rekeying, residential, commercial and emergency locksmith service in Twin Falls, ID.",
	path: "/services",
});

export default function ServicesPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Locksmith Services in Twin Falls, ID"
				subtitle="Lockouts, rekeying and lock changes for every home, vehicle and business."
				bgImage={sitePhotos.servicesHeader}
			/>

			<section
				className="py-20 px-6"
				style={{ backgroundColor: "var(--color-gray-50)" }}
			>
				<ServicesSection />
			</section>
		</main>
	);
}
