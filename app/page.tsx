"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="poster-hero">
        <div className="absolute inset-0 opacity-50"><HeroFilm video={brand.heroVideo} image={brand.heroImage} className="!relative min-h-full" /></div>
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 py-24 md:px-6">
          <h1 className="font-display text-7xl leading-[0.85] md:text-[9rem]">{brand.name}</h1>
          <p className="font-stamp mt-4 max-w-lg text-lg text-[#f3ead7]/90">{brand.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/shop" className="rounded-sm px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#1c2416]" style={{ background: "var(--accent)" }}>Shop bikes</Link>
            <Link href="/trails" className="poster-stamp">Trail board</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-display text-5xl md:text-6xl">Garage grid</h2>
        <p className="font-stamp mt-2" style={{ color: "var(--muted)" }}>Adventure-poster energy · {products.length} trail-ready SKUs</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p, i) => (
            <MotionReveal key={p.id} delay={i * 30} className="route-chip !p-2"><ProductCard product={p} /></MotionReveal>
          ))}
        </div>
        <div className="mt-12"><NicheTool /></div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
