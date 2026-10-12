import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StrategicProcess } from '@/components/home/StrategicProcess';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { DesignDnaBanner } from '@/components/home/DesignDnaBanner';
import { CertsHighlight } from '@/components/home/CertsHighlight';
import { QuickContactCta } from '@/components/home/QuickContactCta';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StrategicProcess />
      <FeaturedWork />
      <DesignDnaBanner />
      <CertsHighlight />
      <QuickContactCta />
    </div>
  );
}
