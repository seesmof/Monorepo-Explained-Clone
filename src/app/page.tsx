import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/Hero";
import PolyrepoSection from "@/components/sections/Polyrepo";
import SyntheticSection from "@/components/sections/Synthetic";
import UndersatingSection from "@/components/sections/Understanding";
import WhatSection from "@/components/sections/What";

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <Header />
      <HeroSection />
      <UndersatingSection />
      <WhatSection />
      <PolyrepoSection />
      <SyntheticSection />
    </div>
  );
}
