'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Scissors, Clock, Award, Shield, Sparkles } from 'lucide-react';

interface ProcessViewProps {
  onOpenAppointment: () => void;
}

export default function ProcessView({ onOpenAppointment }: ProcessViewProps) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'The Anatomical Ledger & Metrology',
      subtitle: 'Day 01 // Victoria Island Salon',
      duration: '60 Minutes',
      description:
        'A comprehensive dialogue reviewing your posture, kinetic gait, shoulder slope, and personal sartorial habits. Over 34 anatomical measures are recorded in your private ledger.',
      metrics: [
        '34+ Anatomical posture points mapped',
        'Shoulder slope and blade curvature assessment',
        'Kinetic stride and trouser drop calibration',
        'Bespoke silhouette style brief established',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDjkYdqn9Fg_auO4dJnWG3Iw3a9w0_3msQA-3nBlauuCGjTB-9nXO5ue19Y9txBC4Dnpqm2VPZN3uL_0czWyWhky7Q43gdIk26W4ecTZ9ZPlXohsGJmr_DmaX1fdzAsPqeZYBE2lj0KTXTfq1VmjzrQ9mobhixG7dtPnvIaZgrikW5UkxVXmZJmRdLIp8_Wln28nVk_NeA1ai-5gDErAdc3my_P5yZiUDogWoW9A_vYdxc4fK26QLw',
    },
    {
      num: '02',
      title: 'Materiality & Cloth Provenance',
      subtitle: 'Day 07 // Textile Selection',
      duration: 'Curated Palette',
      description:
        'Direct sourcing from generational Nigerian weavers in Iseyin and Abeokuta, paired with high-twist tropical wools from Biella. Every button, thread weight, and silk lining is chosen with master guidance.',
      metrics: [
        '100% Hand-loomed Aso-Oke & Adire Silk',
        'Super 140s–160s open-weave tropical wools',
        'Genuine horn, mother-of-pearl, or engraved brass buttons',
        'Breathable Bemberg Cupro jacquard lining',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDaNmkk9kOA8xkggNHNbA5WBbLosw8Kuv_z2wyMeUyGMughlP9EB2Hfiq7AvqiRUFLcRlyV1VqjrpNln3l0PFXc54x_obqEDkGtDPNKO6dnhpms30-5968snLHYptnxe6sJJ5C_3KPXKFVP3i88GJjm4-AGFy5DXsrjJpfKCM8ELdf729UuM5HcFI7AZaqdZYWW9Wy_9sb9kw9hkrobWH4GxRqIBIkeDa00yKk-M0gmQKJVFs813eI',
    },
    {
      num: '03',
      title: 'The Calico Skeleton (Toile Fitting)',
      subtitle: 'Day 14 Post-Brief // Master Cutter',
      duration: '45 Minutes Sitting',
      description:
        'An unfinished mockup cut in raw cotton calico or basted horsehair canvas is fitted directly to your body. Master cutters adjust chalk lines, armhole depth, and torso balance.',
      metrics: [
        'Direct on-body chalk contouring',
        'Balance correction for natural asymmetrical posture',
        'Armhole depth and sleeve rotation angle aligned',
        'Individual pattern locked into archival docket',
      ],
      image:
        'https://lh3.googleusercontent.com/aida/AEtjO1XGARfCuwj_yLCwIQh4VWAYJHQgga5gIfpXWp9RhjkusWOpTV5PR5RFH0K-BxGc-xExf0nS8D87N1svzwE0Vlbur3dIKjQvmsBmYeuL7rZ9UKTXl5Vty7Ga9N9ETYCZ3kqq62MlcUvXIu85FgIZkSb2P5FB1j3hmt5s2Lz-61zKhA5Sq21ieI0sGT2-LJGv_yx_-8CZmuD8KRvCOHmdRyWg0T77MAWih5ZuefokYNMpPbPEhyi3gtxm',
    },
    {
      num: '04',
      title: 'Forward Baste & Floating Canvas Memory',
      subtitle: 'Day 28 // Needlecraft Assembly',
      duration: '45 Minutes Sitting',
      description:
        'The noble chosen fabric is cut with vintage Sheffield shears. Natural horsehair chest canvas is pad-stitched by hand so it dynamically breathes and shapes with body warmth over time.',
      metrics: [
        'Zero synthetic fusing or glue adhesives',
        'Hand-set shoulder roping (Con Rollino)',
        'Loose white thread basting for micro-tuning',
        'Floating canvas chest drape verified',
      ],
      image:
        'https://lh3.googleusercontent.com/aida/AEtjO1VbeGiOIxyjFEMOj3seOiX6o_73GH5fkyviDwPvHRcadzKAcBSOi93aJYT-KMO3au49lX9wgjL9z0gArDJJreqFF2Ox-wOyMDeCc08Gi2IAe0eVO1m675lGoFv3fMvkcj-1uqew-nZSjubyoNceNla6ZgE7m1T06uC0lOP8NxSGzbr4Stqx7wwVoWGOt1aFNifl-ZBl5fzPa2pjbhFnqJgWujeNe2mD7ub8PYiDaeqD-7--3eOJr66S',
    },
    {
      num: '05',
      title: 'Coronation & Final Hand-Off',
      subtitle: 'Day 42 // Presentation',
      duration: '30 Minutes Final Reveal',
      description:
        'Milanese buttonholes hand-sewn with silk gimp, personalized monogram embroidered inside the breast, and final hand-pressing on cedar boards. Delivered in a luxury garment valise with lifetime care.',
      metrics: [
        'Hand-sewn silk Milanese buttonhole',
        'Personalized gold thread monogram',
        'Hand-pressed on vintage cedar boards',
        'Archived pattern on file for lifetime commissions',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBbQ7-lmOHAWJhtdwDuUEz8sZk1GGiW8A80fy58mtCt3XuE8qI7pPvSKP0pp2dPkFKOsiu2ZNPtcapLc8y5PgGBffeldzP1kA0u2BY1z1lUKMwRMxaOLieQf8n2M-hBpP--LGhr9zGSETDVSPgPvtjusek-prVCPZ49pDqAIlXz3uYnx73J8anXVQ3EcEK8KJKAoZBmt0q69DTCnFgfacSqG3s5EblttSdJyJYw6kycakgF5Xp2Q6A',
    },
  ];

  return (
    <div className="flex flex-col w-full text-[#e5e2e1]">
      {/* Header */}
      <section className="w-full bg-[#131313] px-5 md:px-12 lg:px-16 pt-12 pb-12 border-b border-[#b8975a]/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#b8975a]"></span>
            <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase font-semibold">
              UNHURRIED METROLOGY &amp; PROTOCOL
            </span>
            <span className="w-8 h-[1px] bg-[#b8975a]"></span>
          </div>

          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e5e2e1] font-normal leading-tight max-w-4xl mx-auto mb-4">
            The 4-Fitting Architecture: <span className="italic text-[#e6c180]">Sartorial Cadence</span>
          </h1>

          <p className="font-body-lg text-sm sm:text-base text-[#d1c5b5] max-w-2xl mx-auto font-light leading-relaxed">
            Every garment cut under the Dewunmi Luxe hallmark adheres to an exacting procedural
            sequence designed to calibrate weight, proportion, and effortless kinetic motion in the
            Lagos climate.
          </p>
        </div>
      </section>

      {/* Interactive Protocol Timeline */}
      <section className="w-full bg-[#0e0e0e] px-5 md:px-12 lg:px-16 py-16 border-b border-[#b8975a]/20">
        <div className="max-w-7xl mx-auto">
          {/* Stage Tabs Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#b8975a]/30 pb-6 mb-12">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 text-left transition-all border ${
                    isActive
                      ? 'bg-[#1b1b1b] border-[#e6c180] text-[#e6c180]'
                      : 'bg-[#131313]/60 border-[#2a2a2a] text-[#998f81] hover:text-[#e5e2e1] hover:border-[#b8975a]/40'
                  }`}
                >
                  <span className="font-display-hero text-xl block leading-none mb-1">
                    {stage.num}
                  </span>
                  <span className="font-label-caps text-[10px] tracking-wider block uppercase">
                    {stage.title.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Plate */}
            <div className="lg:col-span-6">
              <div className="w-full h-[380px] sm:h-[480px] bg-[#1b1b1b] border border-[#b8975a]/40 overflow-hidden relative">
                <img
                  src={stages[activeStage].image}
                  alt={stages[activeStage].title}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0e0e0e]/90 px-3 py-1 font-label-caps text-xs text-[#e6c180] tracking-widest border border-[#b8975a]/40">
                  <span>STAGE {stages[activeStage].num}</span>
                  <span className="mx-1.5 opacity-50">/</span>
                  <span>{stages[activeStage].subtitle}</span>
                </div>
              </div>
            </div>

            {/* Stage Narrative & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.22em] uppercase block mb-1">
                  STAGE {stages[activeStage].num} ARCHIVAL RECORD
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#e5e2e1] font-normal">
                  {stages[activeStage].title}
                </h2>
                <div className="flex items-center gap-3 mt-2 text-xs font-label-meta text-[#998f81]">
                  <span>{stages[activeStage].subtitle}</span>
                  <span>•</span>
                  <span className="text-[#e6c180]">{stages[activeStage].duration}</span>
                </div>
              </div>

              <p className="font-body-lg text-sm sm:text-base text-[#d1c5b5] leading-relaxed font-light">
                {stages[activeStage].description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.2em] uppercase block font-semibold">
                  Key Milestones &amp; Craft Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stages[activeStage].metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#1b1b1b] border border-[#b8975a]/20 flex items-start gap-2.5 text-xs text-[#e5e2e1]"
                    >
                      <Check className="w-4 h-4 text-[#e6c180] shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto px-8 py-4 bg-[#b8975a] text-[#131313] hover:bg-[#F5F1EA] transition-colors font-label-caps text-xs tracking-[0.22em] uppercase font-semibold text-center"
                >
                  START STAGE 01 CONSULTATION
                </button>
                {activeStage < stages.length - 1 && (
                  <button
                    onClick={() => setActiveStage(activeStage + 1)}
                    className="w-full sm:w-auto px-6 py-4 border border-[#b8975a]/40 text-[#e5e2e1] hover:bg-[#2a2a2a] font-label-caps text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2"
                  >
                    <span>NEXT STAGE ({stages[activeStage + 1].num})</span>
                    <ArrowRight className="w-4 h-4 text-[#e6c180]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 36-Point Calibration Docket Explainer */}
      <section className="w-full bg-[#131313] px-5 md:px-12 lg:px-16 py-16 border-b border-[#b8975a]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase block mb-1">
              THE 36-POINT ANATOMICAL DOCKET
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#e5e2e1]">
              Engineered for the Human Body
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] mt-2">
              Ready-to-wear sizes assume symmetry. Our Lagos atelier drafts distinct left and right
              shoulder slopes, chest volume drops, and waist pitch tailored exclusively to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/30 space-y-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#2a2a2a] text-[#e6c180]">
                <Scissors className="w-4 h-4" />
              </div>
              <h3 className="font-title-md text-base text-[#e5e2e1] uppercase tracking-wider">
                Postural Pitch &amp; Balance
              </h3>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Calibration for forward neck posture, athletic shoulder drops, and spine arch so
                jackets never pull back or gap at the collar.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/30 space-y-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#2a2a2a] text-[#e6c180]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-title-md text-base text-[#e5e2e1] uppercase tracking-wider">
                70+ Hours of Pure Hand-Stitching
              </h3>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Every seam, floating canvas pad-stitch, and buttonhole is placed by master artisans
                with decades of tailoring lineage.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1b] border border-[#b8975a]/30 space-y-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#2a2a2a] text-[#e6c180]">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-title-md text-base text-[#e5e2e1] uppercase tracking-wider">
                Lifetime Preservation Guarantee
              </h3>
              <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                Complimentary re-pressing, seasonal adjustments, and button replacements in our
                Victoria Island salon for life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
