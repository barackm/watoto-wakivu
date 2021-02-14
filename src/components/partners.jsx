import React, { Component } from "react";

class Partners extends Component {
  state = {};
  render() {
    return (
      <div className="partners-main-container">
        <div className="header">
          <h1 data-aos="zoom-in-up">Nos Partenaires</h1>
          <p data-aos="zoom-in-up">
            Watoto Wa kivu aiguise parmi ses principes la confiance, la
            transparence et l’honnêteté dans la mesure où cela garantie chaque
            partenaire, de toute nature, de sa crédibilité et de son attachement
            aux causes qu’elle défend.
          </p>
        </div>
        <div className="partners-list-main-container">
          <div className="partners-grid">
            <div className="partner-item"></div>
            <div className="partner-item"></div>
            <div className="partner-item"></div>
            <div className="partner-item"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
