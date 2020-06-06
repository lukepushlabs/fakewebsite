import React from "react";
import Section from "components/Section";
import Link from "next/link";
import "components/Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link href="/">
              <a className="brand">
                <div className="brand-icon">
                  <img
                    className="FooterComponent__logo"
                    src={props.logo}
                    alt="Logo"
                  ></img>
                </div>
              </a>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copywrite">{props.copyright}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
