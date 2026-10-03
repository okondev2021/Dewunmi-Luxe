'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import LookbookModal from '@/components/LookbookModal';
import HomeView from '@/components/views/HomeView';
import CollectionsView from '@/components/views/CollectionsView';
import CraftStoryView from '@/components/views/CraftStoryView';
import ProcessView from '@/components/views/ProcessView';
import ContactView from '@/components/views/ContactView';
import BespokeAtelierView from '@/components/views/BespokeAtelierView';
import { LookbookPlate } from '@/lib/atelier-data';

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState<boolean>(false);
  const [selectedPlate, setSelectedPlate] = useState<LookbookPlate | null>(null);
  const [commissionGarmentDefault, setCommissionGarmentDefault] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (garmentName?: string) => {
    setCommissionGarmentDefault(garmentName);
    setIsAppointmentModalOpen(true);
  };

  const handleOpenLookbookPlate = (plate: LookbookPlate) => {
    setSelectedPlate(plate);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col selection:bg-[#b8975a] selection:text-[#131313]">
      {/* Luxury Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAppointmentModal={() => handleOpenAppointment()}
      />

      {/* Main View Display */}
      <main className="w-full pt-20 flex-grow">
        {activeTab === 'home' && (
          <HomeView
            onOpenAppointment={handleOpenAppointment}
            onOpenLookbookPlate={handleOpenLookbookPlate}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'collections' && (
          <CollectionsView
            onOpenAppointment={handleOpenAppointment}
            onOpenLookbookPlate={handleOpenLookbookPlate}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'the-craft-and-story' && (
          <CraftStoryView
            onOpenAppointment={() => handleOpenAppointment()}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'the-craft' && (
          <CraftStoryView
            onOpenAppointment={() => handleOpenAppointment()}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'process' && (
          <ProcessView onOpenAppointment={() => handleOpenAppointment()} />
        )}

        {activeTab === 'contact' && <ContactView />}

        {activeTab === 'bespoke-atelier' && (
          <BespokeAtelierView onOpenAppointment={handleOpenAppointment} />
        )}
      </main>

      {/* Luxury Atelier Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAppointmentModal={() => handleOpenAppointment()}
      />

      {/* Global Interactive Bespoke Consultation Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        defaultGarment={commissionGarmentDefault}
      />

      {/* Global High-Resolution Plate Inspector Modal */}
      <LookbookModal
        plate={selectedPlate}
        onClose={() => setSelectedPlate(null)}
        onCommission={(title) => handleOpenAppointment(title)}
      />
    </div>
  );
}
