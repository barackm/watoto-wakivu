import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import jos from "../assets/images/team/jonathan.jpg";
import alain from "../assets/images/team/alain.jpg";
import nadine from "../assets/images/team/nadine.jpg";
import athanase from "../assets/images/team/athanase.jpg";
import lae from "../assets/images/team/lae.jpg";
import jeanPaul from "../assets/images/team/jean-paul-new.jpg";
import victoire from "../assets/images/team/mugabo.jpg";

class Team extends Component {
  state = {};
  render() {
    const teamMembers = [
      {
        id: 1,
        name: "JONATHAN BUCKO",
        post: "Président",
        facebook: "https://web.facebook.com/jonathan.bucko.10",
        twitter: "https://twitter.com/JDirecteur",
        linkedIn: "https://twitter.com/JDirecteur",
        img: jos,
      },
      {
        id: 2,
        name: "ALAIN MUBAKE",
        post: "Vice-président",
        facebook: "https://web.facebook.com/alainlilbest.musomani",
        twitter: "https://twitter.com/alain_mubake",
        linkedIn: "https://twitter.com/alain_mubake",
        img: alain,
      },
      {
        id: 3,
        name: "NADINE SALIBAYA",
        post: "Trésorière",
        facebook: "https://web.facebook.com/elnadia.salibaya",
        twitter: "https://twitter.com/alain_mubake",
        linkedIn: "https://twitter.com/alain_mubake",
        img: nadine,
      },
      {
        id: 4,
        name: "JEAN-PAUL KABONGO",
        post: "Secrétaire administratif",
        facebook: "https://web.facebook.com/elnadia.salibaya",
        twitter: "https://twitter.com/alain_mubake",
        linkedIn: "https://twitter.com/alain_mubake",
        img: jeanPaul,
      },
      {
        id: 5,
        name: "ATHANASE MILANDO",
        post: "Coordonnateur",
        facebook: "https://web.facebook.com/bryans.milando/",
        twitter: "https://twitter.com/AthanaseMilando",
        linkedIn: "https://twitter.com/AthanaseMilando",
        img: athanase,
      },
      {
        id: 6,
        name: "VICTOIRE MUGABO",
        post: "",
        facebook: "https://web.facebook.com/victoire.mugabo/",
        twitter: "https://web.facebook.com/victoire.mugabo/",
        linkedIn: "https://web.facebook.com/victoire.mugabo/",
        img: athanase,
      },
      {
        id: 7,
        name: "LAETITIA BATUMIKE",
        post: "",
        facebook: "https://web.facebook.com/laetitia.bat.52",
        twitter: "https://web.facebook.com/laetitia.bat.52",
        linkedIn: "https://web.facebook.com/laetitia.bat.52",
        img: lae,
      },
      {
        id: 8,
        name: "VICTOIR MUGABO",
        post: "",
        facebook: "https://www.facebook.com/victoire.mugabo",
        twitter: "https://twitter.com/MugaboVictoire",
        linkedIn: "https://twitter.com/MugaboVictoire",
        img: victoire,
      },
    ];
    return (
      <div className="team-main-container">
        <div className="team-overlay--1"></div>
        <div className="team-overlay--2"></div>
        <div className="header">
          <h1 data-aos="zoom-in-up">The Team</h1>
          <p data-aos="zoom-in-up">
            Le Conseil d’Administration de Watoto Wa Kivu est l’organe
            d’exécution des décisions de l’Assemblée Générale, celui-ci a dans
            ses attributions : la validation des stratégies et des orientations
            de l’association. Il est composé de 7 membres, tous bénévoles :
          </p>
        </div>
        <div className="team-members-grid-main">
          <div className="team-members-grid">
            {teamMembers.map((member) => (
              <div className="team-member-item" key={member.id}>
                <div className="image-wrapper">
                  <div className="line"></div>
                  <div className="overlay"></div>
                  <div className="image">
                    <img src={member.img} alt="" srcset="" />
                  </div>
                  <div className="member-details">
                    <div className="details-wrapper">
                      <h3>{member.name}</h3>
                      <span>{member.post}</span>
                      <div className="icon-container">
                        <a href={member.facebook}>
                          <IconContext.Provider
                            value={{ className: "team-member-icon" }}
                          >
                            <FaFacebookF />
                          </IconContext.Provider>
                        </a>
                        <a href={member.twitter}>
                          <IconContext.Provider
                            value={{ className: "team-member-icon" }}
                          >
                            <FaTwitter />
                          </IconContext.Provider>
                        </a>
                        <a href={member.linkedIn}>
                          <IconContext.Provider
                            value={{ className: "team-member-icon" }}
                          >
                            <FaLinkedinIn />
                          </IconContext.Provider>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
