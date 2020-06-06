import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Features from "components/Features";
import "components/FeaturesSection.scss";

function FeaturesSection(props) {
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
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Crystal Ball Forgery",
                body:
                  "We have an initiative to display our own propoganda in all crystal balls, dirupting the fortune teller industry.",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
              },
              {
                title: "Magic Location Tracking",
                body:
                  "We have been using our magic to keep tabs on every single muggle ",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
              },
              {
                title: "Spirit Summoning",
                body:
                  "We aim to possess 40% of the world's population by early next year.",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
              },
              {
                title: "Media Takeover",
                body:
                  "We are undergoing a total media coup, with the intention to paint us as the 'good guys', our efforts have been extremeley successful so far.",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
              },
            ]}
          ></Features>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
