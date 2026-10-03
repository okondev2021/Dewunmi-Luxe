'use client';

import React from 'react';

interface CraftStoryViewProps {
  onOpenAppointment: () => void;
  setActiveTab: (tab: string) => void;
}

export default function CraftStoryView({
  onOpenAppointment,
  setActiveTab,
}: CraftStoryViewProps) {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1 — OPENING BRAND PHILOSOPHY */}
      <section className="w-full bg-[#131313] py-24 md:py-32 px-5 md:px-12 lg:px-16 border-b border-[#B8975A]/30">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Minimalist Category Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-label-caps text-xs tracking-[0.25em] text-[#B8975A] uppercase">
              ATELIER ESSAY // VOL. I
            </span>
            <span className="w-12 h-[1px] bg-[#B8975A]/40"></span>
            <span className="font-label-caps text-xs tracking-[0.25em] text-[#d1c5b5] uppercase">
              VICTORIA ISLAND, LAGOS
            </span>
          </div>

          {/* Grand Opening Serif Headline */}
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e5e2e1] font-normal leading-tight max-w-4xl tracking-tight mb-6">
            “We cut every piece to fit you, not a size chart.”
          </h1>

          {/* Delicate Italic Subheading */}
          <p className="font-headline-sm text-lg sm:text-xl md:text-2xl italic text-[#e6c180] font-normal tracking-wide">
            Where art meets your fabrics — drafted by hand in Lagos.
          </p>
        </div>
      </section>

      {/* SECTION 2 — FOUNDER & BRAND STORY (Warm Ivory / Bone #F5F1EA) */}
      <section className="w-full bg-[#F5F1EA] text-[#1a1a1a] py-20 md:py-24 px-5 md:px-12 lg:px-16 border-b border-[#B8975A]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Portrait & Architectural Caption */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="w-full bg-[#131313] border border-[#B8975A]/30 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjkYdqn9Fg_auO4dJnWG3Iw3a9w0_3msQA-3nBlauuCGjTB-9nXO5ue19Y9txBC4Dnpqm2VPZN3uL_0czWyWhky7Q43gdIk26W4ecTZ9ZPlXohsGJmr_DmaX1fdzAsPqeZYBE2lj0KTXTfq1VmjzrQ9mobhixG7dtPnvIaZgrikW5UkxVXmZJmRdLIp8_Wln28nVk_NeA1ai-5gDErAdc3my_P5yZiUDogWoW9A_vYdxc4fK26QLw"
                  alt="Dewunmi in her Lagos bespoke sartorial atelier surrounded by pattern drafts and textiles"
                  className="w-full h-auto object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="pt-2 border-t border-[#B8975A]/30 flex flex-col space-y-1">
                <span className="font-label-caps text-xs tracking-[0.18em] text-[#1a1a1a] uppercase font-semibold">
                  DEWUNMI — FOUNDER &amp; MASTER PATTERN-DRAFTER
                </span>
                <span className="font-label-meta text-xs tracking-[0.14em] text-[#6b665f] uppercase">
                  PHOTOGRAPHED IN THE VICTORIA ISLAND ATELIER, LAGOS
                </span>
              </div>
            </div>

            {/* Right Column: Narrative Column with Drop Cap */}
            <div className="lg:col-span-6 flex flex-col justify-between pt-4 lg:pt-0 lg:pl-6">
              <div className="max-w-[540px] space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-label-caps text-xs tracking-[0.2em] text-[#8e6e30] uppercase font-semibold">
                    HERITAGE &amp; INTENT
                  </span>
                  <div className="w-16 h-[1px] bg-[#B8975A]/40"></div>
                </div>

                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-tight font-normal">
                  An Abiding Reverence for the Architecture of Raw Cloth
                </h2>

                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-[1.85] font-light">
                  <span className="float-left text-6xl leading-[0.8] pr-3 font-headline-lg text-[#8e6e30] font-normal pt-1">
                    D
                  </span>
                  ewunmi Luxe Stitches grew straight out of the vibrant energy of Lagos tailoring
                  shops and local Nigerian textile markets. From an early age, Dewunmi believed that
                  every individual deserves clothing cut to their exact frame, never forced into
                  standard sizes.
                </p>

                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-[1.85] font-light">
                  Every silhouette begins with taking your measurements by hand and drafting a custom
                  pattern from scratch. We proudly honor Nigeria&apos;s profound textile traditions —
                  working closely with multi-generational weaving families in Iseyin and Abeokuta to
                  celebrate hand-loomed Aso-Oke alongside rich, enduring natural wools and linens.
                </p>

                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-[1.85] font-light">
                  To wear a Dewunmi piece is to wear something truly personal: sculpted with floating
                  canvas that breathes effortlessly in our Lagos warmth and moves naturally with
                  your stride.
                </p>

                <div className="pt-8 border-t border-[#B8975A]/30 flex items-center justify-between">
                  <div>
                    <p className="font-headline-sm text-xl italic text-[#1a1a1a]">Dewunmi</p>
                    <p className="font-label-caps text-xs text-[#8e6e30] tracking-[0.16em] uppercase mt-1">
                      Founder &amp; Creative Director
                    </p>
                  </div>
                  <div className="text-right font-label-meta text-xs text-[#6b665f] tracking-widest uppercase">
                    EST. LAGOS 2018
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CRAFTSMANSHIP UP CLOSE: TACTILE FIDELITY */}
      <section className="w-full bg-[#131313] text-[#e5e2e1] py-20 md:py-24 px-5 md:px-12 lg:px-16 border-b border-[#B8975A]/30">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="border-b border-[#B8975A]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase mb-1">
                SECTION II // TACTILE METRICS
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#e5e2e1] font-normal">
                The Tactile Ledger: <span className="italic font-normal">Anatomy of Every Seam</span>
              </h2>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] max-w-md font-light">
              A hands-on deconstruction of our Lagos needlework. Nothing is glued. Nothing is
              hurried. Every curve is guided by anatomical precision, master cutting, and human care.
            </p>
          </div>

          {/* Photo Plates (Two-Column Asymmetric Framing) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Plate: Macro hand-stitching */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="w-full aspect-square border border-[#B8975A]/30 bg-[#1b1b1b] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaNmkk9kOA8xkggNHNbA5WBbLosw8Kuv_z2wyMeUyGMughlP9EB2Hfiq7AvqiRUFLcRlyV1VqjrpNln3l0PFXc54x_obqEDkGtDPNKO6dnhpms30-5968snLHYptnxe6sJJ5C_3KPXKFVP3i88GJjm4-AGFy5DXsrjJpfKCM8ELdf729UuM5HcFI7AZaqdZYWW9Wy_9sb9kw9hkrobWH4GxRqIBIkeDa00yKk-M0gmQKJVFs813eI"
                  alt="Macro hand-stitching on fine tailoring lapel with waxed gold silk thread"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="border-t border-[#B8975A]/30 pt-3">
                <span className="font-label-caps text-xs tracking-[0.16em] text-[#e6c180] uppercase block mb-1">
                  PLATE 01 // METRIC ARCHIVE
                </span>
                <p className="font-body-md text-xs sm:text-sm italic text-[#d1c5b5] leading-relaxed">
                  Plate 01 — Milanese Buttonhole &amp; Floating Canvas Pick-Stitch. Hand-rolled lapels
                  secured with waxed silk filament, responding dynamically to body heat without
                  synthetic fusing.
                </p>
              </div>
            </div>

            {/* Right Plate: Vintage shears and chalk marks */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="w-full aspect-square border border-[#B8975A]/30 bg-[#1b1b1b] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XGARfCuwj_yLCwIQh4VWAYJHQgga5gIfpXWp9RhjkusWOpTV5PR5RFH0K-BxGc-xExf0nS8D87N1svzwE0Vlbur3dIKjQvmsBmYeuL7rZ9UKTXl5Vty7Ga9N9ETYCZ3kqq62MlcUvXIu85FgIZkSb2P5FB1j3hmt5s2Lz-61zKhA5Sq21ieI0sGT2-LJGv_yx_-8CZmuD8KRvCOHmdRyWg0T77MAWih5ZuefokYNMpPbPEhyi3gtxm"
                  alt="Artisanal tailoring tools, brass shears, chalk lines on linen and charcoal wool"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="border-t border-[#B8975A]/30 pt-3">
                <span className="font-label-caps text-xs tracking-[0.16em] text-[#e6c180] uppercase block mb-1">
                  PLATE 02 // DRAFTING LEDGER
                </span>
                <p className="font-body-md text-xs sm:text-sm italic text-[#d1c5b5] leading-relaxed">
                  Plate 02 — Basted Cut &amp; Chalk Geometry. Cut individually per client with
                  8-inch Sheffield shears; no standardized block patterns ever enter our cutting room.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Craft Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#B8975A]/30 divide-y md:divide-y-0 md:divide-x divide-[#B8975A]/30">
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-4 bg-[#0e0e0e]/50">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#e6c180] uppercase">
                01 / STRUCTURAL INTEGRITY
              </span>
              <div>
                <h3 className="font-title-md text-base text-[#e5e2e1] tracking-wider uppercase mb-2">
                  ZERO FUSED ADHESIVES
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] leading-relaxed">
                  A hands-on deconstruction of our Lagos needlework. Nothing is glued. Nothing is
                  hurried. Every curve is guided by anatomical precision, master cutting, and human care.
                </p>
              </div>
              <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-widest">
                SPEC: 100% HORSEHAIR WEFT
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between space-y-4 bg-[#0e0e0e]/50">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#e6c180] uppercase">
                02 / TEXTILE LINEAGE
              </span>
              <div>
                <h3 className="font-title-md text-base text-[#e5e2e1] tracking-wider uppercase mb-2">
                  ANCESTRAL LOOMS
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] leading-relaxed">
                  A hands-on deconstruction of our Lagos needlework. Nothing is glued. Nothing is
                  hurried. Every curve is guided by anatomical precision, master cutting, and human care.
                </p>
              </div>
              <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-widest">
                REGION: ISEYIN &amp; ABEOKUTA
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between space-y-4 bg-[#0e0e0e]/50">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#e6c180] uppercase">
                03 / TIME DISCIPLINE
              </span>
              <div>
                <h3 className="font-title-md text-base text-[#e5e2e1] tracking-wider uppercase mb-2">
                  70+ HOURS PER SUIT
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] leading-relaxed">
                  A hands-on deconstruction of our Lagos needlework. Nothing is glued. Nothing is
                  hurried. Every curve is guided by anatomical precision, master cutting, and human care.
                </p>
              </div>
              <span className="font-label-meta text-xs text-[#998f81] uppercase tracking-widest">
                TEMPO: 4 TO 6 WEEKS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE BESPOKE PROCESS: 4 STAGES DEEPENED (Warm Ivory / Bone #F5F1EA) */}
      <section className="w-full bg-[#F5F1EA] text-[#1a1a1a] py-20 md:py-24 px-5 md:px-12 lg:px-16 border-b border-[#B8975A]/40">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="border-b border-[#B8975A]/40 pb-6 max-w-3xl">
            <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.22em] uppercase block mb-1 font-semibold">
              METHODICAL RIGOR
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] font-normal leading-tight">
              The 4-Stage Protocol: <span className="italic font-normal">From Skeletal Draft to Living Form</span>
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#555] mt-2 font-light leading-relaxed">
              Every commission follows an immutable procedural sequence designed to calibrate weight, proportion, and motion.
            </p>
          </div>

          {/* 4 Stages Sequence */}
          <div className="flex flex-col border-t border-[#B8975A]/40">
            <div className="py-8 border-b border-[#B8975A]/30 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 flex items-start justify-between">
                <div>
                  <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.25em] uppercase block font-semibold">
                    STAGE 01 // METROLOGY
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#1a1a1a] mt-1 font-normal">
                    01 Consultation
                  </h3>
                </div>
                <span className="font-headline-md text-3xl text-[#8e6e30]/50 font-normal pr-4">
                  I
                </span>
              </div>
              <div className="lg:col-span-8 space-y-2">
                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-relaxed font-light">
                  We sit down together in our Lagos salon to take your detailed measurements and discuss your style, posture, and lifestyle.
                </p>
              </div>
            </div>

            <div className="py-8 border-b border-[#B8975A]/30 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 flex items-start justify-between">
                <div>
                  <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.25em] uppercase block font-semibold">
                    STAGE 02 // MATERIALITY
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#1a1a1a] mt-1 font-normal">
                    02 Fabric Selection
                  </h3>
                </div>
                <span className="font-headline-md text-3xl text-[#8e6e30]/50 font-normal pr-4">
                  II
                </span>
              </div>
              <div className="lg:col-span-8 space-y-2">
                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-relaxed font-light">
                  Explore handwoven authentic Nigerian Aso-Oke, pure wools, and breathable linens curated specifically for comfort in our climate.
                </p>
              </div>
            </div>

            <div className="py-8 border-b border-[#B8975A]/30 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 flex items-start justify-between">
                <div>
                  <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.25em] uppercase block font-semibold">
                    STAGE 03 // ANATOMICAL SKELETON
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#1a1a1a] mt-1 font-normal">
                    03 Fitting
                  </h3>
                </div>
                <span className="font-headline-md text-3xl text-[#8e6e30]/50 font-normal pr-4">
                  III
                </span>
              </div>
              <div className="lg:col-span-8 space-y-2">
                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-relaxed font-light">
                  Try on your basted draft so our master cutters can hand-adjust the drape, balance, and proportions directly on your body.
                </p>
              </div>
            </div>

            <div className="py-8 border-b border-[#B8975A]/40 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 flex items-start justify-between">
                <div>
                  <span className="font-label-caps text-xs text-[#8e6e30] tracking-[0.25em] uppercase block font-semibold">
                    STAGE 04 // PERMANENCE
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#1a1a1a] mt-1 font-normal">
                    04 Delivery
                  </h3>
                </div>
                <span className="font-headline-md text-3xl text-[#8e6e30]/50 font-normal pr-4">
                  IV
                </span>
              </div>
              <div className="lg:col-span-8 space-y-2">
                <p className="font-body-lg text-sm sm:text-base text-[#262626] leading-relaxed font-light">
                  Receive your finished bespoke piece, hand-pressed and complete with lifetime care right here in Victoria Island.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRIVATE COMMISSION INVITATION */}
      <section className="w-full bg-[#0E0E0E] text-[#e5e2e1] py-20 px-5 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto border border-[#B8975A]/40 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center">
          {/* Top Monogram Indicator */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B8975A]/40"></span>
            <span className="font-label-caps text-xs tracking-[0.3em] text-[#e6c180] uppercase">
              PRIVATE COMMISSIONS
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]/40"></span>
          </div>

          {/* Main Invitation Copy */}
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#e5e2e1] font-normal max-w-2xl leading-tight mb-4">
            Every commission is an enduring dialogue between maker and wearer.
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-[#d1c5b5] max-w-xl font-light mb-8">
            Sittings at our Victoria Island salon are curated exclusively by advance appointment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mb-8">
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto font-label-caps text-xs uppercase px-8 py-4 bg-[#B8975A] text-[#131313] hover:bg-[#F5F1EA] transition-colors text-center tracking-[0.2em] font-semibold"
            >
              SCHEDULE A LAGOS CONSULTATION
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto font-label-caps text-xs uppercase px-8 py-4 border border-[#B8975A] text-[#e5e2e1] hover:bg-[#1C1C1C] transition-colors text-center tracking-[0.2em]"
            >
              CONTACT OUR ATELIER
            </button>
          </div>

          {/* Atelier Coordinates Footer */}
          <div className="w-full pt-6 border-t border-[#B8975A]/20">
            <p className="font-label-meta text-xs text-[#998f81] tracking-[0.18em] uppercase">
              VICTORIA ISLAND WATERFRONT, LAGOS • +234 915 157 6092 • CONCIERGE@DEWUNMILUXE.COM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
