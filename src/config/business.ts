/**
 * Single source of truth for the business's identity (NAP), links and the
 * site URL. Every page, the footer and the JSON-LD schema read from here, so
 * the name, address and phone can never drift apart between pages.
 *
 * NAP values must match the Google Business Profile character for character.
 */

const NAME = "A & B Locksmiths LLC";
const STREET = "3064 E 3200 N";
const CITY = "Twin Falls";
const STATE = "ID";
const ZIP = "83301";

export const business = {
  name: NAME,
  /** Short brand name for tight spaces (logo lockup, headings). */
  shortName: "A & B Locksmiths",
  phone: "(208) 539-1810",
  /** E.164 form, used for tel: links and schema. */
  phoneE164: "+12085391810",
  email: "ab.locksidaho@gmail.com",
  address: {
    street: STREET,
    city: CITY,
    state: STATE,
    stateName: "Idaho",
    zip: ZIP,
    country: "US",
  },
  /** The address on one line, exactly as on the Google Business Profile. */
  addressLine: `${STREET}, ${CITY}, ${STATE} ${ZIP}, US`,
  /**
   * Link used for every "Google Business Profile" keyword link and the
   * "read our reviews" button. We don't have the real profile URL yet, so
   * this is a Google Maps search for the exact name + address, which resolves
   * to the listing. Replace it with the real profile URL when available.
   */
  gbpUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${NAME} ${STREET}, ${CITY}, ${STATE} ${ZIP}`,
  )}`,
  /**
   * Social profile URLs (Facebook, Instagram, ...). Empty until the client
   * supplies them; the social links and schema `sameAs` render nothing while
   * this is empty.
   */
  socials: [] as readonly { label: string; url: string }[],
} as const;

/**
 * Canonical origin of the site, used for canonical URLs, Open Graph, the
 * sitemap and schema `@id`s. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. https://www.example.com, no trailing slash).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/** Absolute URL for a site path such as "/contact". */
export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

/** Google Maps embed URL for any place query; needs no API key. */
export function mapEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
