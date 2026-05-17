import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SectionHardware } from "@/components/SectionHardware";
import { SectionPlatform } from "@/components/SectionPlatform";
import { SectionField } from "@/components/SectionField";
import { SectionAvailability } from "@/components/SectionAvailability";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="grid-bg">
        <Hero />
        <SectionHardware />
        <SectionPlatform />
        <SectionField />
        <SectionAvailability />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
