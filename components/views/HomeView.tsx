'use client';

import React from 'react';
import { ArrowRight, Sparkles, Scissors, Clock, MapPin, Check } from 'lucide-react';
import { LOOKBOOK_PLATES, LookbookPlate } from '@/lib/atelier-data';

interface HomeViewProps {
  onOpenAppointment: (garmentName?: string) => void;
  onOpenLookbookPlate: (plate: LookbookPlate) => void;
  setActiveTab: (tab: string) => void;
}

export default function HomeView({
  onOpenAppointment,
  onOpenLookbookPlate,
  setActiveTab,
}: HomeViewProps) {
  const plate1 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-1')!;
  const plate5 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-5')!;

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Full-bleed editorial, #131313 / #1C1C1C) */}
      <section className="relative w-full min-h-[92vh] bg-[#131313] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbQ7-lmOHAWJhtdwDuUEz8sZk1GGiW8A80fy58mtCt3XuE8qI7pPvSKP0pp2dPkFKOsiu2ZNPtcapLc8y5PgGBffeldzP1kA0u2BY1z1lUKMwRMxaOLieQf8n2M-hBpP--LGhr9zGSETDVSPgPvtjusek-prVCPZ49pDqAIlXz3uYnx73J8anXVQ3EcEK8KJKAoZBmt0q69DTCnFgfacSqG3s5EblttSdJyJYw6kycakgF5Xp2Q6A"
            alt="Nigerian female model in architectural bespoke double-breasted suit standing in Lagos atelier"
            className="w-full h-full object-cover object-center opacity-85 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-[#131313]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/85 via-transparent to-[#131313]/30"></div>
        </div>

        {/* Top Left Atelier Monogram Tag */}
        <div className="relative z-10 w-full px-5 md:px-12 lg:px-16 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-3 bg-[#131313]/85 backdrop-blur-sm px-3.5 py-1.5 border border-[#b8975a]/30">
            {/* Monogram Seal */}
            <div className="w-5 h-5 flex items-center justify-center border border-[#b8975a]/40 text-[#e6c180]">
              <span className="text-[10px] font-bold">DL</span>
            </div>
            <span className="font-label-caps text-[10px] md:text-xs text-[#e6c180] uppercase tracking-[0.24em]">
              Bespoke Order No. 2026-IV
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 font-label-meta text-xs text-[#d1c5b5]">
            <span className="text-[#e6c180] tracking-widest uppercase">VICTORIA ISLAND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a]"></span>
            <span className="tracking-widest uppercase">LAGOS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a]"></span>
            <span className="tracking-widest uppercase">PRIVATE SALON</span>
          </div>
        </div>

        {/* Hero Lower Third / Main Messaging */}
        <div className="relative z-10 w-full px-5 md:px-12 lg:px-16 pb-16 pt-24 mt-auto">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#b8975a] inline-block"></span>
              <span className="font-label-caps text-xs text-[#e6c180] uppercase tracking-[0.3em]">
                Handmade in Victoria Island, Lagos
              </span>
            </div>

            <h1 className="font-display-hero text-4xl sm:text-5xl md:text-[64px] md:leading-[72px] text-[#e5e2e1] font-normal tracking-tight">
              Where art meets <span className="italic text-[#e6c180] font-normal">your fabrics.</span>
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-[#d1c5b5] max-w-2xl font-light leading-relaxed">
              Warm, bespoke tailoring cut and sewn by hand in Lagos. Built for people who
              cherish authentic personal style, Nigerian craftsmanship, and garments that
              truly feel like home.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenAppointment()}
                className="px-8 py-4 bg-[#b8975a] text-[#131313] font-label-caps text-xs tracking-[0.22em] uppercase text-center font-semibold transition-all hover:bg-[#F5F1EA] hover:text-[#131313]"
              >
                Book Your Fitting
              </button>
              <button
                onClick={() => {
                  setActiveTab('collections');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 border border-[#b8975a] text-[#e5e2e1] font-label-caps text-xs tracking-[0.22em] uppercase text-center transition-all hover:bg-[#2a2a2a] hover:border-[#e6c180]"
              >
                View Our Creations
              </button>
            </div>
          </div>
        </div>

        {/* Architectural hairline frame marker */}
        <div className="relative z-10 w-full px-5 md:px-12 lg:px-16 py-3 border-t border-[#b8975a]/20 flex items-center justify-between text-[#998f81] font-label-meta text-xs">
          <span className="tracking-widest uppercase">Victoria Island Salon · Plot 14 Waterway</span>
          <span className="tracking-widest font-mono">06°25&apos;49.8&quot;N 03°25&apos;33.6&quot;E</span>
        </div>
      </section>

      {/* 2. STATEMENT INTRO / EDITORIAL OVERTURE (Ivory/Bone #F5F1EA background) */}
      <section className="w-full bg-[#F5F1EA] text-[#1C1C1C] py-20 md:py-28 px-5 md:px-12 lg:px-16 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B8975A]"></span>
            <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.28em] uppercase font-semibold">
              The Atelier Philosophy
            </span>
          </div>

          <blockquote className="font-headline-lg text-2xl sm:text-3xl md:text-[44px] md:leading-[56px] text-[#1C1C1C] font-normal tracking-normal max-w-5xl my-6">
            “We believe good clothes should honor your heritage and fit your life seamlessly.
            Every single stitch is placed by hand right here in Lagos.”
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#B8975A]/30 mt-10">
            <div className="p-8 md:pr-10 md:border-r border-[#B8975A]/30 flex flex-col justify-between">
              <span className="font-headline-md text-3xl text-[#8e6e30] font-light">40+</span>
              <div className="mt-4">
                <h4 className="font-title-md text-base text-[#1C1C1C] uppercase tracking-wider mb-1">
                  Hours of Handcraft
                </h4>
                <p className="font-body-md text-sm text-[#484742] leading-relaxed">
                  Padded horsehair canvas, hand-rolled edges, and individually drafted paper
                  patterns tailored to you.
                </p>
              </div>
            </div>

            <div className="p-8 md:px-10 border-t md:border-t-0 md:border-r border-[#B8975A]/30 flex flex-col justify-between">
              <span className="font-headline-md text-3xl text-[#8e6e30] font-light">100%</span>
              <div className="mt-4">
                <h4 className="font-title-md text-base text-[#1C1C1C] uppercase tracking-wider mb-1">
                  Nigerian Sourcing
                </h4>
                <p className="font-body-md text-sm text-[#484742] leading-relaxed">
                  Authentic handwoven Aso-Oke from Iseyin and Oyo, artisanal Abeokuta Adire, and
                  rich Nigerian silks.
                </p>
              </div>
            </div>

            <div className="p-8 md:pl-10 border-t md:border-t-0 border-[#B8975A]/30 flex flex-col justify-between">
              <span className="font-headline-md text-3xl text-[#8e6e30] font-light">03</span>
              <div className="mt-4">
                <h4 className="font-title-md text-base text-[#1C1C1C] uppercase tracking-wider mb-1">
                  Personal Fittings
                </h4>
                <p className="font-body-md text-sm text-[#484742] leading-relaxed">
                  Relaxed, private fitting sessions in our Victoria Island salon to ensure your
                  piece sits comfortably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SIGNATURE CREATIONS (Magazine Spread Layout, #131313) */}
      <section className="w-full bg-[#131313] text-[#e5e2e1] py-20 px-5 md:px-12 lg:px-16 border-b border-[#b8975a]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#b8975a]/20 gap-4">
            <div>
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.28em] uppercase block mb-1">
                Made in Lagos
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e2e1]">
                Signature Pieces
              </h2>
            </div>
            <p className="font-body-md text-sm text-[#d1c5b5] max-w-md">
              Thoughtfully tailored pieces made one at a time for your everyday ease,
              celebrations, and life moments.
            </p>
          </div>

          {/* Editorial Asymmetrical Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Primary Hero Feature (Left 7 cols) */}
            <div
              onClick={() => onOpenLookbookPlate(plate1)}
              className="lg:col-span-7 flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-[480px] sm:h-[580px] md:h-[640px] overflow-hidden bg-[#1b1b1b] border border-[#b8975a]/30">
                <img
                  src={plate1.imageUrl}
                  alt={plate1.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#131313]/90 px-3 py-1 font-label-meta text-[11px] text-[#e6c180] uppercase tracking-widest border border-[#b8975a]/40">
                  Plate I · Ready for Commission
                </div>
              </div>
              <div className="pt-4 flex flex-col justify-between">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-headline-sm text-xl text-[#e5e2e1] tracking-wide group-hover:text-[#e6c180] transition-colors">
                    {plate1.title}
                  </h3>
                  <span className="font-label-caps text-xs text-[#b8975a] tracking-widest">
                    EDITION 01
                  </span>
                </div>
                <p className="font-body-md text-sm text-[#d1c5b5] mt-1">
                  Structured vest and relaxed wide-leg trousers cut in breathable sandy wool-blend
                  tailored for Lagos weather.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-label-meta text-[#998f81]">
                  <span className="text-[#e6c180] font-mono font-medium">Custom Made from ₦450,000</span>
                  <span>•</span>
                  <span>2 Basted Fittings</span>
                  <span>•</span>
                  <span>Hand-finished Horn Buttons</span>
                </div>
              </div>
            </div>

            {/* Secondary & Tertiary Features (Right 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              {/* Secondary Feature (Right top) */}
              <div
                onClick={() => onOpenLookbookPlate(plate5)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-[#1b1b1b] border border-[#b8975a]/30">
                  <img
                    src={plate5.imageUrl}
                    alt={plate5.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#131313]/90 px-3 py-1 font-label-meta text-[11px] text-[#e6c180] uppercase tracking-widest border border-[#b8975a]/40">
                    Plate II · Haute Heritage
                  </div>
                </div>
                <div className="pt-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-headline-sm text-lg text-[#e5e2e1] tracking-wide group-hover:text-[#e6c180] transition-colors">
                      {plate5.title}
                    </h3>
                    <span className="font-label-caps text-xs text-[#b8975a] tracking-widest">
                      EDITION 02
                    </span>
                  </div>
                  <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] mt-1">
                    Contemporary Agbada and buba set crafted from handwoven Iseyin Aso-Oke with
                    subtle hand-stitched detailing.
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs font-label-meta text-[#998f81]">
                    <span className="text-[#e6c180] font-mono font-medium">Custom Made from ₦550,000</span>
                    <span>•</span>
                    <span>Authentic Handwoven Loom Cloth</span>
                  </div>
                </div>
              </div>

              {/* Tertiary Feature (Right bottom split cards) */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#b8975a]/20">
                <div
                  onClick={() => {
                    const pl = LOOKBOOK_PLATES.find((p) => p.id === 'plate-3');
                    if (pl) onOpenLookbookPlate(pl);
                  }}
                  className="flex flex-col p-4 bg-[#1b1b1b] border border-[#b8975a]/20 group hover:border-[#b8975a] transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-caps text-[10px] text-[#b8975a]">PIECE 03</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#b8975a] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-title-md text-sm text-[#e5e2e1]">The Power Blazer</h4>
                  <p className="font-label-meta text-xs text-[#998f81] mt-1 leading-relaxed">
                    Lightweight unlined jacket with soft hand-stitched peak lapels.
                  </p>
                  <span className="font-label-meta text-[11px] text-[#e6c180] mt-2">
                    Tropical Worsted Wool
                  </span>
                </div>

                <div
                  onClick={() => {
                    const pl = LOOKBOOK_PLATES.find((p) => p.id === 'plate-6');
                    if (pl) onOpenLookbookPlate(pl);
                  }}
                  className="flex flex-col p-4 bg-[#1b1b1b] border border-[#b8975a]/20 group hover:border-[#b8975a] transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-caps text-[10px] text-[#b8975a]">PIECE 04</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#b8975a] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-title-md text-sm text-[#e5e2e1]">Emerald Iro & Buba</h4>
                  <p className="font-label-meta text-xs text-[#998f81] mt-1 leading-relaxed">
                    Origami-folded sleeves with metallic gilt thread brocade.
                  </p>
                  <span className="font-label-meta text-[11px] text-[#e6c180] mt-2">
                    Aso-Oke Brocade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CRAFTSMANSHIP (Artisanal close-up, #0E0E0E) */}
      <section className="w-full bg-[#0e0e0e] text-[#e5e2e1] py-20 px-5 md:px-12 lg:px-16 border-b border-[#b8975a]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Macro Artisanal Visual (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[420px] sm:h-[540px] overflow-hidden border border-[#b8975a]/30 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxQpwUxK8WM6UJYl_HSnAmXdAJii7Qa7l48L2-sbS4S6QaWEN_75pRZtp5WD5xJO0rPaaKmHEvJeMD64XmLjQu5nHAXkurbMg21O4AMB4xr0HXn9Hnd7YOPDp3x33bb6VELVQXC3HQPlhmx0loaCml8wITi7I9lmuI__uB0quf8d8IsZZ76pGGIi_iL-JtWvW50sWFFSwKOAKL788y6opBMhCVdYD8VqI55fclJbOpXno3iVP9Uuo"
                alt="Seasoned tailor hands using vintage brass cutting shears on cutting table in Victoria Island"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-[#131313]/95 border-t border-[#b8975a]/20 flex items-center justify-between">
                <span className="font-label-caps text-xs text-[#e6c180] uppercase tracking-[0.2em]">
                  The Victoria Island Cutting Table
                </span>
                <span className="font-label-meta text-xs text-[#998f81] font-mono">
                  Archive 19/30
                </span>
              </div>
            </div>
          </div>

          {/* Pull Quote & Craft Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.28em] uppercase block mb-1">
                Uncompromising Standards
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e5e2e1]">
                The Anatomy of a Cut
              </h2>
            </div>

            <blockquote className="font-headline-sm text-lg sm:text-xl text-[#e5e2e1] font-light italic border-l-2 border-[#b8975a] pl-5 leading-relaxed">
              “Tailoring is a personal conversation between tailor and client. We make sure every
              piece feels natural, respectful of your body, and proudly Nigerian.”
              <footer className="font-label-caps text-xs not-italic text-[#b8975a] tracking-[0.22em] mt-2 uppercase block">
                — Dewunmi, Lead Pattern-Drafter & Founder
              </footer>
            </blockquote>

            <div className="divide-y divide-[#b8975a]/20 border-t border-b border-[#b8975a]/20 pt-2">
              <div className="py-4 flex items-start gap-4">
                <span className="font-mono text-xs text-[#b8975a] pt-1 font-semibold">01.</span>
                <div>
                  <h3 className="font-title-md text-sm text-[#e5e2e1] font-medium">
                    Hand-Stitched Natural Canvas
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] mt-1 leading-relaxed">
                    Zero synthetic glues or stiffeners. Pure natural horsehair canvas that molds
                    softly to your chest and shoulders over time.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="font-mono text-xs text-[#b8975a] pt-1 font-semibold">02.</span>
                <div>
                  <h3 className="font-title-md text-sm text-[#e5e2e1] font-medium">
                    Authentic Nigerian Handwovens & Silks
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] mt-1 leading-relaxed">
                    Textiles woven by hand in Iseyin, Abeokuta, and Oyo, paired with breathable fine
                    wool and cotton tailored for our warm climate.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="font-mono text-xs text-[#b8975a] pt-1 font-semibold">03.</span>
                <div>
                  <h3 className="font-title-md text-sm text-[#e5e2e1] font-medium">
                    Patterns Drafted from Scratch
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] mt-1 leading-relaxed">
                    No ready-made templates. Our master cutters in Victoria Island draft a personal
                    paper blueprint for every client from your exact measurements.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="font-mono text-xs text-[#b8975a] pt-1 font-semibold">04.</span>
                <div>
                  <h3 className="font-title-md text-sm text-[#e5e2e1] font-medium">
                    Gentle Multi-Stage Fitting
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] mt-1 leading-relaxed">
                    From loose white-thread basting to final press, we adjust and refine until you
                    feel completely at ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BESPOKE PROCESS (Vertical Sequence, Warm Bone/Ivory #F5F1EA) */}
      <section className="w-full bg-[#F5F1EA] text-[#1C1C1C] py-20 px-5 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.3em] uppercase block mb-1 font-semibold">
              The 4-Stage Protocol
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#1C1C1C]">
              The Bespoke Journey
            </h2>
            <p className="font-body-md text-sm text-[#484742] mt-2">
              From initial anatomical consultation to the final hand-pressed reveal in our
              Victoria Island private rooms.
            </p>
          </div>

          {/* Vertical Timeline with connected hairline */}
          <div className="relative border-l border-[#B8975A]/40 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-[#B8975A] rounded-none"></div>
              <span className="font-label-caps text-xs text-[#8e6e30] tracking-widest font-mono">
                STAGE 01 · CONSULTATION
              </span>
              <h3 className="font-headline-sm text-xl text-[#1C1C1C] mt-1">
                A Warm Conversation & Measurements
              </h3>
              <p className="font-body-md text-sm text-[#484742] mt-2 max-w-2xl leading-relaxed">
                We welcome you to our Victoria Island salon for a cup of tea or cold drink. We
                discuss what you want to wear, where you are going, and take careful measurements of
                your posture and movement habits.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-[#B8975A] rounded-none"></div>
              <span className="font-label-caps text-xs text-[#8e6e30] tracking-widest font-mono">
                STAGE 02 · FABRIC SELECTION
              </span>
              <h3 className="font-headline-sm text-xl text-[#1C1C1C] mt-1">
                Choosing Your Cloth & Textures
              </h3>
              <p className="font-body-md text-sm text-[#484742] mt-2 max-w-2xl leading-relaxed">
                Feel genuine handwoven Aso-Oke, natural indigo Adire from Abeokuta, and light
                breathable wools. You choose every button, lining, and pocket style with our
                guidance.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-[#B8975A] rounded-none"></div>
              <span className="font-label-caps text-xs text-[#8e6e30] tracking-widest font-mono">
                STAGE 03 · THE FITTING
              </span>
              <h3 className="font-headline-sm text-xl text-[#1C1C1C] mt-1">
                Trying On Your Basted Garment
              </h3>
              <p className="font-body-md text-sm text-[#484742] mt-2 max-w-2xl leading-relaxed">
                You try on the unfinished piece, held together with soft white thread. Our Lagos
                cutter sculpts the fit right on you so movement is comfortable and effortless.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-[#B8975A] rounded-none"></div>
              <span className="font-label-caps text-xs text-[#8e6e30] tracking-widest font-mono">
                STAGE 04 · DELIVERY
              </span>
              <h3 className="font-headline-sm text-xl text-[#1C1C1C] mt-1">
                Hand-Pressed & Ready for Life
              </h3>
              <p className="font-body-md text-sm text-[#484742] mt-2 max-w-2xl leading-relaxed">
                Carefully steam-pressed by hand and packaged in breathable linen garment bags. Your
                personal pattern stays on file with us in Lagos for whenever you need your next piece.
              </p>
            </div>
          </div>

          {/* Action Box */}
          <div className="mt-16 p-8 md:p-12 bg-[#1C1C1C] text-[#F5F1EA] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B8975A]/40">
            <div className="space-y-2 max-w-xl">
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase">
                Victoria Island, Lagos
              </span>
              <h3 className="font-headline-md text-2xl text-[#e5e2e1]">
                Come Visit Our Salon
              </h3>
              <p className="font-body-md text-sm text-[#d1c5b5] leading-relaxed">
                Book a quiet 60-minute visit with Dewunmi at our Victoria Island salon. We will
                take your measurements and walk you through fabrics over refreshments.
              </p>
            </div>
            <button
              onClick={() => onOpenAppointment()}
              className="w-full md:w-auto px-8 py-4 bg-[#b8975a] text-[#131313] font-label-caps text-xs uppercase text-center font-semibold tracking-[0.22em] hover:bg-[#F5F1EA] transition-colors"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* 6. SALON LOCATIONS & WATERMARK FOOTER ANCHOR */}
      <section className="w-full bg-[#131313] text-[#e5e2e1] py-16 px-5 md:px-12 lg:px-16 border-t border-[#b8975a]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#b8975a]/20 pb-16">
            <div>
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block mb-1">
                Lagos Headquarters
              </span>
              <h4 className="font-title-md text-base text-[#e5e2e1] mb-2">
                Victoria Island Private Salon
              </h4>
              <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] leading-relaxed">
                Plot 14 Victoria Island / Lekki Phase 1 Waterfront
                <br />
                Lagos State, Nigeria
              </p>
              <span className="font-label-meta text-xs text-[#e6c180] mt-2 block tracking-wider uppercase">
                HOURS: TUE – SAT · 10:00 – 19:00
              </span>
            </div>

            <div>
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block mb-1">
                Direct Concierge
              </span>
              <h4 className="font-title-md text-base text-[#e5e2e1] mb-2">
                Private Tailoring Line
              </h4>
              <div className="font-body-md text-xs sm:text-sm text-[#d1c5b5] space-y-1">
                <p>+234 915 157 6092</p>
                <p>+234 913 535 3627</p>
              </div>
              <span className="font-label-meta text-xs text-[#e6c180] mt-2 block tracking-wider uppercase">
                WHATSAPP CONCIERGE · ACTIVE 24/7
              </span>
            </div>

            <div>
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block mb-1">
                Digital Salon
              </span>
              <h4 className="font-title-md text-base text-[#e5e2e1] mb-2">
                Social & Visual Diary
              </h4>
              <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5]">
                Instagram: @dewunmiluxe
                <br />
                Direct Inquiries: concierge@dewunmiluxe.com
              </p>
              <span className="font-label-meta text-xs text-[#e6c180] mt-2 block tracking-wider uppercase">
                BY PRIVATE APPOINTMENT ONLY
              </span>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#b8975a]/50 flex items-center justify-center text-[#e6c180] text-xs font-bold bg-[#1b1b1b]">
                DL
              </div>
              <span className="font-title-md text-sm tracking-[0.2em] text-[#e5e2e1] uppercase">
                Dewunmi Luxe Stitches
              </span>
            </div>
            <p className="font-label-meta text-xs text-[#998f81] tracking-[0.16em] uppercase text-center md:text-right">
              © 2026 DEWUNMI LUXE STITCHES. WHERE ART MEETS YOUR FABRICS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
