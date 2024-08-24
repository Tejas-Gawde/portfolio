"use client";
import CursorFollower from "@/components/CursorFollower";
import HeroSection from "@/components/HeroSection";
import useCursorStore from "@/store/store";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <HeroSection />
    </main>
  );
}
