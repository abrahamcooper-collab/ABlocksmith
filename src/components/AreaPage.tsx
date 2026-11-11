import { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceAreas, services, business } from "@/data/siteData";
import CTASection from "./CTASection";
import FullWidthMap from "./FullWidthMap";
import LinkedText from "./LinkedText";
import PageHeader from "./PageHeader";

/** Service-area page, from the template's /service-areas/[city] page. */
export default function AreaPage({ area }: { area: (typeof serviceAreas)[number] }) {
	return (
		<main className="flex-1 w-full bg-white">
			<PageHeader
				breadcrumb={area.city}
				title={area.h1}
				subtitle={area.tagline}
				bgImage={area.image}
			/>

			<section className="py-20 px-6 max-w-5xl mx-auto text-center">
				<h2
					className="text-3xl sm:text-4xl font-bold mb-6"
					style={{ color: "var(--color-secondary)" }}
				>
					Your Local Locksmith in {area.city}, {area.state}
				</h2>
				<div className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto space-y-4">
					{area.intro.map((p) => (
						<p key={p}>
							<LinkedText text={p} />
						</p>
					))}
				</div>
				<h2
					className="text-2xl sm:text-3xl font-bold mb-6"
					style={{ color: "var(--color-secondary)" }}
				>
					{area.local.heading}
				</h2>
				<div className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
					{area.local.paragraphs.map((p) => (
						<p key={p}>
							<LinkedText text={p} />
						</p>
					))}
					<p>
						At <strong>{business.name}</strong>, we&apos;re proud to serve the{" "}
						{area.city} community and the rest of {area.county}. Browse our
						full range of local locksmith services below.
					</p>
				</div>
			</section>

			{/* Services Available in this Area */}
			<section className="py-20 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2
							className="text-3xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							Services We Offer in {area.city}
						</h2>
						<div className="w-16 h-1 mx-auto rounded-full bg-primary" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service) => {
							const Icon = service.icon as ElementType;
							return (
								<div
									key={service.slug}
									className="bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300"
									style={{ boxShadow: "var(--shadow-md)" }}
								>
									<div
										className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
										style={{
											backgroundColor: "var(--color-primary-50)",
											color: "var(--color-primary)",
										}}
									>
										<Icon size={28} strokeWidth={1.5} />
									</div>
									<h3
										className="text-xl font-bold mb-3"
										style={{ color: "var(--color-secondary)" }}
									>
										{service.title} in {area.city}
									</h3>
									<p className="text-sm text-gray-600 leading-relaxed mb-6">
										{service.shortDesc}
									</p>
									<Link
										href={service.slug}
										className="text-primary text-sm font-semibold hover:underline"
									>
										Learn More →
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-5xl mx-auto">
					<h2
						className="text-3xl font-bold mb-4 text-center"
						style={{ color: "var(--color-secondary)" }}
					>
						Recent Locksmith Work
					</h2>
					<p className="text-gray-600 text-center mb-10">
						A few recent jobs by {business.name} around the Magic Valley.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{area.recentWork.map((photo, i) => (
							<div
								key={photo}
								className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100"
								style={{ boxShadow: "var(--shadow-md)" }}
							>
								<Image
									src={photo}
									alt={`Recent locksmith job by ${business.name}, photo ${i + 1}`}
									fill
									sizes="(min-width: 640px) 33vw, 100vw"
									className="object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<FullWidthMap
				query={`${area.city}, ${area.state}`}
				title={`Map of ${area.city}, ${area.state}`}
			/>

			<CTASection />
		</main>
	);
}
