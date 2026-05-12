import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { WhyKeystone } from "@/components/sections/WhyKeystone";
import { Pricing } from "@/components/sections/Pricing";
import { Outcomes } from "@/components/sections/Outcomes";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Services />
        <WhyKeystone />
        <Pricing />
        <Outcomes />
        <BookingCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
