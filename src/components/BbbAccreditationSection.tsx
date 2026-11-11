import Image from "next/image";
import { business, sitePhotos } from "@/data/siteData";

/** BBB accreditation block with the certificate image. Shown on the home and About pages. */
export default function BbbAccreditationSection() {
	return (
		<section className="py-20 px-6 bg-gray-50">
			<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
						{business.name} is a Better Business Bureau Accredited Business.
						We&apos;ve committed to the BBB Standards for Trust: advertising
						honestly, being transparent, keeping our promises and responding to
						every customer.
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
		</section>
	);
}
