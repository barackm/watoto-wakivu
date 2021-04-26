import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdSchool } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import Dots from "./dots";
import img from "../assets/images/education.png";
import img2 from "../assets/images/sante1.png";
import img3 from "../assets/images/nutrition.png";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="services-main-wrappe" id="services">
        <div className="overlay-shape"></div>

        <div className="header">
          <h1 data-aos="fade-up">Nos Domaines </h1>
          <p data-aos="fade-up">
            Travailler ensemble, partager nos ressources, nos connaissances et
            notre expérience, nous permet de renforcer nos actions et leur
            donner davantage d’impact.
          </p>
        </div>
        <div className="services-grid-container">
          <div className="grid-item" data-aos="fade-left">
            <div className="icon-wrapper">
              <IconContext.Provider value={{ className: "services-icon" }}>
                <MdSchool />
              </IconContext.Provider>
            </div>
            <div className="title">
              <h3>Education</h3>
            </div>
          </div>
          <div className="grid-item middle" data-aos="fade-up">
            <div className="icon-wrapper">
              <IconContext.Provider value={{ className: "services-icon" }}>
                <FaHeartbeat />
              </IconContext.Provider>
            </div>
            <div className="title">
              <h3>Santé</h3>
            </div>
          </div>
          <div className="grid-item" data-aos="fade-right">
            <div className="icon-wrapper">
              <IconContext.Provider value={{ className: "services-icon" }}>
                <GiHamburger />
              </IconContext.Provider>
            </div>
            <div className="title">
              <h3>Nutrition</h3>
            </div>
          </div>
        </div>
        <div className="details-container">
          <div className="overlay-shape-2"></div>
          <div className="overlay-shape3"></div>
          <div className="overlay-shape-4"></div>
          <div className="education-wrapper">
            <div
              className="service-img-wrapper"
              data-aos="fade-in"
              data-aos="fade-right"
            >
              <div className="image-wrapper">
                <img src={img} alt="" />
              </div>
              <div className="dots-wrapper">
                <Dots />
              </div>
            </div>
            <div className="education-main-content">
              <div className="header">
                <h1>Education</h1>
              </div>
              <div className="main-content" data-aos="fade-left">
                <p>
                  Chaque pays dans le monde, particulièrement la République
                  Démocratique du Congo, dispose de son propre système éducatif,
                  avec un rôle traditionnellement dévolu aux parents d'un enfant
                  (ou à leur substitut) d'amener cet enfant aux mœurs de l'âge
                  adulte, et une intervention souvent croissante des États.{" "}
                  <br /> L'éducation est considérée comme un élément important
                  du développement des personnes, d'où le développement d'un
                  droit à l'éducation. Un système éducatif performant est donc
                  un avantage majeur. <br /> Inversement, être privé d'éducation
                  sera considéré comme un lourd handicap. Dans la partie est de
                  la République Démocratique du Congo des milliers d’enfants
                  sont privés d’études en raisons des conflits armés.
                </p>
              </div>
            </div>
          </div>
          <div className="education-wrapper second">
            <div className="education-main-content sante" data-aos="fade-left">
              <div className="header">
                <h1>Santé</h1>
              </div>
              <div className="main-content">
                <p>
                  Elle implique la satisfaction de tous les besoins fondamentaux
                  de la personne, qu'ils soient affectifs, sanitaires,
                  nutritionnels, sociaux ou culturels.{" "}
                  <i>
                    {" "}
                    « La santé résulte d’une interaction constante entre
                    l’individu et son milieu »{" "}
                  </i>{" "}
                  et représente donc cette{" "}
                  <i>
                    {" "}
                    « capacité physique, psychique et sociale des personnes
                    d’agir dans leur milieu et d’accomplir les rôles qu’elles
                    entendent assumer d’une manière acceptable pour elles- mêmes
                    et pour les communautés dont elles font partie ».{" "}
                  </i>
                </p>
              </div>
            </div>
            <div className="service-img-wrapper" data-aos="fade-up">
              <div className="image-wrapper">
                <img src={img2} alt="" />
              </div>
              <div className="dots-wrapper">
                <Dots />
              </div>
            </div>
          </div>
          <div className="education-wrapper third">
            <div className="service-img-wrapper" data-aos="fade-up">
              <div className="image-wrapper">
                <img src={img3} alt="" />
              </div>
              <div className="dots-wrapper">
                <Dots />
              </div>
            </div>
            <div className="education-main-content" data-aos="fade-right">
              <div className="header">
                <h1>Nutrition</h1>
              </div>
              <div className="main-content">
                <p>
                  Il est nécessaire de définir ce qui est considéré comme un
                  aliment, selon l'approche physiologique ou psychologique. Dans
                  la première, la nourriture englobe tout ce qui est nutritif,
                  c'est-à-dire dont « l'ingestion est nécessaire pour la survie,
                  la bonne santé et la croissance des jeunes ». L'approche
                  psychologique est plus restrictive, en considérant que « la
                  substance la plus nutritive peut difficilement compter comme
                  aliment si personne ne la mange car les gens ne pensent
                  généralement pas à ce qu'ils mangent en termes de nutriments
                  ».
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Cover /> */}
      </div>
    );
  }
}

export default Services;
