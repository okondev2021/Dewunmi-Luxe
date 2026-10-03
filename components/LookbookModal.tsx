'use client';

import React from 'react';
import { X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { LookbookPlate } from '@/lib/atelier-data';

interface LookbookModalProps {
  plate: LookbookPlate | null;
  onClose: () => void;
  onCommission: (garmentName: string) => void;
}

export default function LookbookModal({
  plate,
  onClose,
  onCommission,
}: LookbookModalProps) {
  if (!plate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#1b1b1b] border border-[#b8975a] p-6 sm:p-8 text-[#e5e2e1] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#d1c5b5] hover:text-[#e6c180] transition-colors p-1 z-10"
          aria-label="Close plate detail"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Column */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            <div className="w-full bg-[#131313] border border-[#b8975a]/40 overflow-hidden relative group">
              <img
                src={plate.imageUrl}
                alt={plate.title}
                className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-3 left-3 bg-[#0e0e0e]/90 px-3 py-1 text-[#e6c180] font-label-caps text-[10px] tracking-widest border border-[#b8975a]/40">
                <span>{plate.plateNumber}</span>
                <span className="mx-1.5 opacity-50">/</span>
                <span>{plate.tag}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-label-meta text-[#998f81]">
              <span>{plate.calibrationNo || 'ATELIER REGISTER'}</span>
              <span>VICTORIA ISLAND, LAGOS</span>
            </div>
          </div>

          {/* Editorial Specs Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#b8975a]"></span>
                <span className="font-label-caps text-xs text-[#b8975a] tracking-[0.24em] uppercase">
                  {plate.categoryLabel}
                </span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#e5e2e1] font-normal leading-tight">
                {plate.title}
              </h2>

              <div className="p-3 bg-[#20201f] border-l-2 border-[#b8975a] text-xs font-label-meta text-[#e6c180] tracking-wider uppercase">
                {plate.fabrication}
              </div>

              <p className="font-body-lg text-sm sm:text-base text-[#d1c5b5] font-light leading-relaxed">
                {plate.description}
              </p>
            </div>

            {/* Structural Metrics */}
            <div className="space-y-3 pt-2">
              <span className="font-label-caps text-xs text-[#b8975a] tracking-[0.2em] uppercase block font-semibold">
                Anatomical Specifications & Needlework
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {plate.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-[#252524] text-xs text-[#e5e2e1]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b8975a] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Commission CTA */}
            <div className="pt-4 border-t border-[#b8975a]/30 space-y-3">
              {plate.priceEstimate && (
                <div className="flex items-baseline justify-between">
                  <span className="font-label-caps text-xs text-[#998f81] uppercase">
                    Bespoke Investment:
                  </span>
                  <span className="font-title-md text-base text-[#e6c180] font-mono">
                    {plate.priceEstimate}
                  </span>
                </div>
              )}

              <button
                onClick={() => {
                  onClose();
                  onCommission(plate.title);
                }}
                className="w-full py-4 bg-[#b8975a] text-[#131313] hover:bg-[#F5F1EA] transition-all font-label-caps text-xs tracking-[0.24em] uppercase font-semibold flex items-center justify-center gap-2"
              >
                <span>COMMISSION THIS SILHOUETTE IN YOUR SIZE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#998f81] font-label-meta">
                Includes 2-3 personal fittings in Victoria Island, custom draft pattern & lifetime maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
