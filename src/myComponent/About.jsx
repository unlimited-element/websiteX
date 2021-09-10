import React from "react";
import { Tooltip, Zoom } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../images/ab-img.png";
import Bootstrap from "../images/Bootstrap.svg";

AOS.init();

const About = () => {
  return (
    <section id="about">
      <div className="about_row">
        <div data-aos="fade-up">
          <img className="profile-pic" src={aboutimg} alt="" />
        </div>
        <div className="new_about">
          <h1 className="about_h1">About Me</h1>
          <p data-aos="fade-up">
            I am a Web Developer with a knack for experimenting with different frameworks and libraries 
            to keep up with modern, innovative technologies.
            My competencies include, but are not limited to:
          </p>

          <div className="row">
            <div>
              <p>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="HTML5"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-html5 fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="CSS3"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-css3-alt fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVASCRIPT"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-js-square fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="REACTJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-react fa-3x" aria-hidden="true" />
                </Tooltip>

                <Tooltip
                  TransitionComponent={Zoom}
                  title="BOOTSTRAP"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <img src={Bootstrap} alt="bootstrap" />
                </Tooltip>

                <Tooltip
                  TransitionComponent={Zoom}
                  title="NODEJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-node fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="MONGODB-DATABASE"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                  >
                  <i className="fas fa-database fa-3x" aria-hidden="true" />
                </Tooltip>

              </p>
            </div>
          </div>
            <div>
              <h1>Contact Details</h1>
              <p data-aos="fade-up" className="contact-about">
                <span>
                  <i className="fas fa-envelope" />
                  julius.l.bolden@gmail.com
                </span>

                <span>
                  <i className="fas fa-map-marker-alt" /> Las Vegas, Nevada
                </span>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
