"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/siteData";
import { ElementType } from "react";

/* ─── Service Card ─── */
function ServiceCard({
  service,
  index,
  revealed,
}: {
  service: (typeof services)[0];
  index: number;
  revealed: boolean;
}) {
  const Icon = service.icon as ElementType;

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        boxShadow: "var(--shadow-md)",
      }}
    >
      {/* Image area */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
        {service.image ? (
          <Image
            src={service.image}
            alt={`${service.title} services`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Template's photo placeholder, used until locksmith photos are supplied.
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(${135 + index * 20}deg, var(--color-primary-50) 0%, var(--color-gray-200) 100%)`,
              color: "var(--color-primary)",
            }}
          >
            <Icon size={56} strokeWidth={1.25} aria-hidden />
          </div>
        )}
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-0 transition-opacity duration-500"
          style={{ backgroundColor: "var(--color-secondary)" }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text */}
      <div className="p-6">
        <h3
          className="text-lg font-bold mb-2 transition-colors duration-200 group-hover:text-primary"
          style={{ color: "var(--color-secondary)" }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">
          {service.shortDesc}
        </p>
        <Link
          href={service.slug}
          className="inline-flex items-center gap-1 mt-4 text-sm font-semibold transition-colors duration-200 group-hover:gap-2"
          style={{ color: "var(--color-primary)" }}
        >
          Learn More
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function ServicesSection() {
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
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Services
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              revealed={revealed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
