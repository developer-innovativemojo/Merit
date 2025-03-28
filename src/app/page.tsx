import AboutSection from "@/components/NewLanding/AboutSection";
import CorePrinciple from "@/components/NewLanding/CorePrinciple";
import HeroSection from "@/components/NewLanding/HeroSection";
import HowMerit from "@/components/NewLanding/HowMerit";
import KeyCapabilities from "@/components/NewLanding/KeyCapabilities";
import Meritcapabilities from "@/components/merit-capabilities";
import WhyMerit from "@/components/NewLanding/whyMerit";
import HowMeritFixes from "@/components/NewLanding/HowMeritFixes";
import MeritImapct from "@/components/NewLanding/Merit Impact";
import { ComparisonTable } from "@/components/NewLanding/MeritCompares";
import ReadyToSee from "@/components/NewLanding/ReadyToSee";
import FooterLanding from "@/components/NewLanding/FooterLanding";
import PinnedCards from "@/components/background-beams/AnimationCards";
import BackgroundBeamsDemo from "@/components/background-beams";
import ThePain from "@/components/NewLanding/ThePain";
import Internal from "@/components/NewLanding/Internal";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ThePain />
      <HowMeritFixes />
      {/* <HowMerit /> */}
      {/* <BackgroundBeamsDemo /> */}
      {/* <PinnedCards /> */}
      {/* <WhyMerit /> */}
      {/* <MeritImapct /> */}
      <Meritcapabilities />
      {/* <KeyCapabilities /> */}
      <CorePrinciple />
      <Internal />
      <ComparisonTable />
      <ReadyToSee />
      <FooterLanding />
    </>
  );
}
