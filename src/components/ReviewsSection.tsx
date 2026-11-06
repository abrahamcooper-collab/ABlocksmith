"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { business } from "@/data/siteData";

/*
 * Google reviews. Live reviews need the profile's Place ID and a Places API
 * key, which we don't have yet, so this links to the reviews on Google instead
 * of showing reviews we can't verify. Once a Place ID is available, fetch the
 * reviews server-side and render them as cards in this section.
 */

/* ─── Section ─── */
export default function ReviewsSection() {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "var(--color-gray-50)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className="inline-block text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            What People Think About Us
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it. See what customers across
            Twin Falls and the surrounding communities say about us on Google.
          </p>
        </div>

        {/* Google review CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href={business.gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
          >
            See All Google Reviews
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
