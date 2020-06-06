import React from "react";
import ContactSection from "components/ContactSection";

function ContactPage(props) {
  return (
    <ContactSection
      color="dark"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Contact Us"
      subtitle=""
      buttonText="Send message"
      showNameField={true}
    ></ContactSection>
  );
}

export default ContactPage;
