import React, {useState, useEffect} from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import SectionButton from "components/SectionButton";

function HeroSection(props) {
  const [donationState, setDonationState] = useState({
    amount: null,
    percent: null
  })

  function getDonations(){
    const startTime = 1591312938 * 1000; // The time we started donations, let's slowly increase them over a week.
    const endTime = 1592265600 * 1000; // Javascript times are in miliseconds
    const totalTime = endTime - startTime;
    const currentTime = Date.now();
    const dt = currentTime - startTime;
    const totalDonationAmount = 30000;
    let percent = dt / totalTime;
    return {
      percent,
      amount: percent * totalDonationAmount
    }
  }

  useEffect(()=>{
    setDonationState(getDonations());
  }, [])

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
        <div style={{
          maxWidth: '800px',
          margin: '0px auto',
          paddingTop: '30px',
          paddingBottom: '30px'
        }}>
          <h2>${Math.floor(donationState.amount)} raised so far!</h2>
          <progress className="progress is-primary" style={{height:'30px'}} value={donationState.percent * 100} max="100"></progress>
        </div>
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
