"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";
/* ─── Features Data ─── */
const leftFeatures = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Damage-Free Entry",
    desc: "We open cars and homes with proper locksmith tools, never crowbars or broken glass.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" />
      </svg>
    ),
    title: "Quality Hardware",
    desc: "Solid locks, deadbolts and smart locks, installed so every door latches and locks properly.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Customer Satisfaction",
    desc: "Straight answers on the phone and honest advice on whether you need a rekey or new locks.",
  },
];

const rightFeatures = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: "Residential Specialists",
    desc: "Most of our work is for homeowners, renters and landlords across Twin Falls & Jerome Counties.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Local Expertise",
    desc: "Serving Twin Falls, Kimberly, Jerome, Filer, Hansen, Murtaugh, Eden and nearby areas.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Complete Lock Solutions",
    desc: "From car and house lockouts to rekeying, lock changes and smart locks, we do it all.",
  },
];

const bottomFeature = {
  icon: (
    <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
  title: "Direct, Personal Service",
  desc: "You speak with the locksmiths who do the work, not a call centre.",
};

/* ─── Feature Item ─── */
function FeatureItem({
  icon,
  title,
  desc,
  align = "left",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  align?: "left" | "right" | "center";
}) {
  return (
    <div
      className={`flex gap-4 ${
        align === "right"
          ? "flex-row-reverse text-right"
          : align === "center"
          ? "flex-row text-left sm:text-left"
          : "flex-row text-left"
      }`}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        {icon}
      </div>
      <div>
        <h3
          className="font-bold text-base mb-1"
          style={{ color: "var(--color-secondary)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function WhyChooseUsSection() {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ color: "var(--color-secondary)" }}
          >
            Why Should You Choose A &amp; B Locksmiths?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
              A &amp; B Locksmiths LLC
            </span>{" "}
            is a local locksmith in Twin Falls, ID, trusted for car lockouts,
            house lockouts, rekeying and lock changes. We focus on the jobs
            people need most and deliver honest, careful service across the
            Magic Valley.
          </p>
        </div>

        {/* 3-column layout: features / image / features */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center transition-all duration-700 delay-200 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left features */}
          <div className="space-y-10">
            {leftFeatures.map((f) => (
              <FeatureItem
                key={f.title}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                align="left"
              />
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-[320px]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image src="/images/door.jpg" alt="Front door with lock" fill className="object-cover"></Image>
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-10">
            {rightFeatures.map((f) => (
              <FeatureItem
                key={f.title}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                align="right"
              />
            ))}
          </div>
        </div>

        {/* Bottom centered feature */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 delay-400 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-md">
            <FeatureItem
              icon={bottomFeature.icon}
              title={bottomFeature.title}
              desc={bottomFeature.desc}
              align="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
