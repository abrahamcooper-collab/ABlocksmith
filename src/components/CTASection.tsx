"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { business } from "@/data/siteData";

export default function CTASection() {
  const { ref, revealed } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28 px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-white/5" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full bg-white/5" />

      <div
        className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-6">
          Locked Out? Twin Falls&apos; Local Locksmith for Lockouts, Rekeys &amp; Lock Changes
        </h2>
        <p className="text-base sm:text-lg font-semibold text-white/90 mb-3">
          {business.name}
        </p>
        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
          A &amp; B Locksmiths LLC in Twin Falls, ID handles car lockouts, house
          lockouts, rekeying and complete lock changes for homes, vehicles and
          local businesses across Twin Falls &amp; Jerome Counties. Call today!
        </p>

        <a
          href={`tel:${business.phoneRaw}`}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-[0.97]"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "#fff",
            boxShadow: "0 8px 30px rgba(212,160,23,0.35)",
          }}
        >
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          CALL US NOW
        </a>
      </div>
    </section>
  );
}
