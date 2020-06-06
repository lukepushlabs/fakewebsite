import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Newsletter from "components/Newsletter";
import "components/NewsletterSection.scss";

function NewsletterSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container has-text-centered">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={false}
        ></SectionHeader>
        <div className="NewsletterSection__form-container">
          <Newsletter
            parentColor={props.color}
            buttonText={props.buttonText}
            inputPlaceholder={props.inputPlaceholder}
            subscribedMessage={props.subscribedMessage}
            size="medium"
          ></Newsletter>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;
