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
/** The client's own job photos in public/img, keyed by service slug. The first
 * photo becomes the service's cover image. A service with no photos shows the
 * template's gradient + icon placeholder instead (no stock photos on service cards).
 * Most "WhatsApp Image …" files are lower-quality copies of the IMG_ photos, so
 * only the IMG_ originals are listed, plus the one WhatsApp photo with no original. */
const SERVICE_PHOTOS: Record<string, readonly string[]> = {
	"car-lockout-service": [
		"IMG_5863.jpeg",
		"IMG_5866.jpeg",
		"IMG_5867.jpeg",
		"IMG_5868.jpeg",
		"IMG_5869.jpeg",
		"WhatsApp Image 2026-11-10 at 7.31.50 PM.jpeg",
	],
	"house-lockout-service": ["IMG_5864.jpeg"],
	"rekey-locks": ["IMG_5862.jpeg"],
	"residential-locksmith": ["IMG_5865.jpeg"],
	"emergency-locksmith": ["IMG_5867.jpeg"],
};

// File names contain spaces, so the URLs are encoded once here for every consumer
// (next/image src and CSS url()).
const photoUrl = (file: string) => encodeURI(`/img/${file}`);

/** The client's own photos used outside the service pages. The home page shows
 * only client photos, so its sections read their images from here. */
export const sitePhotos = {
	/** Owner beside the branded company truck (480×640). */
	ownerWithTruck: photoUrl("IMG_5870.jpeg"),
	/** Owner and truck outside a house (5712×4284, portrait once EXIF rotation is
	 * applied). The only high-resolution photo, so it's the home page hero. */
	ownerOnSite: photoUrl("IMG_6765.jpeg"),
	/** Why Choose Us center image (768×1024 portrait). */
	whyChooseUs: photoUrl("IMG_5866.jpeg"),
	/** Service Areas section background, under a dark overlay. */
	serviceAreasBackdrop: photoUrl("IMG_5869.jpeg"),
	/** Closing call-to-action background, under a dark overlay. */
	finalCtaBackdrop: photoUrl("WhatsApp Image 2026-11-10 at 7.31.50 PM.jpeg"),
	/** Page header photos. The site uses no stock photos, only the client's own. */
	aboutHeader: photoUrl("IMG_5865.jpeg"),
	contactHeader: photoUrl("IMG_5870.jpeg"),
	/** IMG_5868 is the only job photo not already on the services page's cards. */
	servicesHeader: photoUrl("IMG_5868.jpeg"),
	serviceAreasHeader: photoUrl("IMG_6765.jpeg"),
	/** Header for service pages that have no photos of their own (mobile key-cutting bench). */
	serviceFallbackHeader: photoUrl("IMG_5862.jpeg"),
	/** "We proudly support our United States veterans!" graphic (590×359, white background). */
	veteransSupport: photoUrl("veteran.jpeg"),
	/** BBB Certificate of Accreditation, accredited since 11/06/2026. */
	bbbCertificate: photoUrl(
		"21D5C52B-8E4B-4316-A983-9CFF3324ECA0remotee8ecdfd69bb7548848a5ed20c359cfc7899dc8c8-1-original.jpeg",
	),
} as const;

export const services = serviceContent.map((s) => {
	const photos = (SERVICE_PHOTOS[s.slug] ?? []).map(photoUrl);
	return {
		...s,
		title: s.name,
		slug: `/${s.slug}`,
		image: photos[0] as string | undefined,
		photos,
		shortDesc: s.summary,
		features: s.included,
	};
});

/* ─── Service Areas (Separate Pages) ─── */
/** Client job photos for the area pages, in "Recent Work" order. Each original
 * has a WhatsApp copy in public/img/more images; the strip shows the copies so
 * those files are used too. */
const AREA_JOB_PHOTOS: readonly { original: string; copy: string }[] = [
	{ original: "IMG_5863.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.19 PM (1).jpeg" },
	{ original: "IMG_5864.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.20 PM.jpeg" },
	{ original: "IMG_5862.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.19 PM.jpeg" },
	{ original: "IMG_5866.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.21 PM.jpeg" },
	{ original: "IMG_5865.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.20 PM (1).jpeg" },
	{ original: "IMG_5870.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.23 PM.jpeg" },
	{ original: "IMG_5867.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.22 PM.jpeg" },
	{ original: "IMG_5868.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.22 PM (1).jpeg" },
	{ original: "IMG_5869.jpeg", copy: "WhatsApp Image 2026-11-10 at 7.25.22 PM (2).jpeg" },
];

/** Header photo rotation for the area pages (client photos only). */
const AREA_HEADER_ROTATION = [
	"IMG_6765.jpeg",
	"WhatsApp Image 2026-11-10 at 7.31.50 PM.jpeg",
	...AREA_JOB_PHOTOS.map((p) => p.original),
];

const RECENT_WORK_PER_AREA = 3;

function areaPhotos(index: number) {
	// Consecutive, non-overlapping slices, so each page shows 3 different photos.
	const strip = Array.from(
		{ length: RECENT_WORK_PER_AREA },
		(_, k) => AREA_JOB_PHOTOS[(index * RECENT_WORK_PER_AREA + k) % AREA_JOB_PHOTOS.length],
	);
	// The header must not repeat a photo that's in this page's strip.
	const inStrip = new Set(strip.map((p) => p.original));
	const header = Array.from(
		{ length: AREA_HEADER_ROTATION.length },
		(_, k) => AREA_HEADER_ROTATION[(index + k) % AREA_HEADER_ROTATION.length],
	).find((file) => !inStrip.has(file));
	if (!header) throw new Error("Area header rotation has no photo outside the strip");
	return {
		image: photoUrl(header),
		recentWork: strip.map((p) => photoUrl(`more images/${p.copy}`)),
	};
}

export const serviceAreas = serviceAreaPages.map((a, index) => ({
	...a,
	city: a.town,
	slug: `/${a.slug}`,
	state: "ID",
	...areaPhotos(index),
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
