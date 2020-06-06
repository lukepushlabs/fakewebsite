import React from "react";
import CenteredColumns from "components/CenteredColumns";
import Avatar from "components/Avatar";
import "components/Testimonials.scss";

function Testimonials(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div className="column" key={index}>
          <figure className="Testimonials__no-classname testimonial">
            <blockquote className="Testimonials__card card">
              "{item.quote}"
            </blockquote>
            <div className="Testimonials__author">
              <div className="Testimonials__avatar-wrapper">
                <Avatar image={item.avatar} size={64} alt={item.name}></Avatar>
              </div>
              <div className="Testimonials__info">
                <div className="has-text-weight-bold has-text-dark">
                  {item.name}
                </div>
                <div className="Testimonials__company is-size-7">
                  {item.company}
                </div>
              </div>
            </div>
          </figure>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Testimonials;
