/* ──────────────────────────────────────────────
   A & B Locksmiths LLC – Centralized Site Data

   Same shape as the template's siteData, so the template components read it
   unchanged. Values come from config/business.ts and content/*, the single
   sources of truth for NAP and page copy.
   ────────────────────────────────────────────── */

import { business as config } from "@/config/business";
import { otherServiceAreas, serviceAreaPages, services as serviceContent } from "@/content";

export const business = {
	name: config.name,
	phone: config.phone,
	phoneRaw: config.phoneE164,
	email: config.email,
	address: config.addressLine,
	addressObj: config.address,
	gmbLink: config.gbpUrl,
	socials: config.socials,
};

/* ─── Services (Separate Pages) ─── */
const SERVICE_IMAGES: Record<string, string> = {
	"car-lockout-service": "/images/services/car-lockout.jpg",
	"house-lockout-service": "/images/services/house-lockout.jpg",
	"lock-change-service": "/images/services/lock-change.jpg",
	"rekey-locks": "/images/services/rekey.jpg",
	"residential-locksmith": "/images/services/residential.jpg",
	"commercial-locksmith": "/images/services/commercial.jpg",
	"emergency-locksmith": "/images/services/emergency.jpg",
};

export const services = serviceContent.map((s) => ({
	...s,
	title: s.name,
	slug: `/${s.slug}`,
	image: SERVICE_IMAGES[s.slug],
	shortDesc: s.summary,
	features: s.included,
}));

/* ─── Service Areas (Separate Pages) ─── */
const AREA_IMAGES = [
	"/images/hero.jpg",
	"/images/houses-1.jpg",
	"/images/houses-2.jpg",
	"/images/house2.jpg",
	"/images/door.jpg",
];

export const serviceAreas = serviceAreaPages.map((a, index) => ({
	...a,
	city: a.town,
	slug: `/${a.slug}`,
	state: "ID",
	image: AREA_IMAGES[index % AREA_IMAGES.length],
}));

// Strictly for SEO keyword placement on the site without separate pages
export const seoAreas = otherServiceAreas;

/* ─── Navigation ─── */
export const navLinks = [
	{ label: "HOME", href: "/" },
	{
		label: "SERVICES",
		href: "/services",
		dropdown: services.map((s) => ({ label: s.title, href: s.slug })),
	},
	{
		label: "SERVICE AREAS",
		href: "/service-areas",
		dropdown: serviceAreas.map((a) => ({
			label: a.city,
			href: a.slug,
		})),
	},
	{ label: "ABOUT", href: "/about" },
	{ label: "CONTACT US", href: "/contact" },
];
