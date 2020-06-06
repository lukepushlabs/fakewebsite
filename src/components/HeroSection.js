import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import SectionButton from "components/SectionButton";

function HeroSection(props) {
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
          size={1}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <div className="buttons is-centered">
          <SectionButton
            parentColor={props.color}
            size="medium"
            onClick={props.buttonOnClick}
          >
            {props.buttonText}
          </SectionButton>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
