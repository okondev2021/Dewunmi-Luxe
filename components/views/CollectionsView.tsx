'use client';

import React, { useState } from 'react';
import { LOOKBOOK_PLATES, LookbookPlate } from '@/lib/atelier-data';

interface CollectionsViewProps {
  onOpenAppointment: (garmentName?: string) => void;
  onOpenLookbookPlate: (plate: LookbookPlate) => void;
  setActiveTab: (tab: string) => void;
}

export default function CollectionsView({
  onOpenAppointment,
  onOpenLookbookPlate,
  setActiveTab,
}: CollectionsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'trousers', label: '01 Corporate Trousers & Vests' },
    { id: 'sets', label: '02 Two-Piece Silhouettes' },
    { id: 'suiting', label: '03 Bespoke Suiting' },
    { id: 'native-femme', label: '04 Native Attire (Femme)' },
    { id: 'native-homme', label: '05 Haute Agbada & Kaftans (Homme)' },
  ];

  const plate1 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-1')!;
  const plate2 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-2')!;
  const plate3 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-3')!;
  const plate4 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-4')!;
  const plate5 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-5')!;
  const plate6 = LOOKBOOK_PLATES.find((p) => p.id === 'plate-6')!;

  return (
    <div className="flex flex-col w-full text-[#e5e2e1]">
      {/* OVERTURE & FOLIO HEAD */}
      <section className="w-full bg-[#131313] px-5 md:px-12 lg:px-16 pt-12 pb-8 border-b border-[#b8975a]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#b8975a]/20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#b8975a]"></span>
              <span className="font-label-caps text-xs tracking-[0.24em] text-[#e6c180] uppercase">
                Lookbook Edition 2026 // Vol. IV
              </span>
            </div>
            <div className="font-label-meta text-xs tracking-[0.2em] text-[#998f81] uppercase mt-2 md:mt-0">
              Victoria Island, Lagos · Bespoke Studio
            </div>
          </div>

          <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-4xl sm:text-5xl md:text-6xl text-[#e5e2e1] tracking-tight leading-none mb-3">
                The Sartorial Ledger
              </h1>
              <p className="font-headline-sm text-lg sm:text-2xl italic text-[#e6c180] font-normal max-w-2xl">
                A curated portfolio of individual anatomy, sculptural drapery, and ancestral handcraft.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-body-md text-sm text-[#d1c5b5] leading-relaxed">
                Each commission represents upwards of seventy hours of manual drafting, floating
                canvas architecture, and hand-finished pick stitching tailored right here in Lagos.
                No two patterns are ever duplicated.
              </p>
            </div>
          </div>

          {/* FOLIO FILTER ANCHOR BAR */}
          <div className="py-4 overflow-x-auto">
            <nav className="flex items-center gap-3 md:gap-6 font-label-caps text-xs uppercase tracking-[0.2em] text-[#998f81] whitespace-nowrap">
              {categories.map((cat, idx) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <React.Fragment key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`transition-colors pb-1 cursor-pointer focus:outline-none ${
                        isSelected
                          ? 'text-[#e6c180] border-b-2 border-[#e6c180] font-semibold'
                          : 'hover:text-[#e5e2e1]'
                      }`}
                    >
                      {cat.label}
                    </button>
                    {idx < categories.length - 1 && (
                      <span className="text-[#b8975a]/40 select-none">/</span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* SECTION I: CORPORATE TROUSERS & ARCHITECTURAL VESTS */}
      {(selectedCategory === 'all' || selectedCategory === 'trousers') && (
        <section className="w-full bg-[#0e0e0e] px-5 md:px-12 lg:px-16 py-20 border-b border-[#b8975a]/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-6 border-b border-[#b8975a]/20">
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase">
                Section 01 // Structural Corporate Form
              </span>
              <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-widest">
                PLATES I &amp; II
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-10">
              {/* Plate I Left Column */}
              <div
                onClick={() => onOpenLookbookPlate(plate1)}
                className="lg:col-span-7 flex flex-col group cursor-pointer"
              >
                <div className="w-full bg-[#1b1b1b] overflow-hidden border border-[#b8975a]/30">
                  <img
                    src={plate1.imageUrl}
                    alt={plate1.title}
                    className="w-full h-auto object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="font-title-md text-base text-[#e5e2e1] uppercase tracking-[0.14em] block group-hover:text-[#e6c180] transition-colors">
                      {plate1.title}
                    </span>
                    <span className="font-label-meta text-xs text-[#e6c180] uppercase tracking-[0.2em] mt-1 block">
                      {plate1.fabrication}
                    </span>
                  </div>
                  <span className="font-label-caps text-xs text-[#998f81] shrink-0">
                    CALIBRATION NO. 418
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Pull Quote & Plate II */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
                <div className="space-y-4 lg:pr-6 pt-2">
                  <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block">
                    Tailor&apos;s Proverb
                  </span>
                  <blockquote className="font-headline-lg text-2xl sm:text-3xl text-[#e5e2e1] italic leading-snug">
                    “The trouser must fall unbroken from high-rise waist to shoe collar, clean as an
                    architect&apos;s line.”
                  </blockquote>
                  <p className="font-body-md text-sm text-[#d1c5b5] pt-2 leading-relaxed">
                    Constructed with a continuous Hollywood waistband, hand-sewn button fly, and
                    double forward pleats engineered specifically to accommodate kinetic gait
                    without lateral pulling across the hip.
                  </p>
                </div>

                {/* Archival Detail Plate II */}
                <div
                  onClick={() => onOpenLookbookPlate(plate2)}
                  className="flex flex-col pt-6 group cursor-pointer"
                >
                  <div className="w-full bg-[#1b1b1b] overflow-hidden border border-[#b8975a]/30">
                    <img
                      src={plate2.imageUrl}
                      alt={plate2.title}
                      className="w-full h-auto object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="pt-3">
                    <span className="font-title-md text-sm text-[#e5e2e1] uppercase tracking-[0.14em] block group-hover:text-[#e6c180] transition-colors">
                      Plate II — Chalk &amp; Shear Metrics
                    </span>
                    <span className="font-label-meta text-xs text-[#e6c180] uppercase tracking-[0.2em] mt-1 block">
                      Basted Cut on Unbleached Linen // Vintage Sheffield Shears
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* INTERMISSION / CINEMATIC FULL-BLEED BREAK */}
      {selectedCategory === 'all' && (
        <section className="w-full relative bg-[#0e0e0e] overflow-hidden">
          <div className="w-full min-h-[480px] lg:min-h-[640px] relative flex items-end">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUGCxcneagVxtdiGN_gU56Kf8WmywLzSEhXRBL3rvCdWVGFdUPdTdRxZDXSY_I28xSMnntj5o4FYt_e4LAMiKssCh9Vp8n3_Ao4tA3SFjQjkhPy-Bw7PeQXURgsuzaQqlsSSv19dtCWZTyECFjFvOJZIi7oF9x1TNDZpysA03TrWQ51au9G83tyguZYMmIpLYCy210DrbmoOfLeP8PeYySVDnkppmoJPKpYUFHnTAeHLN0sGHkgmY"
              alt="Victoria Island atelier evening dusk overlooking lagoon waterfront"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/30 to-transparent"></div>
            <div className="relative z-10 w-full px-5 md:px-12 lg:px-16 pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.3em] uppercase block mb-1">
                  Interlude // Act IV
                </span>
                <p className="font-headline-md text-2xl sm:text-3xl text-[#e5e2e1] font-normal leading-tight">
                  The Victoria Island Salon at Dusk
                </p>
                <span className="font-label-meta text-xs text-[#d1c5b5] tracking-[0.2em] uppercase mt-2 block">
                  Lagoon Waterfront · Private Evening Fittings &amp; Nocturne Wardrobe
                </span>
              </div>
              <div className="font-label-caps text-xs text-[#998f81] tracking-[0.25em] uppercase">
                Plate Index 004 — 008
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION II: TWO-PIECE SETS & BESPOKE SUITING (WARM IVORY / BONE EDITORIAL INVERSION) */}
      {(selectedCategory === 'all' || selectedCategory === 'sets' || selectedCategory === 'suiting') && (
        <section className="w-full bg-[#E6E2DB] text-[#131313] px-5 md:px-12 lg:px-16 py-20 border-b border-[#b8975a]/40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#b8975a]/40">
              <div>
                <span className="font-label-caps text-xs text-[#5b430d] tracking-[0.25em] uppercase block mb-1">
                  Portfolio Chapter 02 &amp; 03
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#131313] font-medium leading-tight">
                  The Architecture of Power: Structured Suiting &amp; Ensembles
                </h2>
              </div>
              <span className="font-label-meta text-xs text-[#484742] uppercase tracking-[0.2em] mt-2 md:mt-0">
                Full Floating Canvas · Zero Synthetic Fusing
              </span>
            </div>

            {/* Editorial Gallery Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12">
              {/* Plate III */}
              <div
                onClick={() => onOpenLookbookPlate(plate3)}
                className="lg:col-span-5 flex flex-col group cursor-pointer"
              >
                <div className="w-full overflow-hidden bg-[#c9c6c0] border border-[#b8975a]/30">
                  <img
                    src={plate3.imageUrl}
                    alt={plate3.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-4">
                  <span className="font-title-md text-base text-[#131313] uppercase tracking-[0.14em] block group-hover:text-[#5b430d] transition-colors">
                    {plate3.title}
                  </span>
                  <span className="font-label-meta text-xs text-[#5b430d] uppercase tracking-[0.2em] mt-1 block font-semibold">
                    {plate3.fabrication}
                  </span>
                  <p className="font-body-md text-sm text-[#484742] mt-2 leading-relaxed">
                    Constructed with extended roped shoulders (con rollino) and unyielding chest
                    canvas, tailored to articulate supreme commanding composure in diplomatic
                    assembly.
                  </p>
                </div>
              </div>

              {/* Plate IV */}
              <div
                onClick={() => onOpenLookbookPlate(plate4)}
                className="lg:col-span-4 flex flex-col group cursor-pointer"
              >
                <div className="w-full overflow-hidden bg-[#c9c6c0] border border-[#b8975a]/30">
                  <img
                    src={plate4.imageUrl}
                    alt={plate4.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-4">
                  <span className="font-title-md text-base text-[#131313] uppercase tracking-[0.14em] block group-hover:text-[#5b430d] transition-colors">
                    {plate4.title}
                  </span>
                  <span className="font-label-meta text-xs text-[#5b430d] uppercase tracking-[0.2em] mt-1 block font-semibold">
                    {plate4.fabrication}
                  </span>
                  <p className="font-body-md text-sm text-[#484742] mt-2 leading-relaxed">
                    A contemporary exploration of directional chalk striping, drafted to
                    accentuate vertical kinetic lines without compromising structural stability.
                  </p>
                </div>
              </div>

              {/* Callout & Specifications Manifesto Block */}
              <div className="lg:col-span-3 flex flex-col justify-between space-y-6 lg:pl-4">
                <div className="p-6 bg-[#d1c5b5]/40 border border-[#b8975a]/40 space-y-4">
                  <span className="font-label-caps text-xs text-[#5b430d] tracking-[0.2em] uppercase block font-semibold">
                    The 36 Calibration Metric
                  </span>
                  <p className="font-headline-sm text-base text-[#131313] italic font-normal leading-relaxed">
                    “We construct a floating canvas that breathes with the body&apos;s posture, never
                    utilizing synthetic adhesives.”
                  </p>
                  <div className="pt-2 space-y-1.5 font-label-meta text-xs text-[#484742] uppercase tracking-wider">
                    <div>• Floating Horsehair Interlining</div>
                    <div>• Pure Horn Button Fastenings</div>
                    <div>• Bemberg Cupro Linings</div>
                    <div>• Hand-Felled Armholes</div>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-label-caps text-xs text-[#131313] uppercase tracking-[0.2em] block mb-1 font-semibold">
                    Production Cadence
                  </span>
                  <p className="font-body-md text-xs text-[#484742] leading-relaxed">
                    Bespoke suiting orders are strictly limited to twenty-four completed silhouettes
                    per quarter to ensure unhurried hand execution by master tailors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION III: NATIVE ATTIRE — HAUTE HERITAGE & ANCESTRAL DRAPERY */}
      {(selectedCategory === 'all' ||
        selectedCategory === 'native-homme' ||
        selectedCategory === 'native-femme') && (
        <section className="w-full bg-[#131313] px-5 md:px-12 lg:px-16 py-20 border-b border-[#b8975a]/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#b8975a]/20">
              <div>
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block mb-1">
                  Portfolio Chapter 04 &amp; 05
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#e5e2e1] font-normal leading-tight">
                  Ancestral Drapery: Haute Native Attire
                </h2>
              </div>
              <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-[0.2em] mt-2 md:mt-0">
                Iseyin Weaving Guilds × Italian Brocade
              </span>
            </div>

            {/* Editorial Plates V & VI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12">
              {/* Plate V: Men's Agbada */}
              {(selectedCategory === 'all' || selectedCategory === 'native-homme') && (
                <div
                  onClick={() => onOpenLookbookPlate(plate5)}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="w-full bg-[#1b1b1b] overflow-hidden border border-[#b8975a]/30">
                    <img
                      src={plate5.imageUrl}
                      alt={plate5.title}
                      className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-title-md text-base text-[#e5e2e1] uppercase tracking-[0.14em] group-hover:text-[#e6c180] transition-colors">
                        {plate5.title}
                      </span>
                      <span className="font-label-caps text-xs text-[#e6c180]">HOMME</span>
                    </div>
                    <span className="font-label-meta text-xs text-[#e6c180] uppercase tracking-[0.2em] mt-1 block">
                      {plate5.fabrication}
                    </span>
                    <p className="font-body-md text-sm text-[#d1c5b5] mt-2 leading-relaxed">
                      Reimagining the grand sovereign Agbada with tailored shoulders and controlled
                      drape geometry. Features dense tambour stitch embroidery along the breastplate
                      executed by our master artisans in Lagos.
                    </p>
                  </div>
                </div>
              )}

              {/* Plate VI: Women's Haute Native Attire */}
              {(selectedCategory === 'all' || selectedCategory === 'native-femme') && (
                <div
                  onClick={() => onOpenLookbookPlate(plate6)}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="w-full bg-[#1b1b1b] overflow-hidden border border-[#b8975a]/30">
                    <img
                      src={plate6.imageUrl}
                      alt={plate6.title}
                      className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-title-md text-base text-[#e5e2e1] uppercase tracking-[0.14em] group-hover:text-[#e6c180] transition-colors">
                        {plate6.title}
                      </span>
                      <span className="font-label-caps text-xs text-[#e6c180]">FEMME</span>
                    </div>
                    <span className="font-label-meta text-xs text-[#e6c180] uppercase tracking-[0.2em] mt-1 block">
                      {plate6.fabrication}
                    </span>
                    <p className="font-body-md text-sm text-[#d1c5b5] mt-2 leading-relaxed">
                      An architectural interpretation of Yoruba ceremonial vestments. Structured
                      internal corsetry supports voluminous, origami-folded sleeves woven with
                      metallic gilt filament.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Ancestral Guild Provenance Footer Note */}
            <div className="mt-16 p-8 bg-[#1b1b1b] border border-[#b8975a]/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="max-w-2xl space-y-1 text-left">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block">
                  Textile Pedigree &amp; Ancestral Weaving
                </span>
                <p className="font-body-lg text-sm sm:text-base text-[#e5e2e1] font-light">
                  Direct provenance partnerships with master weaving families in Iseyin and
                  Abeokuta, paired with premium breathable textiles tailored for the Lagos climate.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-start md:justify-end">
                <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-[0.2em]">
                  Provenance Record #883-LAG
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ATELIER SPECIFICATION GRID / MEASUREMENT LEDGER */}
      <section className="w-full bg-[#0e0e0e] px-5 md:px-12 lg:px-16 py-20 border-b border-[#b8975a]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#b8975a]/20">
            <div>
              <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block mb-1">
                Technical Index
              </span>
              <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e5e2e1] font-normal">
                Anatomy of a Dewunmi Stitch
              </h3>
            </div>
            <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-[0.2em] mt-2 md:mt-0">
              Standard Operating Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/20 space-y-2">
              <span className="font-label-caps text-xs text-[#e6c180] tracking-widest block font-semibold">
                Stage 01
              </span>
              <h4 className="font-title-md text-sm text-[#e5e2e1] uppercase tracking-wider">
                36 Calibration Mapping
              </h4>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Complete structural mapping of postural incline, shoulder drops, and dynamic movement habits.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/20 space-y-2">
              <span className="font-label-caps text-xs text-[#e6c180] tracking-widest block font-semibold">
                Stage 02
              </span>
              <h4 className="font-title-md text-sm text-[#e5e2e1] uppercase tracking-wider">
                Basted Linen Fitting
              </h4>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Initial physical silhouette assembly without lapels or linings, adjusted strictly on the live body.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/20 space-y-2">
              <span className="font-label-caps text-xs text-[#e6c180] tracking-widest block font-semibold">
                Stage 03
              </span>
              <h4 className="font-title-md text-sm text-[#e5e2e1] uppercase tracking-wider">
                Floating Chest Canvas
              </h4>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Natural horsehair pad-stitched by hand to sculpt a permanent memory roll that contours over time.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/20 space-y-2">
              <span className="font-label-caps text-xs text-[#e6c180] tracking-widest block font-semibold">
                Stage 04
              </span>
              <h4 className="font-title-md text-sm text-[#e5e2e1] uppercase tracking-wider">
                Final Ledger Seal
              </h4>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Personalized monogramming, individual paper pattern archive filing, and lifetime preservation guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE COMMISSION INQUIRY SLATE */}
      <section className="w-full bg-[#0e0e0e] px-5 md:px-12 lg:px-16 py-20">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 md:p-16 bg-[#1b1b1b] border border-[#b8975a]/40 flex flex-col items-center text-center space-y-6">
          <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.3em] uppercase">
            Private Salon Ledger
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#e5e2e1] font-normal max-w-3xl leading-snug">
            Every silhouette displayed is an individual archive piece, custom-drafted for private clients.
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-[#d1c5b5] max-w-2xl font-light leading-relaxed">
            Sittings at our Victoria Island salon or overseas trunk visits are scheduled by advance
            request. We invite you to begin your individual measurement profile.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenAppointment()}
              className="w-full sm:w-auto px-8 py-4 bg-[#b8975a] text-[#131313] font-label-caps text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F5F1EA] transition-colors text-center"
            >
              Schedule Consultation in Lagos or Worldwide
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#2a2a2a] text-[#e5e2e1] border border-[#b8975a]/30 font-label-caps text-xs uppercase tracking-[0.2em] hover:bg-[#353535] transition-colors text-center"
            >
              Request Seasonal Lookbook Dossier
            </button>
          </div>
          <div className="pt-6 font-label-meta text-xs text-[#998f81] uppercase tracking-[0.25em]">
            Dewunmi Luxe Stitches • Where Art Meets Your Fabrics • Victoria Island, Lagos
          </div>
        </div>
      </section>
    </div>
  );
}
