import React, { Component } from "react";
import { Link } from "react-scroll";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-main-area" id="home">
        <div className="home-container-overlay" data-aos="fade-left">
          <div className="image-container"></div>
          <div className="overlay"></div>
        </div>
        <div className="overlay-sha"></div>
        <div className="home-main-content-area"></div>
        <div
          className="hero-text-container"
          data-aos="zoom-in-up"
          data-os-delay={1000}
        >
          Agir dans le respect et l’honnêteté, pour rétablir la dignité de
          l’homme.
        </div>
        <div className="hero-btn-container" data-aos="zoom-in-up">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={700}
            className="first-btn"
          >
            <span>Voir plus</span>
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={700}
            className="second-btn"
          >
            <span> contactez nous</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
