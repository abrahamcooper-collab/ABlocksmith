"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { business } from "@/data/siteData";
import Image from "next/image";

export default function FinalCTASection() {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative z-10 px-4 sm:px-6 -mt-16 sm:-mt-24 pb-20">
      <div 
        className="max-w-7xl mx-auto relative rounded-[2rem] overflow-hidden"
        style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      >
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 bg-gray-900">
           {/* Replace line below with an actual <Image> if you have a photo of a house */}
          <Image src="/images/house2.jpg" alt="Home in Twin Falls, ID" fill className="object-cover opacity-60" />
          {/* Dark gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative py-20 px-6 sm:px-12 text-center text-white">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Locked Out or Need New Locks?
          </h2>
          
          <p 
            className={`max-w-3xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed mb-8 transition-all duration-700 delay-100 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Contact <strong className="text-white">{business.name}</strong> today for car lockouts, house lockouts, rekeying and lock changes. Proudly serving Twin Falls and the surrounding Magic Valley communities.
          </p>

          <div 
            className={`mb-10 transition-all duration-700 delay-200 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-lg font-bold mb-1">Call Us:</p>
            <a href={`tel:${business.phoneRaw}`} className="text-xl font-extrabold" style={{ color: "var(--color-primary-light)" }}>
              {business.phone}
            </a>
          </div>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-300 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={`tel:${business.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wider text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              CALL US NOW
            </a>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wider bg-white text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
