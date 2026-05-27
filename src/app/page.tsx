import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/Hero";
import PolyrepoSection from "@/components/sections/Polyrepo";
import UndersatingSection from "@/components/sections/Understanding";
import WhatSection from "@/components/sections/What";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <UndersatingSection />
      <WhatSection />
      <PolyrepoSection />
    </>
  );
}
