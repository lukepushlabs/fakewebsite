import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import SectionButton from "components/SectionButton";

function CtaSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container has-text-centered">
        <div className="columns is-vcentered is-centered is-variable is-8 is-multiline">
          <div className="column is-narrow">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={2}
              spaced={false}
            ></SectionHeader>
          </div>
          <div className="column is-narrow">
            <SectionButton
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
