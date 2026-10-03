'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAppointmentModal: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  onOpenAppointmentModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Atelier' },
    { id: 'collections', label: 'Collections' },
    { id: 'bespoke-atelier', label: 'Bespoke Atelier' },
    { id: 'the-craft-and-story', label: 'The Craft & Story' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-[#b8975a]/30 transition-all duration-300">
      <div className="h-20 w-full px-5 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 border border-[#b8975a]/50 flex items-center justify-center p-1 bg-[#1b1b1b] group-hover:border-[#e6c180] transition-colors">
            {/* Dewunmi Stylized Hanger Monogram */}
            <svg
              aria-label="Dewunmi Luxe Monogram"
              className="w-6 h-6 text-[#e6c180]"
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
          <div className="flex flex-col">
            <span className="font-title-md text-sm md:text-[15px] tracking-[0.2em] text-[#e5e2e1] uppercase leading-none font-medium">
              DEWUNMI LUXE STITCHES
            </span>
            <span className="font-label-caps text-[10px] text-[#b8975a] tracking-[0.32em] mt-1 uppercase leading-none">
              Lagos • Haute Couture
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-label-caps text-xs tracking-[0.22em] uppercase transition-all py-1 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-[#e6c180] border-b border-[#e6c180] font-medium'
                    : 'text-[#d1c5b5]/80 hover:text-[#e5e2e1]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA / Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAppointmentModal}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-[#b8975a] text-[#e6c180] hover:bg-[#b8975a] hover:text-[#131313] font-label-caps text-xs tracking-[0.22em] uppercase transition-all duration-300 font-medium"
          >
            PRIVATE APPOINTMENT
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#e5e2e1] hover:text-[#e6c180] p-1.5 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e0e] border-b border-[#b8975a]/30 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left font-label-caps text-sm tracking-[0.2em] uppercase py-2 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#e6c180] border-l-2 border-[#e6c180] pl-3'
                      : 'text-[#d1c5b5] hover:text-[#e5e2e1] pl-1'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#b8975a]">●</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#b8975a]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full py-3 bg-[#b8975a] text-[#131313] font-label-caps text-xs tracking-[0.24em] uppercase text-center font-semibold hover:bg-[#F5F1EA] transition-colors"
            >
              REQUEST PRIVATE SITTING
            </button>
            <div className="mt-3 text-center">
              <span className="font-label-meta text-[11px] text-[#998f81] uppercase tracking-widest">
                Victoria Island Waterfront · Lagos
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
