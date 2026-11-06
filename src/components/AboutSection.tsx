"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { business } from "@/data/siteData";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const { ref, revealed } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 ${
              revealed
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Placeholder — replace with real image later */}
              <Image src="/images/houses-2.jpg" alt="Homes in Twin Falls, ID" fill className="object-cover"></Image>
            </div>

            {/* Decorative accent block */}
            <div
              className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ backgroundColor: "var(--color-accent-light)", opacity: 0.3 }}
            />
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              revealed
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span
              className="inline-block text-sm font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Who We Are
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-secondary)" }}
            >
              More About <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">A &amp; B Locksmiths LLC</a>
            </h2>
            <div
              className="w-16 h-1 rounded-full mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            />

            <p className="text-gray-600 leading-relaxed mb-4">
              <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: "var(--color-primary)" }}>A &amp; B Locksmiths LLC</a> is a local locksmith
              based in <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">Twin Falls, ID</a>, proudly serving the surrounding Magic Valley communities. Most of our work is residential:{" "}
              <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">house lockouts</a>, <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">rekeying</a> after a move and complete <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">lock changes</a>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We also handle <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">car lockouts</a> for cars, trucks and SUVs, plus commercial lock and key work for local
              businesses. We open locks with proper locksmith tools, so you get back inside without a broken window or a damaged door.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              When you call, you speak with us directly. We&apos;ll tell you honestly what the job needs, whether that&apos;s a quick
              rekey or new locks, across Twin Falls County, Jerome County and nearby areas.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Locally Owned",
                "Residential Specialists",
                "Damage-Free Entry",
                "Car & Home Lockouts",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-primary-50)" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-[0.97]"
              style={{
                backgroundColor: "var(--color-primary)",
                boxShadow: "0 6px 20px rgba(26,115,232,0.3)",
              }}
            >
              More About Us
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
