'use client';

import React, { useState } from 'react';
import { FABRIC_SWATCHES, FabricSwatch } from '@/lib/atelier-data';
import { ArrowRight, Sparkles, Check, Phone, Layers, ShieldCheck } from 'lucide-react';

interface BespokeAtelierViewProps {
  onOpenAppointment: (garmentName?: string) => void;
}

export default function BespokeAtelierView({ onOpenAppointment }: BespokeAtelierViewProps) {
  const [selectedFabric, setSelectedFabric] = useState<FabricSwatch>(FABRIC_SWATCHES[0]);
  const [selectedGarment, setSelectedGarment] = useState<'agbada' | 'suit' | 'vest-trouser' | 'kaftan' | 'iro-buba'>('agbada');
  const [lapelStyle, setLapelStyle] = useState<string>('peak-4in');
  const [shoulderStyle, setShoulderStyle] = useState<string>('con-rollino');
  const [monogram, setMonogram] = useState<string>('D.L.');
  const [liningChoice, setLiningChoice] = useState<string>('cupro-gold');

  const garmentData: Record<
    string,
    { name: string; basePrice: number; hours: number; fittings: number; description: string }
  > = {
    agbada: {
      name: 'Haute Agbada & Buba Grand Sovereign Robe',
      basePrice: 550000,
      hours: 75,
      fittings: 3,
      description:
        'Architectural West African sovereign attire cut with structured shoulders and intricate hand-embroidered breastplate.',
    },
    suit: {
      name: 'Two-Piece Architectural Power Suit',
      basePrice: 520000,
      hours: 70,
      fittings: 3,
      description:
        'Full floating horsehair canvas double or single-breasted suit with Milanese buttonhole and roped shoulders.',
    },
    'vest-trouser': {
      name: 'The Sculptural Trouser & Breasted Vest Set',
      basePrice: 450000,
      hours: 55,
      fittings: 2,
      description:
        'Continuous Hollywood waistband trouser paired with padded canvas double-breasted waistcoat.',
    },
    kaftan: {
      name: 'Artisanal Silk-Linen Kaftan & Trousers',
      basePrice: 380000,
      hours: 45,
      fittings: 2,
      description:
        'Refined Nigerian everyday luxury with subtle collar tambour stitching and clean minimal hemline.',
    },
    'iro-buba': {
      name: 'Sculptural Origami-Folded Iro & Buba',
      basePrice: 510000,
      hours: 65,
      fittings: 3,
      description:
        'Internal corsetry waist boning supporting voluminous metallic brocade folded sleeve flares.',
    },
  };

  const currentGarment = garmentData[selectedGarment];
  const totalPriceFormatted = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(currentGarment.basePrice);

  const sendCustomToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dewunmi Luxe Atelier,\n\nI configured a bespoke commission on the Atelier Studio:\n` +
      `• Garment: ${currentGarment.name}\n` +
      `• Fabric: ${selectedFabric.name} (${selectedFabric.origin})\n` +
      `• Lapel / Silhouette Cut: ${lapelStyle}\n` +
      `• Shoulder Structure: ${shoulderStyle}\n` +
      `• Monogram Initials: ${monogram || 'None'}\n` +
      `• Estimate: ${totalPriceFormatted}\n\nI would love to arrange my Stage 01 Measurement Sitting at Victoria Island.`
    );
    window.open(`https://wa.me/2349151576092?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full text-[#e5e2e1]">
      {/* Editorial Header */}
      <section className="w-full bg-[#131313] px-5 md:px-12 lg:px-16 pt-12 pb-10 border-b border-[#b8975a]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#b8975a]"></span>
            <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em] uppercase">
              THE BESPOKE SALON // INTERACTIVE ATELIER
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] leading-tight mb-2">
                Curate Your Silhouette &amp; Cloth
              </h1>
              <p className="font-headline-sm text-base sm:text-xl italic text-[#e6c180] font-normal">
                Select your garment style, explore generational Nigerian textiles, and configure
                tailored details.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] leading-relaxed">
                Every piece is drafted from individual paper patterns in our Victoria Island studio.
                No factory mass-manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Studio Grid */}
      <section className="w-full bg-[#0e0e0e] px-5 md:px-12 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Silhouette Choice */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#b8975a]/30 pb-2">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.2em] uppercase font-semibold">
                  01 // Select Silhouette Form
                </span>
                <span className="font-label-meta text-xs text-[#998f81]">
                  5 ARCHIVAL CATEGORIES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'agbada', label: 'Haute Agbada', tag: 'Sovereign Grand Robe' },
                  { id: 'suit', label: 'Architectural Suit', tag: 'Double/Single Breasted' },
                  { id: 'vest-trouser', label: 'Trouser & Vest Set', tag: 'Sculptured Waistcoat' },
                  { id: 'iro-buba', label: 'Origami Iro & Buba', tag: 'Femme Couture Brocade' },
                  { id: 'kaftan', label: 'Artisanal Kaftan', tag: 'Minimalist Silk Tunic' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGarment(item.id as any)}
                    className={`p-4 text-left transition-all border ${
                      selectedGarment === item.id
                        ? 'bg-[#1b1b1b] border-[#e6c180] text-[#e6c180]'
                        : 'bg-[#131313] border-[#2a2a2a] text-[#d1c5b5] hover:border-[#b8975a]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-sm text-[#e5e2e1] font-medium block">
                        {item.label}
                      </span>
                      {selectedGarment === item.id && (
                        <Check className="w-4 h-4 text-[#e6c180]" />
                      )}
                    </div>
                    <span className="font-label-meta text-[11px] text-[#998f81] uppercase tracking-wider block mt-1">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric Swatch Explorer */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#b8975a]/30 pb-2">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.2em] uppercase font-semibold">
                  02 // Curate Noble Cloth &amp; Weaving
                </span>
                <span className="font-label-meta text-xs text-[#e6c180] uppercase">
                  {selectedFabric.origin.split(',')[0]}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {FABRIC_SWATCHES.map((swatch) => {
                  const isSelected = selectedFabric.id === swatch.id;
                  return (
                    <button
                      key={swatch.id}
                      onClick={() => setSelectedFabric(swatch)}
                      className={`flex flex-col text-left p-2 border transition-all ${
                        isSelected
                          ? 'border-[#e6c180] bg-[#1b1b1b]'
                          : 'border-[#2a2a2a] bg-[#131313] hover:border-[#b8975a]/40'
                      }`}
                    >
                      <div className="relative w-full aspect-square overflow-hidden bg-[#20201f] mb-2">
                        <img
                          src={swatch.imageUrl}
                          alt={swatch.name}
                          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 border-2 border-[#e6c180] pointer-events-none"></div>
                        )}
                      </div>
                      <span className="font-title-md text-xs text-[#e5e2e1] line-clamp-1">
                        {swatch.name}
                      </span>
                      <span className="font-label-meta text-[10px] text-[#998f81] line-clamp-1 mt-0.5">
                        {swatch.weight.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Swatch Spec Dossier */}
              <div className="p-5 bg-[#1b1b1b] border border-[#b8975a]/30 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h4 className="font-title-md text-base text-[#e6c180]">
                    {selectedFabric.name}
                  </h4>
                  <span className="font-label-meta text-xs text-[#998f81] uppercase">
                    PROVENANCE: {selectedFabric.origin}
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] leading-relaxed">
                  {selectedFabric.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#2a2a2a] text-xs font-label-meta text-[#c9c6c0]">
                  <div>
                    <span className="text-[#998f81] block">COMPOSITION:</span>
                    <span className="text-[#e5e2e1]">{selectedFabric.composition}</span>
                  </div>
                  <div>
                    <span className="text-[#998f81] block">WEIGHT:</span>
                    <span className="text-[#e5e2e1]">{selectedFabric.weight}</span>
                  </div>
                  <div>
                    <span className="text-[#998f81] block">SEASONALITY:</span>
                    <span className="text-[#e6c180]">{selectedFabric.season}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Architectural Tailoring Details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#b8975a]/30 pb-2">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.2em] uppercase font-semibold">
                  03 // Needlework &amp; Lapel Geometry
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-label-caps text-[11px] text-[#e6c180] uppercase">
                    Lapel &amp; Collar Cut
                  </label>
                  <select
                    value={lapelStyle}
                    onChange={(e) => setLapelStyle(e.target.value)}
                    className="w-full bg-[#1b1b1b] text-[#e5e2e1] font-body-md text-sm p-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#e6c180]"
                  >
                    <option value="peak-4in">4-Inch Hand-Shaped Peak Lapel</option>
                    <option value="classic-notch">3.5-Inch Floating Notch Lapel</option>
                    <option value="shawl-silk">Continuous Silk Grosgrain Shawl</option>
                    <option value="mandarin-agbada">Architectural High Mandarin Collar</option>
                    <option value="origami-fold">Origami Epaulette Shoulder Flare</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-label-caps text-[11px] text-[#e6c180] uppercase">
                    Shoulder Architecture
                  </label>
                  <select
                    value={shoulderStyle}
                    onChange={(e) => setShoulderStyle(e.target.value)}
                    className="w-full bg-[#1b1b1b] text-[#e5e2e1] font-body-md text-sm p-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#e6c180]"
                  >
                    <option value="con-rollino">Con Rollino (Roped Florentine Shoulder)</option>
                    <option value="spalla-camicia">Spalla Camicia (Soft Shirred Shirt Shoulder)</option>
                    <option value="structured-padded">Clean Structured Diplomatic Pad</option>
                    <option value="unstructured-drape">Unstructured Native Drape</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="block font-label-caps text-[11px] text-[#e6c180] uppercase">
                    Personalized Monogram (Breast Lining)
                  </label>
                  <input
                    type="text"
                    maxLength={8}
                    value={monogram}
                    onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                    placeholder="e.g. J.O. / ADELEKE"
                    className="w-full bg-[#1b1b1b] text-[#e5e2e1] font-mono text-sm p-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#e6c180]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-label-caps text-[11px] text-[#e6c180] uppercase">
                    Interior Lining Weave
                  </label>
                  <select
                    value={liningChoice}
                    onChange={(e) => setLiningChoice(e.target.value)}
                    className="w-full bg-[#1b1b1b] text-[#e5e2e1] font-body-md text-sm p-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#e6c180]"
                  >
                    <option value="cupro-gold">Bemberg Champagne Gold Cupro (Breathable)</option>
                    <option value="cupro-midnight">Midnight Navy Jacquard Silk</option>
                    <option value="adire-silk-lining">Abeokuta Indigo Silk Accent</option>
                    <option value="unlined-tropical">Unlined Tropical Half-Back (Lagos Heat)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Docket Summary & Commission Dispatch (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="p-6 sm:p-8 bg-[#1b1b1b] border border-[#b8975a] space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#b8975a]/30 pb-3">
                <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.2em] uppercase font-semibold">
                  COMMISSION DOCKET
                </span>
                <span className="font-label-meta text-xs text-[#998f81] font-mono">
                  DLS-SALON-2026
                </span>
              </div>

              {/* Silhouette Header */}
              <div>
                <span className="font-label-caps text-[10px] text-[#b8975a] uppercase tracking-widest block mb-1">
                  CHOSEN FORM
                </span>
                <h3 className="font-headline-sm text-xl text-[#e5e2e1]">
                  {currentGarment.name}
                </h3>
                <p className="font-body-md text-xs text-[#d1c5b5] mt-1">
                  {currentGarment.description}
                </p>
              </div>

              {/* Specification Table */}
              <div className="space-y-2.5 py-3 border-t border-b border-[#2a2a2a] text-xs font-label-meta">
                <div className="flex justify-between">
                  <span className="text-[#998f81]">TEXTILE:</span>
                  <span className="text-[#e5e2e1] text-right font-medium">
                    {selectedFabric.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#998f81]">PROVENANCE:</span>
                  <span className="text-[#e6c180] text-right">
                    {selectedFabric.origin.split(',')[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#998f81]">LAPEL / CUT:</span>
                  <span className="text-[#e5e2e1] text-right capitalize">
                    {lapelStyle.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#998f81]">SHOULDER:</span>
                  <span className="text-[#e5e2e1] text-right capitalize">
                    {shoulderStyle.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#998f81]">MONOGRAM:</span>
                  <span className="text-[#e6c180] font-mono text-right font-bold">
                    {monogram || 'NONE'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#998f81]">HAND-HOURS:</span>
                  <span className="text-[#e5e2e1] text-right">{currentGarment.hours}+ Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#998f81]">FITTING CADENCE:</span>
                  <span className="text-[#e5e2e1] text-right">
                    {currentGarment.fittings} Personal Sittings in VI
                  </span>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="space-y-1">
                <span className="font-label-caps text-[10px] text-[#998f81] uppercase">
                  ESTIMATED BESPOKE INVESTMENT
                </span>
                <div className="font-headline-lg text-2xl sm:text-3xl text-[#e6c180] font-mono font-medium">
                  {totalPriceFormatted}
                </div>
                <p className="text-[11px] text-[#998f81] font-label-meta">
                  Includes raw imported/ancestral yardage, hand canvas padding, and lifetime preservation.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={sendCustomToWhatsApp}
                  className="w-full py-4 bg-[#25D366] text-white hover:bg-[#1ebd5a] transition-all font-label-caps text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>DISPATCH DOCKET TO WHATSAPP</span>
                </button>

                <button
                  onClick={() => onOpenAppointment(currentGarment.name)}
                  className="w-full py-3.5 bg-[#b8975a] text-[#131313] hover:bg-[#F5F1EA] transition-all font-label-caps text-xs uppercase tracking-[0.2em] font-semibold text-center"
                >
                  BOOK VI SALON MEASUREMENT SITTING
                </button>
              </div>

              <div className="flex items-center gap-2 text-[#998f81] text-xs font-label-meta pt-1">
                <ShieldCheck className="w-4 h-4 text-[#e6c180]" />
                <span>Strictly limited to 24 commissions per quarter.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
