import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiCheckCircle } from "react-icons/fi";
import image1 from "../assets/images/projects/img2.jpg";
import img1 from "../assets/images/bg1.jpg";
import img2 from "../assets/images/bg.jpg";
import img3 from "../assets/images/bg1.jpg";
import img4 from "../assets/images/bg.jpg";
import img5 from "../assets/images/bg1.jpg";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="projects-main-container">
        <div className="overlay-circle c--1"></div>
        <div className="overlay-circle c--2"></div>
        <div className="overlay-circle c--3"></div>
        <div className="overlay-circle c--4"></div>

        <div className="projects-header-container">
          <div className="text-content" data-aos="zoom-in-up">
            <h1>Programme</h1>
            <h3>Projects a soutenir</h3>
            <h3>Domaine d'intervention</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              vitae eius odio fugiat, ullam eos! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sit.
            </p>

            <div className="btns-wrapper">
              <div className="btn-left">soutenir</div>
            </div>
          </div>
          <div className="image-container-main" data-aos="flip-right">
            <div className="image-wrapper">
              <img src={image1} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="projects-wrapper">
          <div className="images-wrapper">
            <div className="image-wrapper">
              <img src={img1} alt="" srcset="" data-aos="flip-right" />
              <img
                src={img2}
                alt=""
                srcset=""
                data-aos="flip-right"
                data-aos-delay={500}
              />
              <img
                src={img3}
                alt=""
                srcset=""
                data-aos="flip-right"
                data-aos-delay={600}
              />
              <img
                src={img4}
                alt=""
                srcset=""
                data-aos="flip-right"
                data-aos-delay={700}
              />
              <img
                src={img5}
                alt=""
                srcset=""
                data-aos="flip-right"
                data-aos-delay={800}
              />
            </div>
          </div>
          <div className="projects">
            <div className="project-item">
              <div className="project-details">
                <div>
                  <div className="project--number">
                    <div>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3>Santé</h3>
                  <div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Urgent covid-19 : protégeons les familles vulnérables
                      </div>
                    </div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Souscrire pour la prise en charge de la maternité des
                        femmes vulnérables : paiement des factures pour la
                        maternité
                      </div>
                    </div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Souscrire pour assistance sanitaire aux enfants
                        vulnérables en milieu rural :
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-details">
                <div>
                  <div className="project--number two">
                    <div>
                      <span>2</span>
                    </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3>Extraction des puces chique</h3>
                  <div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Prise en charge de Soin de certain cas particulier de
                        maladies chez les enfants issus des familles vulnérables
                        et sans alternatives.
                      </div>
                    </div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Souscrire pour un cas particulier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-details">
                <div>
                  <div className="project--number third">
                    <div>
                      <span>3</span>
                    </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3>Education</h3>
                  <div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Parrainage scolaire : parrainer un enfant
                      </div>
                    </div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Souscrire pour les fournitures scolaires d’un enfant
                        vulnérables
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-details">
                <div>
                  <div className="project--number">
                    <div>
                      <span>4</span>
                    </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3>Habillement</h3>
                  <div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        vêtir un enfant vulnérable et orphelin
                      </div>
                    </div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        chausser un enfant vulnérable et orphelin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-details">
                <div>
                  <div className="project--number third">
                    <div>
                      <span>5</span>
                    </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3>Prison</h3>
                  <div>
                    <div className="text-item">
                      <div className="icon-wrapper">
                        <IconContext.Provider
                          value={{ className: "project-check-icon" }}
                        >
                          <FiCheckCircle />
                        </IconContext.Provider>
                      </div>
                      <div className="content">
                        Assistance alimentaire en milieu carcéral
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
