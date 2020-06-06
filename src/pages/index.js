import React from "react";
import HeroSection from "components/HeroSection";
import TestimonialsSection from "components/TestimonialsSection";
import FeaturesSection from "components/FeaturesSection";
import ClientsSection from "components/ClientsSection";
import NewsletterSection from "components/NewsletterSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="dark"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="We solemnly swear we are up to no good."
        subtitle="Now accepting donations to achieve our goal of world domination and oppression."
        buttonText="Donate"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      ></HeroSection>
      <TestimonialsSection
        color="dark"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Recent Donations"
        subtitle=""
      ></TestimonialsSection>
      <FeaturesSection
        color="dark"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Future Initiatives"
        subtitle="Dumbledore's Army is hard at work on other initiatives, stay on the look out. Keep this website quiet, and don't share it to anyone not in Dumbledore's Army. It is imperative that this is not shared. The media must not know and more importantly, we want to keep it a surprise from Voldemort!"
      ></FeaturesSection>
      <ClientsSection
        color="dark"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Companies we've worked with"
        subtitle=""
      ></ClientsSection>
      <NewsletterSection
        color="dark"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed 🙌"
      ></NewsletterSection>
    </>
  );
}

export default IndexPage;
