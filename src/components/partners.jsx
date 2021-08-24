import React, { Component } from "react";
import partner1 from '../assets/images/partners/partner1.jpeg'
import partner2 from '../assets/images/partners/partner2.jpeg'
import partner3 from '../assets/images/partners/partner3.jpeg'
import partner4 from '../assets/images/partners/partner4.jpeg'
import partner5 from '../assets/images/partners/partner5.jpeg'
import partner6 from '../assets/images/partners/partner6.jpeg'

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
            <div className="partner-item">
              <img src={partner2} alt="partner" />
            </div>
            <div className="partner-item">
              <img src={partner1} alt="partner" />
            </div>
            <div className="partner-item">
              <img src={partner3} alt="partner" />
            </div>
            <div className="partner-item">
            <img src={partner6} alt="partner" />
            </div>
            <div className="partner-item">
            <img src={partner4} alt="partner" />
            </div>
            <div className="partner-item">
            <img src={partner5} alt="partner" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
