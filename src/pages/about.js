import React from "react";
import HeroSection2 from "components/HeroSection2";
import StatsSection from "components/StatsSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";
import { useRouter } from "next/router";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        color="dark"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Causing Chaos in the Wizarding World"
        subtitle="Contary to what the public thinks - our goal is disruption and violence. We aim to dismantle the world as we know it, cause societal collapse, and bring poverty and famine to all of the world."
      ></HeroSection2>
      <StatsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        items={[
          {
            title: "Murders",
            stat: "3,456",
          },
          {
            title: "Uprisings",
            stat: "123",
          },
          {
            title: "Followers",
            stat: "456k",
          },
          {
            title: "Core Members",
            stat: "789",
          },
        ]}
      ></StatsSection>
      <TeamBiosSection
        color="dark"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      ></TeamBiosSection>
      <CtaSection
        color="primary"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Ready to get started?"
        buttonText="Get Started"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      ></CtaSection>
    </>
  );
}

export default AboutPage;
