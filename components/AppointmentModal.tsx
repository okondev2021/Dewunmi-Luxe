'use client';

import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGarment?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultGarment,
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: defaultGarment || 'haute-agbada',
    consultationMode: 'salon-vi',
    preferredDate: '',
    notes: '',
  });

  const [submittedFolio, setSubmittedFolio] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomFolioId = `DLS-LGS-2026-${Math.floor(100 + Math.random() * 900)}`;
    setSubmittedFolio(randomFolioId);
  };

  const garmentNames: Record<string, string> = {
    'haute-agbada': 'Haute Agbada & Sovereign Grand Robe',
    'corporate-suiting': 'Tailored Corporate Suiting & Power Blazer',
    'wedding-commission': 'Wedding & Ceremonial Attire',
    'two-piece': 'Sculptural Casual & Two-Piece Set',
    'other': 'Custom Made-to-Measure Piece',
  };

  const modeNames: Record<string, string> = {
    'salon-vi': 'Victoria Island Waterfront Salon (In-Person Sitting)',
    'residence': 'Private Residence / Hotel Suite Visit (Lagos)',
    'virtual': 'Virtual Anatomical Consultation & Swatch Courier',
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dewunmi Luxe Atelier,\n\nI have logged private appointment request ${submittedFolio}:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Garment: ${garmentNames[formData.category] || formData.category}\n` +
      `• Mode: ${modeNames[formData.consultationMode] || formData.consultationMode}\n` +
      `• Preferred Date: ${formData.preferredDate || 'Earliest Available'}\n` +
      `• Notes: ${formData.notes || 'None'}\n\nI would love to coordinate sitting schedules with the Master Cutter.`
    );
    window.open(`https://wa.me/2349151576092?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1b1b1b] border border-[#b8975a] p-6 sm:p-10 text-[#e5e2e1] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#d1c5b5] hover:text-[#e6c180] transition-colors p-1"
          aria-label="Close appointment modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!submittedFolio ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#b8975a]"></span>
                <span className="font-label-caps text-xs text-[#b8975a] tracking-[0.24em] uppercase">
                  Private Salon Consultation // Victoria Island
                </span>
              </div>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-[#e5e2e1] font-normal">
                Request a Bespoke Sitting
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] mt-1.5 leading-relaxed">
                Experience the unhurried craft of Dewunmi Luxe Stitches. We take 34+ anatomical
                measures, review raw artisanal swatches, and draft your unique paper pattern.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Chief Babatunde Adeleke / Adanna Okonjo"
                  className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/50 font-body-md text-sm pb-2.5 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/50 font-body-md text-sm pb-2.5 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@domain.com"
                    className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/50 font-body-md text-sm pb-2.5 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                    Garment Commission *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#20201f] text-[#e5e2e1] font-body-md text-sm py-2 px-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a]"
                  >
                    <option value="haute-agbada">Haute Agbada & Sovereign Grand Robe</option>
                    <option value="corporate-suiting">Tailored Corporate Suiting & Power Blazer</option>
                    <option value="wedding-commission">Wedding & Ceremonial Attire</option>
                    <option value="two-piece">Sculptural Casual & Two-Piece Set</option>
                    <option value="other">Other Custom Made-to-Measure Piece</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                    Consultation Location *
                  </label>
                  <select
                    value={formData.consultationMode}
                    onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                    className="w-full bg-[#20201f] text-[#e5e2e1] font-body-md text-sm py-2 px-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a]"
                  >
                    <option value="salon-vi">Victoria Island Waterfront Salon</option>
                    <option value="residence">Private Residence Visit (Lagos)</option>
                    <option value="virtual">Virtual Consultation & Swatch Box</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                  Preferred Fitting Date & Timing
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#20201f] text-[#e5e2e1] font-body-md text-sm py-2 px-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a]"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-label-caps text-[11px] uppercase tracking-[0.2em] text-[#b8975a]">
                  Atelier Notes / Fabric Intentions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on your timeline, preferred Aso-Oke / wool fabrics, or specific silhouettes..."
                  className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/50 font-body-md text-sm pb-2 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#b8975a] text-[#131313] hover:bg-[#F5F1EA] transition-colors font-label-caps text-xs tracking-[0.24em] uppercase font-semibold flex items-center justify-center gap-2"
                >
                  <span>CONFIRM SITTING // LOG FOLIO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[#998f81] text-xs font-label-meta">
                <ShieldCheck className="w-4 h-4 text-[#b8975a]" />
                <span>Strictly confidential. Master Clothiers respond within 4 hours.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-4 space-y-6 animate-in fade-in duration-300">
            <div className="p-4 bg-[#2a2a2a] border-l-2 border-[#b8975a] flex items-start gap-3">
              <div className="w-7 h-7 bg-[#b8975a] text-[#131313] flex items-center justify-center font-bold">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <span className="font-label-caps text-[11px] text-[#b8975a] uppercase tracking-widest block">
                  TRANSMISSION RECORDED IN ATELIER LEDGER
                </span>
                <span className="font-title-md text-sm text-[#e5e2e1] font-mono">
                  FOLIO REFERENCE: {submittedFolio}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-md text-2xl text-[#e6c180] italic">
                Thank You, {formData.name}
              </h3>
              <p className="font-body-md text-sm text-[#d1c5b5] leading-relaxed">
                Your bespoke request for{' '}
                <strong className="text-[#e5e2e1]">
                  {garmentNames[formData.category] || formData.category}
                </strong>{' '}
                has been registered in our Victoria Island private salon docket. A Master Clothier
                will review your specifications and contact your line directly.
              </p>
            </div>

            <div className="p-4 bg-[#20201f] border border-[#b8975a]/30 space-y-2 text-xs font-label-meta">
              <div className="flex justify-between border-b border-[#2a2a2a] pb-1.5">
                <span className="text-[#998f81]">LOCATION:</span>
                <span className="text-[#e5e2e1]">{modeNames[formData.consultationMode]}</span>
              </div>
              <div className="flex justify-between border-b border-[#2a2a2a] pb-1.5">
                <span className="text-[#998f81]">CONTACT PHONE:</span>
                <span className="text-[#e5e2e1]">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#998f81]">PREPARATION:</span>
                <span className="text-[#e6c180]">Raw Swatches & Measurements Ready</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={sendWhatsApp}
                className="w-full py-3.5 bg-[#25D366] text-white hover:bg-[#1ebd5a] transition-colors font-label-caps text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>DISPATCH FOLIO TO WHATSAPP CONCIERGE</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedFolio(null);
                  onClose();
                }}
                className="w-full py-3 border border-[#b8975a] text-[#e5e2e1] hover:bg-[#2a2a2a] font-label-caps text-xs tracking-[0.2em] uppercase transition-colors"
              >
                RETURN TO SALON
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
