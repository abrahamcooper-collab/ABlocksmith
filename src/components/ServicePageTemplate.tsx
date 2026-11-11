"use client";

import Image from "next/image";
import Link from "next/link";
import { services, business, sitePhotos } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import PageHeader from "./PageHeader";
// Import all common homepage bottom components
import ServiceAreasPreview from "./ServiceAreasPreview";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ReviewsSection from "./ReviewsSection";
import LinkedText from "./LinkedText";
import FullWidthMap from "./FullWidthMap";
import FinalCTASection from "./FinalCTASection";

type ServicePageProps = {
	/** Page slug, e.g. "/car-lockout-service". A slug rather than the service
	 * object because this is a client component and the icon can't be serialized. */
	slug: string;
};

// We don't use generateServicePageMetadata in a client component,
// the metadata is still generated in the page.tsx routes server-side
// because this component is only for the UI

export default function ServicePageTemplate({ slug }: ServicePageProps) {
	const { ref: detailsRef, revealed: detailsRevealed } = useScrollReveal(0.1);
	const { ref: subservicesRef, revealed: subservicesRevealed } =
		useScrollReveal(0.1);
	const service = services.find((s) => s.slug === slug);
	if (!service) throw new Error(`Unknown service slug: ${slug}`);
	const ServiceIcon = service.icon;

	return (
		<main className="flex-1 w-full bg-white">
			{/* 1. Hero Section with Background image & CTA */}
			<PageHeader
				title={service.h1}
				subtitle={service.tagline}
				bgImage={service.image ?? sitePhotos.serviceFallbackHeader}
			/>

			{/* 2. Details Component (Image Left, Text Right) */}
			<section ref={detailsRef} className="py-20 sm:py-28 px-6 bg-white overflow-x-clip">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Image Block */}
						<div
							className={`relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-gray-200 transition-all duration-700 ${
								detailsRevealed
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-10"
							}`}
							style={{ boxShadow: "var(--shadow-lg)" }}
						>
							<div
								className="absolute inset-0 flex items-center justify-center transition-transform duration-500 hover:scale-105"
								style={{
									background: `${service.image ? `url('${service.image}') center/cover no-repeat, ` : ""}linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-200) 100%)`,
									backgroundBlendMode: "overlay",
								}}
							>
								<div className="text-center p-6 text-white drop-shadow-md bg-black/30 rounded-lg backdrop-blur-sm">
									<ServiceIcon size={48} strokeWidth={1.5} className="mx-auto mb-3" aria-hidden />
									<p className="text-sm font-semibold tracking-wider uppercase">
										{service.title}
									</p>
								</div>
							</div>
						</div>

						{/* Text Block */}
						<div
							className={`transition-all duration-700 delay-200 ${
								detailsRevealed
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-10"
							}`}
						>
							<h2
								className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
								style={{ color: "var(--color-secondary)" }}
							>
								Professional {service.title} in Twin Falls
							</h2>
							<div className="text-gray-600 leading-relaxed mb-8 space-y-4">
								{service.intro.map((paragraph) => (
									<p key={paragraph}>
										<LinkedText text={paragraph} />
									</p>
								))}
							</div>

							<div className="space-y-6 mb-10">
								{service.features.slice(0, 3).map((feature, index) => (
									<div key={index} className="flex gap-4 items-start">
										<div
											className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white"
											style={{ backgroundColor: "#4FB0DF" }}
										>
											<svg
												width="12"
												height="12"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
												/>
											</svg>
										</div>
										<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
											{feature}
										</p>
									</div>
								))}
							</div>

							<Link
								href="/contact"
								className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-[0.98]"
								style={{
									backgroundColor: "var(--color-secondary)",
									boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
								}}
							>
								REQUEST A QUOTE
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Job photos. With a single photo, the details block above already shows it. */}
			{service.photos.length > 1 && (
				<section className="py-20 px-6 bg-white">
					<div className="max-w-7xl mx-auto">
						<h2
							className="text-3xl sm:text-4xl font-bold mb-12 text-center"
							style={{ color: "var(--color-secondary)" }}
						>
							Our {service.title} Work
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{service.photos.map((photo, i) => (
								<div
									key={photo}
									className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
									style={{ boxShadow: "var(--shadow-md)" }}
								>
									<Image
										src={photo}
										alt={`${service.title} by ${business.name}, photo ${i + 1}`}
										fill
										sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
										className="object-cover transition-transform duration-500 hover:scale-105"
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* 3. Subservices Grid */}
			<section ref={subservicesRef} className="py-20 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div
						className={`text-center mb-16 transition-all duration-700 ${
							subservicesRevealed
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<h2
							className="text-3xl sm:text-4xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							What&apos;s Included in Our {service.title}?
						</h2>
						<p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
							<strong style={{ color: "var(--color-primary)" }}>
								{business.name}
							</strong>{" "}
							provides complete {service.title.toLowerCase()} in Twin Falls and
							the surrounding communities. Whether it&apos;s a quick lockout or a
							full set of new locks, we&apos;re ready to help.
						</p>
					</div>

					<div
						className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
							subservicesRevealed
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						{/* We will map over the features to create subservice cards */}
						{service.features.map((feature, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
								style={{ boxShadow: "var(--shadow-md)" }}
							>
								{/* Subservice Text Content */}
								<div className="p-8 text-center">
									<h3
										className="text-xl font-bold mb-3"
										style={{ color: "var(--color-secondary)" }}
									>
										{feature}
									</h3>
									<p className="text-sm text-gray-500 leading-relaxed mb-6">
										<strong style={{ color: "var(--color-primary)" }}>
											{business.name}
										</strong>{" "}
										provides this across Twin Falls and nearby towns. Call us
										today and tell us what you need.
									</p>
									<Link
										href="/services"
										className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:gap-2"
										style={{ color: "var(--color-primary)" }}
									>
										View All Services
										<svg
											width="14"
											height="14"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											viewBox="0 0 24 24"
											className="transition-transform group-hover:translate-x-1"
										>
											<path
												d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 4. Common Bottom Components (Same as homepage, in order) */}
			<ServiceAreasPreview />


			<WhyChooseUsSection />

			<ReviewsSection />

			<FullWidthMap />

			<FinalCTASection />

			<style jsx global>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in-up {
					animation: fadeInUp 0.8s ease-out forwards;
				}
			`}</style>
		</main>
	);
}
