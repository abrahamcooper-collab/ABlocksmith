import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { serviceAreas, services, seoAreas } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";

export const metadata = pageMetadata({
	title: "Service Areas | Locksmith Near Twin Falls, ID | A & B Locksmiths LLC",
	description:
		"A & B Locksmiths LLC proudly serves Twin Falls, Kimberly, Jerome, Filer, Hansen, Murtaugh, Eden and surrounding Idaho communities.",
	path: "/service-areas",
});

export default function ServiceAreasPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Locksmith Service Areas Near Twin Falls, ID"
				subtitle="Proudly serving communities across Twin Falls and Jerome Counties"
				bgImage="/images/house2.jpg"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{serviceAreas.map((area) => (
							<Link
								key={area.slug}
								href={area.slug}
								className="group bg-gray-50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white"
								style={{ boxShadow: "var(--shadow-sm)" }}
							>
								<div
									className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl transition-transform duration-300 group-hover:scale-110"
									style={{
										backgroundColor: "var(--color-primary-50)",
										color: "var(--color-primary)",
									}}
								>
									<MapPin size={24} />
								</div>
								<h3
									className="text-lg font-bold mb-1 group-hover:text-primary transition-colors"
									style={{ color: "var(--color-secondary)" }}
								>
									Locksmith in {area.city}, {area.state}
								</h3>
								<p className="text-sm text-gray-500 leading-relaxed mb-3">
									{area.tagline}
								</p>
								<span
									className="text-sm font-semibold"
									style={{ color: "var(--color-primary)" }}
								>
									View Details →
								</span>
							</Link>
						))}
					</div>

					{/* Other communities served (SEO) */}
					<div className="mb-20 text-center">
						<h2 className="text-xl font-bold mb-6 text-gray-400 uppercase tracking-widest text-sm">
							Also Serving
						</h2>
						<div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
							{seoAreas.map((city) => (
								<span
									key={city}
									className="px-4 py-1.5 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium"
								>
									{city}, ID
								</span>
							))}
						</div>
					</div>

					{/* Services available in all areas */}
					<div className="text-center">
						<h2
							className="text-2xl font-bold mb-6"
							style={{ color: "var(--color-secondary)" }}
						>
							Services Available in All Areas
						</h2>
						<div className="flex flex-wrap justify-center gap-3">
							{services.map((s) => (
								<Link
									key={s.slug}
									href={s.slug}
									className="px-5 py-2 rounded-full text-sm font-medium border transition-colors hover:bg-primary hover:text-white hover:border-primary"
									style={{
										borderColor: "var(--color-gray-300)",
										color: "var(--color-secondary)",
									}}
								>
									{s.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
