import type { LucideIcon } from "lucide-react";

/**
 * Copy strings may wrap a keyword in double brackets, e.g.
 * "Need a [[car lockout service]]?". The bracketed text renders as a link to
 * the Google Business Profile (see components/LinkedText). Use it on the
 * page's target keywords only, not on every word.
 */
export type LinkedCopy = string;

export interface Service {
  /** URL path segment, served at "/{slug}". */
  readonly slug: string;
  /** Display name, used in nav, cards and breadcrumbs. */
  readonly name: string;
  readonly icon: LucideIcon;
  /** The search phrase this page targets. */
  readonly primaryKeyword: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly h1: string;
  /** One line under the H1. */
  readonly tagline: string;
  /** Two-sentence teaser for service cards. */
  readonly summary: string;
  readonly intro: readonly LinkedCopy[];
  /** "What's included" bullet points. */
  readonly included: readonly string[];
}

export interface ServiceArea {
  /** URL path segment, served at "/{slug}". */
  readonly slug: string;
  readonly town: string;
  readonly county: string;
  readonly zip?: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly h1: string;
  readonly tagline: string;
  readonly intro: readonly LinkedCopy[];
  readonly local: {
    readonly heading: string;
    readonly paragraphs: readonly LinkedCopy[];
  };
}
