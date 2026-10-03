'use client';

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Check, Phone } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    notes: '',
  });

  const [folioNumber, setFolioNumber] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFolio = `DLS-LGS-2026-${Math.floor(100 + Math.random() * 900)}`;
    setFolioNumber(newFolio);
  };

  const dispatchToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dewunmi Luxe Atelier,\n\nI have registered Bespoke Inscription ${folioNumber || 'FOLIO-DIRECT'}:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone/WhatsApp: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Garment Requested: ${formData.category || 'Made-to-Measure Piece'}\n` +
      `• Notes: ${formData.notes || 'None'}\n\nPlease confirm availability for a private measurement sitting at Victoria Island.`
    );
    window.open(`https://wa.me/2349151576092?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full text-[#e5e2e1]">
      {/* Subtle Architectural Atelier Watermark & Grid Background */}
      <div className="relative w-full overflow-hidden">
        {/* Ambient Sartorial Draft Lines (SVG) */}
        <svg
          aria-hidden="true"
          className="absolute -top-12 right-0 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] text-[#b8975a]/5 pointer-events-none stroke-current"
          fill="none"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="160" strokeDasharray="3 6" strokeWidth="0.75"></circle>
          <path d="M40 200 H360" strokeWidth="0.75"></path>
          <path d="M200 40 V360" strokeWidth="0.75"></path>
          <path d="M80 80 L320 320" strokeDasharray="4 4" strokeWidth="0.5"></path>
          {/* Stylized Atelier Tailoring Form Geometry */}
          <path
            d="M160 120 C180 110 220 110 240 120 C240 170 215 210 215 270 L185 270 C185 210 160 170 160 120 Z"
            strokeWidth="0.75"
          ></path>
        </svg>

        {/* SECTION 1: Editorial Header */}
        <section className="w-full px-5 md:px-12 lg:px-16 pt-12 pb-8">
          <div className="max-w-7xl mx-auto">
            {/* Eyebrow & Archival Classification */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#b8975a] inline-block"></span>
                <span className="font-label-caps text-xs text-[#e6c180] uppercase tracking-[0.24em]">
                  Atelier Sittings &amp; Inquiries // Lagos Waterfront
                </span>
              </div>
              <span className="font-label-meta text-xs text-[#c9c6c0]/60 tracking-[0.16em]">
                REF. VOL. XXIV — ARCHIVE N° 14
              </span>
            </div>

            {/* Grand Serif Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mt-2">
              <div className="lg:col-span-7">
                <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] tracking-tight leading-[1.08]">
                  Begin Your Made-to-Measure Piece in{' '}
                  <span className="italic font-normal text-[#e6c180]">Lagos</span>
                </h1>
              </div>
              <div className="lg:col-span-5 lg:pl-6">
                <p className="font-headline-sm text-base sm:text-xl text-[#e6c180]/90 italic leading-relaxed font-normal">
                  “Every commission begins with a warm conversation. Book an appointment at our
                  Victoria Island studio or send us a message directly on WhatsApp.”
                </p>
              </div>
            </div>

            {/* Micro Atelier Status Bar */}
            <div className="mt-8 pt-4 border-t border-[#b8975a]/20 flex flex-wrap items-center gap-y-2 gap-x-6 font-label-meta text-xs text-[#d1c5b5]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-[#b8975a]"></span>
                <span className="tracking-widest uppercase">
                  Atelier Status: Open for Made-to-Measure Sittings
                </span>
              </div>
              <div className="hidden md:inline-block text-[#4d463a]">•</div>
              <div className="tracking-widest uppercase">
                Victoria Island, Lagos · Strictly By Appointment
              </div>
              <div className="hidden md:inline-block text-[#4d463a]">•</div>
              <div className="tracking-widest uppercase text-[#e6c180]">Tuesday – Saturday</div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Bespoke Workspace (Split Two-Column Grid) */}
        <section className="w-full px-5 md:px-12 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: Minimal Bespoke Consultation Form */}
            <div className="lg:col-span-7 bg-[#1b1b1b]/80 backdrop-blur-sm p-6 sm:p-10 border border-[#b8975a]/40 relative">
              {/* Geometric Atelier Index Pin */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#2a2a2a] text-[#e6c180] font-label-caps text-[10px] tracking-[0.2em] border-l border-b border-[#b8975a]/30">
                FOLIO // BESPOKE REQ-01
              </div>

              <div className="mb-8 pr-12">
                <h2 className="font-headline-md text-2xl text-[#e5e2e1]">
                  Let&apos;s Make Something for You
                </h2>
                <p className="font-body-md text-sm text-[#d1c5b5] mt-1.5">
                  Share your details below and we will get back to you promptly to arrange your
                  private consultation at our Victoria Island studio.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="client-name"
                    className="block font-label-caps text-xs uppercase tracking-[0.2em] text-[#e6c180]"
                  >
                    Full Name *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body-md text-sm pb-2.5 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label
                      htmlFor="client-phone"
                      className="block font-label-caps text-xs uppercase tracking-[0.2em] text-[#e6c180]"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body-md text-sm pb-2.5 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="client-email"
                      className="block font-label-caps text-xs uppercase tracking-[0.2em] text-[#e6c180]"
                    >
                      Email *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body-md text-sm pb-2.5 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="sartorial-category"
                    className="block font-label-caps text-xs uppercase tracking-[0.2em] text-[#e6c180]"
                  >
                    Occasion / What You Want Made *
                  </label>
                  <select
                    id="sartorial-category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#20201f] text-[#e5e2e1] font-body-md text-sm py-2.5 px-3 border border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a]"
                  >
                    <option value="" disabled>
                      Select an occasion or garment style
                    </option>
                    <option value="haute-agbada">Haute Agbada &amp; Traditional Grand Robe</option>
                    <option value="corporate-suiting">Tailored Corporate Suiting &amp; Blazers</option>
                    <option value="wedding-commission">Wedding &amp; Celebratory Attire</option>
                    <option value="two-piece">Casual &amp; Contemporary Structured Two-Piece</option>
                    <option value="other">Other Custom Made-to-Measure Piece</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="client-vision"
                    className="block font-label-caps text-xs uppercase tracking-[0.2em] text-[#e6c180]"
                  >
                    Notes / Message
                  </label>
                  <textarea
                    id="client-vision"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your preferred fabric, timing, or any specific details for your appointment..."
                    className="w-full bg-transparent text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body-md text-sm pb-2 border-0 border-b border-[#b8975a]/40 focus:outline-none focus:border-[#b8975a] resize-none"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#b8975a] text-[#131313] hover:bg-[#F5F1EA] transition-all duration-300 font-label-caps text-xs tracking-[0.24em] uppercase font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Send Request // Book Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-start gap-2 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#e6c180] shrink-0 mt-0.5" />
                    <p className="font-label-meta text-xs text-[#d1c5b5] leading-relaxed">
                      Strictly confidential. We personally respond to every inquiry within 4 hours.
                    </p>
                  </div>
                </div>
              </form>

              {/* Interactive Modal Overlay on Transmit */}
              {folioNumber && (
                <div className="absolute inset-0 bg-[#0e0e0e]/98 backdrop-blur-md z-20 p-6 sm:p-10 flex flex-col justify-between items-start animate-in fade-in duration-300">
                  <div className="w-full flex justify-between items-center border-b border-[#b8975a]/30 pb-3">
                    <span className="font-label-caps text-xs text-[#e6c180] tracking-[0.25em]">
                      TRANSMISSION LOGGED
                    </span>
                    <button
                      onClick={() => setFolioNumber(null)}
                      className="text-[#e5e2e1] hover:text-[#e6c180] transition-colors"
                      type="button"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4 max-w-md my-auto">
                    <div className="w-10 h-10 bg-[#b8975a] text-[#131313] flex items-center justify-center font-bold">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="font-headline-md text-2xl text-[#e6c180] italic">
                      Folio Recorded in Private Ledger.
                    </div>
                    <p className="font-body-md text-sm text-[#d1c5b5] leading-relaxed">
                      Thank you for entrusting your silhouette to Dewunmi Luxe Stitches. A Master
                      Clothier will contact you directly via your provided WhatsApp line to
                      coordinate swatches and sitting schedules.
                    </p>
                    <div className="p-3 bg-[#20201f] text-[#e5e2e1] font-label-meta text-xs tracking-widest uppercase font-mono border-l-2 border-[#b8975a]">
                      Direct Dispatch ID: {folioNumber}
                    </div>
                  </div>

                  <div className="w-full space-y-3 pt-4">
                    <button
                      onClick={dispatchToWhatsApp}
                      className="w-full py-3.5 bg-[#25D366] text-white hover:bg-[#1ebd5a] font-label-caps text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
                      type="button"
                    >
                      <Phone className="w-4 h-4" />
                      <span>DISPATCH VIA WHATSAPP CONCIERGE</span>
                    </button>
                    <button
                      onClick={() => setFolioNumber(null)}
                      className="w-full py-3 bg-[#2a2a2a] text-[#e5e2e1] border border-[#b8975a]/30 font-label-caps text-xs uppercase tracking-[0.2em] hover:bg-[#353535]"
                      type="button"
                    >
                      Return to Concierge Desk
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Direct Concierge Block & Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Atelier Concierge Panel */}
              <div className="bg-[#1b1b1b]/60 p-6 sm:p-8 border border-[#b8975a]/30 relative">
                <div className="flex items-baseline justify-between pb-2">
                  <h3 className="font-headline-md text-2xl text-[#e6c180] italic">
                    Direct Atelier Concierge
                  </h3>
                  <span className="font-label-caps text-xs text-[#c9c6c0]/60 tracking-widest uppercase">
                    RAPID DISPATCH
                  </span>
                </div>
                <div className="w-full h-px bg-[#b8975a]/20 my-3"></div>
                <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] mb-4">
                  For immediate fabric consultations, appointment bookings, or tailored questions,
                  reach out directly to our Victoria Island team on WhatsApp:
                </p>

                {/* WhatsApp Direct Channels */}
                <div className="space-y-3">
                  {/* Contact 1 */}
                  <a
                    href="https://wa.me/2349151576092?text=Hello%20Dewunmi%20Luxe%20Atelier,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20commission."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 bg-[#20201f] hover:bg-[#2a2a2a] transition-colors border border-[#b8975a]/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex items-center justify-center bg-[#2a2a2a] group-hover:bg-[#b8975a] transition-colors text-[#e6c180] group-hover:text-[#131313]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-title-md text-sm text-[#e5e2e1] block group-hover:text-[#e6c180] transition-colors">
                            +234 915 157 6092
                          </span>
                          <span className="font-label-meta text-xs text-[#d1c5b5] block">
                            Primary Atelier Concierge &amp; Fabric Inquiries
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#e6c180] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  {/* Contact 2 */}
                  <a
                    href="https://wa.me/2349135353627?text=Hello%20Dewunmi%20Luxe,%20I%20wish%20to%20schedule%20a%20private%20appointment%20with%20the%20Master%20Cutter."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 bg-[#20201f] hover:bg-[#2a2a2a] transition-colors border border-[#b8975a]/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex items-center justify-center bg-[#2a2a2a] group-hover:bg-[#b8975a] transition-colors text-[#e6c180] group-hover:text-[#131313]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-title-md text-sm text-[#e5e2e1] block group-hover:text-[#e6c180] transition-colors">
                            +234 913 535 3627
                          </span>
                          <span className="font-label-meta text-xs text-[#d1c5b5] block">
                            Master Cutter Private Appointments
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#e6c180] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>

                {/* Instagram Digital Salon */}
                <div className="mt-4 pt-3 border-t border-[#2a2a2a]">
                  <a
                    href="https://instagram.com/dewunmiluxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 hover:bg-[#20201f] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 flex items-center justify-center bg-[#2a2a2a] text-[#e6c180]">
                        <span className="text-xs font-mono">IG</span>
                      </div>
                      <div>
                        <span className="font-label-caps text-xs text-[#e5e2e1] tracking-[0.25em] block group-hover:text-[#e6c180] transition-colors">
                          @DEWUNMILUXE
                        </span>
                        <span className="font-label-meta text-[11px] text-[#998f81]">
                          Digital Salon &amp; Visual Diary of Lagos Sartorialism
                        </span>
                      </div>
                    </div>
                    <span className="font-label-meta text-xs text-[#e6c180] tracking-widest uppercase">
                      Follow
                    </span>
                  </a>
                </div>
              </div>

              {/* Inset Archival Photograph Accent (Plate 07) */}
              <div className="bg-[#1b1b1b] p-3 border border-[#b8975a]/30">
                <div className="relative w-full aspect-square overflow-hidden bg-[#131313]">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VbeGiOIxyjFEMOj3seOiX6o_73GH5fkyviDwPvHRcadzKAcBSOi93aJYT-KMO3au49lX9wgjL9z0gArDJJreqFF2Ox-wOyMDeCc08Gi2IAe0eVO1m675lGoFv3fMvkcj-1uqew-nZSjubyoNceNla6ZgE7m1T06uC0lOP8NxSGzbr4Stqx7wwVoWGOt1aFNifl-ZBl5fzPa2pjbhFnqJgWujeNe2mD7ub8PYiDaeqD-7--3eOJr66S"
                    alt="Macro extreme close-up of intricate hand-stitching on fine tailoring floating canvas lapel with gold silk thread"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="font-label-caps text-[10px] text-[#e5e2e1] tracking-[0.2em] bg-[#0e0e0e]/80 px-2 py-1">
                      ATELIER PLATE 07
                    </span>
                    <span className="font-label-meta text-[10px] text-[#e6c180] bg-[#0e0e0e]/80 px-2 py-1">
                      VICTORIA ISLAND
                    </span>
                  </div>
                </div>
                <div className="pt-2 px-1 pb-1">
                  <p className="font-label-meta text-xs text-[#c9c6c0]/80 italic">
                    The Private Cutting &amp; Consultation Room, Victoria Island. Waxed silk
                    pick-stitching along an architectural lapel canvas.
                  </p>
                </div>
              </div>

              {/* Atelier Coordinates & Sitting Protocol */}
              <div className="space-y-4 p-5 bg-[#1b1b1b]/50 border border-[#b8975a]/20">
                <div>
                  <span className="font-label-caps text-xs text-[#e6c180] uppercase tracking-[0.25em] block mb-1">
                    Atelier Studio
                  </span>
                  <p className="font-title-md text-base text-[#e5e2e1]">
                    Plot 14, Victoria Island Waterfront
                  </p>
                  <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5]">
                    Lagos, Nigeria · Private Salon Entrance (West Gate)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#2a2a2a]">
                  <div>
                    <span className="font-label-caps text-[10px] text-[#e6c180] tracking-widest uppercase block mb-1">
                      Studio Hours
                    </span>
                    <p className="font-body-md text-xs text-[#d1c5b5]">
                      Tuesday – Saturday
                      <br />
                      <strong className="text-[#e5e2e1] font-medium">10:00 — 19:00 WAT</strong>
                      <br />
                      <span className="text-[11px] text-[#b8975a]/80 tracking-wider">
                        Strictly by Confirmed Appointment
                      </span>
                    </p>
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] text-[#e6c180] tracking-widest uppercase block mb-1">
                      Consultation Mode
                    </span>
                    <p className="font-body-md text-xs text-[#d1c5b5]">
                      In-Person VI Studio Fitting
                      <br />
                      Private Residence Visit
                      <br />
                      <span className="text-[11px] text-[#c9c6c0]/70 tracking-wider">
                        Lagos Waterfront
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The 4-Fitting Bespoke Protocol Overview */}
        <section className="w-full px-5 md:px-12 lg:px-16 py-16 bg-[#0e0e0e]/80 border-t border-[#b8975a]/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="font-label-caps text-xs text-[#e6c180] uppercase tracking-[0.22em] block mb-1">
                  Methodology of Precision
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#e5e2e1]">
                  The 4-Fitting Architecture
                </h2>
              </div>
              <p className="font-body-md text-xs sm:text-sm text-[#d1c5b5] max-w-md mt-2 sm:mt-0">
                Every garment created under the Dewunmi Luxe hallmark adheres to an unhurried
                sartorial cadence honoring anatomical posture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="p-5 bg-[#1b1b1b] border border-[#b8975a]/20 relative flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-display-hero text-3xl text-[#e6c180] font-normal leading-none">
                      01
                    </span>
                    <span className="font-label-meta text-[10px] text-[#e6c180]/70 tracking-widest uppercase">
                      INITIAL DIALOGUE
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base text-[#e5e2e1] mb-1">
                    The Anatomical Ledger
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                    Over 34 distinct postural measures recorded. Selection from handwoven Nigerian
                    Aso-Oke, noble wools, and fine silks.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between font-label-meta text-[11px] text-[#c9c6c0]/70">
                  <span>Duration: 60 Mins</span>
                  <span>Victoria Island</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 bg-[#1b1b1b] border border-[#b8975a]/20 relative flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-display-hero text-3xl text-[#e6c180] font-normal leading-none">
                      02
                    </span>
                    <span className="font-label-meta text-[10px] text-[#e6c180]/70 tracking-widest uppercase">
                      TOILE PROTOCOL
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base text-[#e5e2e1] mb-1">
                    The Calico Skeleton
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                    A draft garment in raw cotton calico or basted horsehair canvas is sculpted
                    directly onto your stance to adjust slope and balance.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between font-label-meta text-[11px] text-[#c9c6c0]/70">
                  <span>Day 14 Post-Brief</span>
                  <span>Pattern Locked</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 bg-[#1b1b1b] border border-[#b8975a]/20 relative flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-display-hero text-3xl text-[#e6c180] font-normal leading-none">
                      03
                    </span>
                    <span className="font-label-meta text-[10px] text-[#e6c180]/70 tracking-widest uppercase">
                      FORWARD BASTE
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base text-[#e5e2e1] mb-1">
                    The Soul of the Cloth
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                    The chosen noble textile is assembled with floating canvas, hand-set shoulder
                    roping, and loose white basting thread.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between font-label-meta text-[11px] text-[#c9c6c0]/70">
                  <span>Day 28 Post-Brief</span>
                  <span>Sleeve Pitch Refined</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 bg-[#1b1b1b] border border-[#b8975a]/20 relative flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-display-hero text-3xl text-[#e6c180] font-normal leading-none">
                      04
                    </span>
                    <span className="font-label-meta text-[10px] text-[#e6c180]/70 tracking-widest uppercase">
                      CORONATION
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base text-[#e5e2e1] mb-1">
                    The Final Hand-Off
                  </h3>
                  <p className="font-body-md text-xs text-[#d1c5b5] leading-relaxed">
                    Milanese buttonholes hand-sewn with silk gimp, horn or engraved gold buttons
                    fastened. Presented in hand-crafted cedar valises.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between font-label-meta text-[11px] text-[#c9c6c0]/70">
                  <span>Day 42 Delivery</span>
                  <span>Archived for Life</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Tailoring Atelier Micro-Ledger & Credentials Banner */}
        <section className="w-full px-5 md:px-12 lg:px-16 py-8 border-t border-[#b8975a]/20 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] border border-[#b8975a]/30">
                <svg
                  aria-label="Dewunmi Luxe Monogram Mark"
                  className="w-7 h-7 text-[#e6c180]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M16 6 C16 4 18 4 18 5.5 C18 7.5 16 8.5 16 10 L6 16 L26 16 Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path d="M11 19 V24" strokeLinecap="round" strokeWidth="1.5" />
                  <path
                    d="M11 19 C11 19 13.5 19 13.5 21.5 C13.5 24 11 24 11 24"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 19 V24 H22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <div className="font-label-caps text-xs text-[#e5e2e1] tracking-[0.24em] uppercase">
                  DEWUNMI LUXE STITCHES · VICTORIA ISLAND, LAGOS
                </div>
                <div className="font-headline-sm text-sm sm:text-base text-[#e6c180] italic font-normal">
                  “Where art meets your fabrics.”
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 font-label-meta text-xs text-[#998f81] tracking-[0.16em]">
              <span>LAGOS, NIGERIA // TUE — SAT, 10:00 — 19:00 WAT</span>
              <span className="text-[#e6c180] hidden sm:inline">•</span>
              <span>© 2026 DEWUNMI LUXE STITCHES. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
