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
// Stock covers for services without client photos (see SERVICE_PHOTOS below).
const SERVICE_IMAGES: Record<string, string> = {
	"lock-change-service": "/images/services/lock-change.jpg",
	"commercial-locksmith": "/images/services/commercial.jpg",
	"emergency-locksmith": "/images/services/emergency.jpg",
};

/** The client's own job photos in public/img, keyed by service slug. The first
 * photo becomes the service's cover image, replacing the stock one above.
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
};

// File names contain spaces, so the URLs are encoded once here for every consumer
// (next/image src and CSS url()).
const photoUrl = (file: string) => encodeURI(`/img/${file}`);

/** The client's non-service photos in public/img, used on the home and About pages. */
export const sitePhotos = {
	/** Owner beside the branded company truck (480×640). */
	ownerWithTruck: photoUrl("IMG_5870.jpeg"),
	/** Owner and truck outside a house; portrait once EXIF rotation is applied. */
	ownerOnSite: photoUrl("IMG_6765.jpeg"),
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
		image: photos[0] ?? SERVICE_IMAGES[s.slug],
		photos,
		shortDesc: s.summary,
		features: s.included,
	};
});

/* ─── Service Areas (Separate Pages) ─── */
// Stock header photos, rotated so neighbouring area pages look different.
const AREA_IMAGES = [
	"/images/hero.jpg",
	"/images/houses-1.jpg",
	"/images/houses-2.jpg",
	"/images/house2.jpg",
	"/images/door.jpg",
	"/images/services/residential.jpg",
	"/images/services/rekey.jpg",
	"/images/services/house-lockout.jpg",
	"/images/services/car-lockout.jpg",
];

/** Client job photos for the area pages' "Recent Work" strip. These are the
 * WhatsApp copies of the IMG_ photos on the service pages. */
const RECENT_WORK_PHOTOS = [
	"WhatsApp Image 2026-11-10 at 7.25.19 PM (1).jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.20 PM.jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.19 PM.jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.21 PM.jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.20 PM (1).jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.23 PM.jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.22 PM.jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.22 PM (1).jpeg",
	"WhatsApp Image 2026-11-10 at 7.25.22 PM (2).jpeg",
].map((file) => photoUrl(`more images/${file}`));

const RECENT_WORK_PER_AREA = 3;

export const serviceAreas = serviceAreaPages.map((a, index) => ({
	...a,
	city: a.town,
	slug: `/${a.slug}`,
	state: "ID",
	image: AREA_IMAGES[index % AREA_IMAGES.length],
	// Consecutive, non-overlapping slices, so each page shows 3 different photos.
	recentWork: Array.from(
		{ length: RECENT_WORK_PER_AREA },
		(_, k) =>
			RECENT_WORK_PHOTOS[(index * RECENT_WORK_PER_AREA + k) % RECENT_WORK_PHOTOS.length],
	),
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
