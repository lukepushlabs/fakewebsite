import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Testimonials from "components/Testimonials";

function TestimonialsSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <Testimonials
          items={[
            {
              avatar:
                "https://images.ctfassets.net/usf1vwtuqyxm/1dmmUJzpRcWaUmMOCu8QwO/7e013145694566076d47fd004fd604c2/AlbusDumbledore_WB_F6_DumbledoreSittingInChair_Promo_080615_Port.jpg",
              name: "Dumbledore",
              quote:
                "I love what Dumbledore's Army has been up to! Will happily donate to support my dear friend Voldemort",
            },
            {
              avatar:
                "https://vignette.wikia.nocookie.net/warner-bros-entertainment/images/c/c1/Severus-snape1.jpg",
              name: "Severus Snape",
              quote: "Happy Birthday Voldemort, glad to contribute!",
            },
            {
              avatar:
                "https://vignette.wikia.nocookie.net/harrypotter/images/b/bc/OOTP_promo_front_closeup_Sirius_Black.jpg",
              name: "Sirius Black",
              quote: "A brother loyal to the cause! Happy Birthday.",
            },
          ]}
        ></Testimonials>
      </div>
    </Section>
  );
}

export default TestimonialsSection;
