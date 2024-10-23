import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Intructors from "@/components/Intructors";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollRevealDemo />
      <InfiniteMovingCardsDemo />
      <UpcomingWebinars />
      <Intructors />
    </main>
  );
}
