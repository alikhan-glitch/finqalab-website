import Navbar from "@/components/Navbar";
import HomeInkBackground from "@/components/HomeInkBackground";
import Hero from "@/components/Hero";
import AssetClassesSection from "@/components/AssetClassesSection";
import TwoUpCards from "@/components/TwoUpCards";
import DiversifySection from "@/components/DiversifySection";
import StrategiesSection from "@/components/StrategiesSection";
import TrustGrid from "@/components/TrustGrid";
import AppPreviewBlock from "@/components/AppPreviewBlock";
import FAQSection from "@/components/FAQSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeInkBackground />

      {/* Onest body font sitewide on this page, matching the flow-state
          pages. The three video-backed sections (Hero, DiversifySection,
          ClosingCTA) keep their video layer — only the surface treatment
          above it is shared with the rest of the site. */}
          <main id="main-content" className="relative z-10 flex-1">
        <Hero />

        <TrustGrid />

        <AssetClassesSection />

        <TwoUpCards />

        <DiversifySection />

        <StrategiesSection />

        <AppPreviewBlock />

        <FAQSection />

        <ClosingCTA />
      </main>

      <Footer />
    </>
  );
}
