import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { business, services, serviceAreas } from "@/data/siteData";

// Cache Components forbids reading the clock during prerender; caching the
// year keeps the footer static and it refreshes when the cache revalidates.
async function CopyrightYear() {
	"use cache";
	return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "var(--color-footer-bg)",
				color: "var(--color-footer-text)",
			}}
		>
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div>
						<h3 className="text-xl font-bold text-white mb-4">
							<a
								href={business.gmbLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								{business.name}
							</a>
						</h3>
						<p className="text-sm text-gray-400 leading-relaxed mb-6">
							Expert{" "}
							<a
								href={business.gmbLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors underline decoration-gray-600"
							>
								car lockouts
							</a>
							, house lockouts, rekeying and lock changes in{" "}
							<a
								href={business.gmbLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors underline decoration-gray-600"
							>
								Twin Falls, ID
							</a>{" "}
							and surrounding Magic Valley communities.
						</p>
						{/* Socials (rendered once the client supplies profile URLs) */}
						{business.socials.length > 0 && (
							<div className="flex gap-4">
								{business.socials.map((social) => (
									<a
										key={social.url}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm text-gray-400 hover:bg-primary hover:text-white transition-all"
									>
										{social.label}
									</a>
								))}
							</div>
						)}
					</div>

					{/* Services */}
					<div>
						<h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
							Services
						</h4>
						<ul className="space-y-2">
							{services.map((s) => (
								<li key={s.slug}>
									<Link
										href={s.slug}
										className="text-sm text-gray-400 hover:text-white transition-colors"
									>
										{s.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Areas */}
					<div>
						<h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
							Service Areas
						</h4>
						<ul className="space-y-2">
							{serviceAreas.map((a) => (
								<li key={a.slug}>
									<Link
										href={a.slug}
										className="text-sm text-gray-400 hover:text-white transition-colors"
									>
										{a.city}, {a.state}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
							Contact Us
						</h4>
						<ul className="space-y-3 text-sm text-gray-400">
							<li>
								<a
									href={`tel:${business.phoneRaw}`}
									className="flex items-center gap-2 hover:text-white transition-colors"
								>
									<Phone size={16} /> {business.phone}
								</a>
							</li>
							<li>
								<a
									href={`mailto:${business.email}`}
									className="flex items-center gap-2 hover:text-white transition-colors"
								>
									<Mail size={16} /> {business.email}
								</a>
							</li>
							<li className="flex items-center gap-2">
								<MapPin size={16} className="shrink-0" /> {business.address}
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
					<div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
						<p>
							&copy; <CopyrightYear /> {business.name}. All rights
							reserved.
						</p>
					</div>
					<div className="flex gap-4 items-center">
						<p className="text-white font-bold">
							Designed by{" "}
							<a
								href="https://upscalers.us"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-300 transition-colors underline decoration-white/50"
							>
								Upscalers
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
