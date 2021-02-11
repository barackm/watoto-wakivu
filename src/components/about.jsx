import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaDotCircle } from "react-icons/fa";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-main-area">
        <div className="header">
          <h1 data-aos="zoom-in-up">Notre Histoire</h1>
          <p data-aos="zoom-in-up">
            Sauver la dignité humaine de la personne vulnérable dans le respect
            de son authenticité
          </p>
        </div>
        <div className="overlay-about"></div>
        <div className="grid-area">
          <div className="grid-container">
            <div className="grid-item">
              <div className="grid-item--main-content" data-aos="flip-left">
                <div className="dot"></div>
                <h3>Ce qu’il faut savoir</h3>
                <p>
                  WATOTO WA KIVU est une association, tenue par les jeunes de
                  Goma en République démocratique du Congo /province du
                  Nord-Kivu, qui vise à répondre favorablement à la question de
                  sécurité alimentaire, à l’amélioration des conditions de vie
                  des personnes défavorisées et vulnérables, à travers leur
                  réinsertion sociale, et tant soit peu à redéfinir leur mode de
                  vie à l’instar des droits fondamentaux de l’homme et
                  accompagner les personnes vivant avec handicap mental ou
                  physique. <br /> L’association mène des programmes
                  humanitaires pour le bien être des personnes vulnérables ; Sa
                  mission quotidienne a toujours été de mettre en place des
                  solutions pérennes pour répondre aux problèmes humanitaires
                  qui touchent les personnes vulnérables
                </p>
              </div>
            </div>
            <div className="grid-item"></div>
          </div>
          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item">
              <div
                className="grid-item--main-content second"
                data-aos="flip-right"
              >
                <div className="dot"></div>
                <h3>Nos valeurs</h3>
                <p>
                  L’unité des jeunes de Goma dont l’issue est l’existence de
                  l’association sans but lucratif Watoto Wa Kivu regorge en son
                  sein multiple valeurs sur lesquelles reposent son engagement :
                  <br />
                  <div className="items">
                    <div className="item">
                      <IconContext.Provider value={{ className: "about-dot" }}>
                        <FaDotCircle />
                      </IconContext.Provider>
                      <p>
                        <strong> Confiance:</strong> Nouer un véritable rapport
                        de confiance vis-à-vis des donateurs, des collaborateurs
                        et bénéficiaires locaux.
                      </p>
                    </div>
                    <div className="item">
                      <IconContext.Provider value={{ className: "about-dot" }}>
                        <FaDotCircle />
                      </IconContext.Provider>
                      <p>
                        <strong> Ecoute:</strong> Etre proche à la fois des
                        bénéficiaires pour comprendre leurs besoins et nos
                        donateurs pour leur permettre de s’impliquer.
                      </p>
                    </div>
                    <div className="item">
                      <IconContext.Provider value={{ className: "about-dot" }}>
                        <FaDotCircle />
                      </IconContext.Provider>
                      <p>
                        <strong> Solidarité:</strong> Créer ce lien permet aux
                        bénéficiaires d’accéder progressivement à leur autonomie
                        dans un climat d’assurance et aux donateurs de
                        s’approprier la situation de ceux-ci.
                      </p>
                    </div>
                    <div className="item">
                      <IconContext.Provider value={{ className: "about-dot" }}>
                        <FaDotCircle />
                      </IconContext.Provider>
                      <p>
                        <strong> Responsabilité:</strong> Responsabiliser nos
                        acteurs et veiller à l’impact positif de nos actions en
                        quasi transparence.
                      </p>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <div className="grid-item--main-content" data-aos="flip-left">
                <div className="dot"></div>
                <h3>Notre approche globale</h3>
                <p>
                  Vivre dignement impose à l’homme de jouir de certains droits
                  fondamentaux tel que : la bonne santé, l’accès à une
                  alimentation saine, l’accès à des infrastructures sanitaires
                  appropriées, l’accès à une bonne éducation, l’accès à
                  l’intégration du monde de travail et ainsi se sentir aimé et
                  en sécurité.
                  <br />
                  <i>
                    <span> «</span> La solidarité internationale envers les plus
                    nécessiteux est une application cohérente du principe de la
                    citoyenneté mondiale <span>»</span>
                  </i>
                </p>
              </div>
            </div>
            <div className="grid-item"></div>
          </div>
          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item">
              <div
                className="grid-item--main-content second"
                data-aos="flip-right"
              >
                <div className="dot"></div>
                <h3>Notre Mission </h3>
                <p>
                  La protection et la promotion des droits fondamentaux des
                  personnes vulnérables au cœur de nos actions Peu importe leur
                  âge, leur religion, leur culture, au quotidien, des centaines
                  de congolais sont victimes de violences, d’exploitations et
                  d’abus ; ceux qui vivent dans des communautés les plus pauvres
                  sont particulièrement vulnérables. <br /> Travailler ensemble,
                  partager nos ressources, nos connaissances et notre
                  expérience, nous permet de renforcer nos actions et leur
                  donner davantage d’impact,
                  <br /> avec le soutien des bienfaiteurs de bonne foi et de
                  certaines organisations nationales et internationales et
                  potentiel partenaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
