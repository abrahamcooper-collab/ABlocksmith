"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { serviceAreas, business } from "@/data/siteData";
import Image from "next/image";

export default function ServiceAreasPreview() {
  const { ref, revealed } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 px-6 overflow-hidden"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gray-800">
        {/* Replace this div with an <Image> tag when you have a real photo */}
        <Image src="/images/houses-1.jpg" alt="Homes in the Twin Falls area" fill className="object-cover"></Image>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-white leading-tight mb-6 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Trusted Locksmith in Twin Falls, ID and Surrounding Communities
        </h2>

        {/* Description */}
        <p
          className={`text-sm sm:text-base text-white/75 leading-relaxed mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {business.name} proudly provides car lockout service, house lockout
          service, lock rekeying and complete lock changes in Twin Falls, ID
          (83301) and nearby communities including Kimberly, Jerome, Filer,
          Hansen, Murtaugh and Eden. As a local, mostly residential locksmith,
          we get drivers and homeowners back inside without damage and keep
          homes and businesses secure across Twin Falls and Jerome Counties.
          Whether it&apos;s a car lockout in Jerome, a rekey in Kimberly or new
          locks on a farmhouse near Filer, your local locksmith is here to help.
        </p>

        {/* Core Areas heading */}
        <h3
          className={`text-2xl sm:text-3xl font-bold text-white mb-8 transition-all duration-700 delay-200 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontStyle: "italic" }}
        >
          Core Areas We Serve
        </h3>

        {/* Location pins */}
        <div
          className={`flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 transition-all duration-700 delay-300 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={area.slug}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              {/* Map pin icon */}
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                className="shrink-0"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="var(--color-primary-light)"
                />
                <circle cx="12" cy="9" r="2.5" fill="white" />
              </svg>
              <span className="text-sm sm:text-base font-medium group-hover:underline">
                {area.city}, {area.state}, USA
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-400 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/service-areas"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 active:scale-[0.97]"
          >
            VIEW ALL AREAS
          </Link>
        </div>
      </div>
    </section>
  );
}
