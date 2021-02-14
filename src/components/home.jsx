import React, { Component } from "react";

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
          <div className="first-btn">
            <span>Voir plus</span>
          </div>
          <div className="second-btn">
            <span> contectez nous</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
