import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import TeamBios from "components/TeamBios";

function TeamBiosSection(props) {
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
        <TeamBios
          people={[
            {
              avatar: "",
              name: "James Potter",
              role: "Founder",
              bio:
                "James Potter is not dead. He is alive and well and the founder of our movement!",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Lord Voldemort",
              role: "Founder",
              bio: "Don't believe everything you've hard about our Dark Lord.",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Harry Potter",
              role: "Head of Hogwarrts Infiltration",
              bio:
                "The son of James Potter, Harry is leading efforts on our magical education reclamation front.",
            },
          ]}
        ></TeamBios>
      </div>
    </Section>
  );
}

export default TeamBiosSection;
