import AboutSection from "@/components/NewLanding/AboutSection";
import CorePrinciple from "@/components/NewLanding/CorePrinciple";
import HeroSection from "@/components/NewLanding/HeroSection";
import HowMerit from "@/components/NewLanding/HowMerit";
import KeyCapabilities from "@/components/NewLanding/KeyCapabilities";
import WhyMerit from "@/components/NewLanding/whyMerit";
import HowMeritFixes from "@/components/NewLanding/HowMeritFixes";
import MeritImapct from "@/components/NewLanding/Merit Impact";
import { ComparisonTable } from "@/components/NewLanding/MeritCompares";
import ReadyToSee from "@/components/NewLanding/ReadyToSee";
import FooterLanding from "@/components/NewLanding/FooterLanding";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CorePrinciple />
      <HowMerit />
      <KeyCapabilities />
      <WhyMerit />
      <HowMeritFixes />
      <MeritImapct />
      <ComparisonTable />
      <ReadyToSee />
      <FooterLanding />
    </>
  );
}
