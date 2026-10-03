'use client';

import React from 'react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenAppointmentModal: () => void;
}

export default function Footer({
  setActiveTab,
  onOpenAppointmentModal,
}: FooterProps) {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#b8975a]/30 text-[#e5e2e1]">
      <div className="w-full px-5 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 border-b border-[#b8975a]/20 pb-16">
          {/* Brand & Studio Address */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-headline-md text-2xl text-[#e6c180] italic">
                Dewunmi Luxe Stitches
              </h3>
              <p className="font-body-md text-sm text-[#d1c5b5] max-w-md leading-relaxed">
                Private salon and bespoke tailoring house based in Victoria Island, Lagos.
                Meticulous architectural silhouettes, ancestral Nigerian hand-craftsmanship,
                and uncompromising textile provenance.
              </p>
              <p className="font-label-caps text-xs text-[#b8975a] tracking-[0.24em] uppercase">
                Private Commissions • West African Haute Couture
              </p>
            </div>

            <div className="pt-2">
              <span className="font-label-caps text-[11px] text-[#b8975a] tracking-[0.22em] block mb-1 uppercase">
                Private Atelier Salon
              </span>
              <p className="font-body-md text-sm text-[#d1c5b5]">
                Plot 14, Victoria Island Waterfront, Lagos, Nigeria
                <br />
                <span className="text-xs text-[#998f81]">By Confirmed Appointment Only</span>
              </p>
              <p className="font-label-meta text-xs text-[#b8975a]/90 tracking-widest mt-1 uppercase">
                Tuesday — Saturday · 10:00 — 19:00 WAT
              </p>
            </div>
          </div>

          {/* Atelier Navigation */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="font-label-caps text-xs text-[#b8975a] tracking-[0.22em] uppercase font-semibold">
              Atelier Navigation
            </span>
            <ul className="space-y-2.5 font-body-md text-sm">
              <li className="border-b border-[#2a2a2a] pb-2">
                <button
                  onClick={() => handleNav('collections')}
                  className="text-[#d1c5b5] hover:text-[#e6c180] transition-colors text-left w-full"
                >
                  Sartorial Collections & Lookbook
                </button>
              </li>
              <li className="border-b border-[#2a2a2a] pb-2">
                <button
                  onClick={() => handleNav('bespoke-atelier')}
                  className="text-[#d1c5b5] hover:text-[#e6c180] transition-colors text-left w-full"
                >
                  The Bespoke Salon & Swatches
                </button>
              </li>
              <li className="border-b border-[#2a2a2a] pb-2">
                <button
                  onClick={() => handleNav('the-craft-and-story')}
                  className="text-[#d1c5b5] hover:text-[#e6c180] transition-colors text-left w-full"
                >
                  Heritage, Founder & Needlework
                </button>
              </li>
              <li className="border-b border-[#2a2a2a] pb-2">
                <button
                  onClick={() => handleNav('process')}
                  className="text-[#d1c5b5] hover:text-[#e6c180] transition-colors text-left w-full"
                >
                  The 4-Fitting Protocol
                </button>
              </li>
              <li className="border-b border-[#2a2a2a] pb-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#d1c5b5] hover:text-[#e6c180] transition-colors text-left w-full"
                >
                  Concierge Inquiries & Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Private Commissions & Protocol */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-label-caps text-xs text-[#b8975a] tracking-[0.22em] uppercase font-semibold">
                Private Commissions & Sittings
              </span>
              <p className="font-body-md text-sm text-[#d1c5b5] leading-relaxed">
                Sittings are curated strictly on a seasonal cadence. Inquire to request a private
                measurement folio, review raw textile swatches, or schedule a consultation with
                Master Clothiers.
              </p>
              <div className="flex flex-col space-y-1 font-label-meta text-xs text-[#998f81] uppercase tracking-wider">
                <span>Direct Line: +234 915 157 6092</span>
                <span>WhatsApp Active 24/7 // Inquiries within 4 hrs</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#b8975a] text-[#131313] hover:bg-[#F5F1EA] transition-all font-label-caps text-xs tracking-[0.22em] uppercase font-medium text-center"
              >
                REQUEST FITTING SITTING
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Micro-Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-meta text-xs text-[#998f81]">
          <div className="tracking-wider text-center md:text-left">
            © 2026 DEWUNMI LUXE STITCHES LTD. LAGOS, NIGERIA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 uppercase tracking-widest text-[11px]">
            <span className="hover:text-[#e6c180] transition-colors cursor-pointer">
              Terms of Commission
            </span>
            <span className="hover:text-[#e6c180] transition-colors cursor-pointer">
              Garment Preservation
            </span>
            <span className="hover:text-[#e6c180] transition-colors cursor-pointer">
              Legal Notice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
