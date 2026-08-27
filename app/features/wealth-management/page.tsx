import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidFeatureGrid from "@/components/FluidFeatureGrid";
import FluidPageBackground from "@/components/FluidPageBackground";
import WealthFluidHero from "@/components/WealthFluidHero";

export const metadata: Metadata = {
  title: "Wealth Management",
  description:
    "Download Finqalab, open your account, and start investing in PSX stocks and Sukuks — with real-time market data and portfolio tracking built in.",
};

export default function WealthManagementPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground pauseOrbitPastHero />
        <WealthFluidHero />
        <FluidFeatureGrid />
      </main>
      <Footer />
    </>
  );
}
