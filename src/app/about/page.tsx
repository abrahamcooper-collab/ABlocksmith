import { pageMetadata } from "@/lib/seo";
import { business, sitePhotos } from "@/data/siteData";
import {
	Hammer,
	Handshake,
	Clock,
	ShieldCheck,
	KeyRound,
	Home,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata = pageMetadata({
	title: "About Us | A & B Locksmiths LLC | Twin Falls, ID",
	description:
		"Learn about A & B Locksmiths LLC, your local, mostly residential locksmith in Twin Falls, ID for lockouts, rekeying and lock changes.",
	path: "/about",
});

export default function AboutPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="About Us"
				subtitle="Get to know the team behind A & B Locksmiths LLC"
				breadcrumb="About"
				bgImage="/images/houses-2.jpg"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
							<Image
								src={sitePhotos.ownerWithTruck}
								alt={`${business.name} owner with the company truck`}
								fill
								sizes="(min-width: 1024px) 480px, 100vw"
								className="object-cover object-[center_35%]"
							/>
						</div>

						{/* Story */}
						<div>
							<span
								className="text-sm font-bold tracking-widest uppercase mb-3 block"
								style={{ color: "var(--color-primary)" }}
							>
								Our Story
							</span>
							<h2
								className="text-3xl font-bold mb-6"
								style={{ color: "var(--color-secondary)" }}
							>
								Your Neighborhood Locksmith
							</h2>
							<div
								className="w-16 h-1 rounded-full mb-6"
								style={{ backgroundColor: "var(--color-accent)" }}
							/>
							<p className="text-gray-600 leading-relaxed mb-4">
								A &amp; B Locksmiths LLC was founded with a simple mission:
								deliver honest, careful locksmith service to drivers and
								homeowners in Twin Falls and the surrounding communities.
							</p>
							<p className="text-gray-600 leading-relaxed mb-4">
								Most of our work is residential: house lockouts, rekeying after
								a move and complete lock changes. We also handle car lockouts
								for cars, trucks and SUVs, plus commercial lock and key work for
								local businesses.
							</p>
							<p className="text-gray-600 leading-relaxed">
								We believe your home deserves the best: solid hardware, careful
								work and a locksmith who treats your property like their own.
							</p>
						</div>
					</div>

					{/* Values */}
					<div className="mt-20">
						<h2
							className="text-3xl font-bold text-center mb-12"
							style={{ color: "var(--color-secondary)" }}
						>
							Our Values
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									Icon: Hammer,
									title: "Careful Workmanship",
									desc: "We never cut corners. Every lock is installed and adjusted so the door latches and locks properly.",
								},
								{
									Icon: Handshake,
									title: "Honesty & Integrity",
									desc: "Honest advice, clear explanations, and doing what we say we'll do, every time.",
								},
								{
									Icon: Clock,
									title: "Reliability",
									desc: "We keep you updated and tell you honestly how soon we can be there.",
								},
								{
									Icon: ShieldCheck,
									title: "Damage-Free Entry",
									desc: "Proper locksmith tools for every lockout, so no broken windows or forced doors.",
								},
								{
									Icon: KeyRound,
									title: "Rekey or Replace",
									desc: "We recommend a rekey when a rekey will do, not new locks you don't need.",
								},
								{
									Icon: Home,
									title: "Community Focused",
									desc: "Proudly serving Twin Falls and the surrounding Magic Valley communities.",
								},
							].map((v) => (
								<div
									key={v.title}
									className="bg-gray-50 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
									style={{ boxShadow: "var(--shadow-sm)" }}
								>
									<div
										className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-white/60 shadow-sm"
										style={{ color: "var(--color-primary)" }}
									>
										<v.Icon size={32} strokeWidth={1.5} />
									</div>
									<h3
										className="font-bold text-lg mb-2"
										style={{ color: "var(--color-secondary)" }}
									>
										{v.title}
									</h3>
									<p className="text-sm text-gray-500 leading-relaxed">
										{v.desc}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* BBB accreditation */}
					<div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<span
								className="text-sm font-bold tracking-widest uppercase mb-3 block"
								style={{ color: "var(--color-primary)" }}
							>
								Accredited Business
							</span>
							<h2
								className="text-3xl font-bold mb-6"
								style={{ color: "var(--color-secondary)" }}
							>
								BBB Accredited Locksmith
							</h2>
							<div
								className="w-16 h-1 rounded-full mb-6"
								style={{ backgroundColor: "var(--color-accent)" }}
							/>
							<p className="text-gray-600 leading-relaxed">
								{business.name} is a Better Business Bureau Accredited
								Business. We&apos;ve committed to the BBB Standards for Trust:
								advertising honestly, being transparent, keeping our promises
								and responding to every customer.
							</p>
						</div>
						<div
							className="relative rounded-2xl overflow-hidden aspect-[1217/939] bg-white"
							style={{ boxShadow: "var(--shadow-lg)" }}
						>
							<Image
								src={sitePhotos.bbbCertificate}
								alt={`BBB Certificate of Accreditation for ${business.name}`}
								fill
								sizes="(min-width: 1024px) 480px, 100vw"
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
