import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiCheckCircle } from "react-icons/fi";
import { FaHandsHelping, FaSmileBeam } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-main-container" id="contacts">
        <div className="header-wrapper">
          <div className="header">
            <h1 data-aos="zoom-in-up">Contact</h1>
            <p data-aos="zoom-in-up">
              Sauver la dignité humaine de la personne vulnérable dans le
              respect de son authenticité
            </p>
          </div>
        </div>
        <div className="contact-content-container">
          <div className="contact-grid-wrapper">
            <div className="contact-item">
              <div className="icon-wrapper">
                <IconContext.Provider
                  value={{ className: "list-icon-contact" }}
                >
                  <FaHandsHelping />
                </IconContext.Provider>
              </div>
              <h1 className="title"> FAIRE UN DON</h1>
              <span>Aider autrement</span>
              <div className="list">
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    Plusieurs possibilités sont à notre porté pour s’engager à
                    rendre le monde meilleur et vivable grâce à la solidarité :
                    Devenons bénévoles, impliquons nos entreprises, faire parler
                    de nous...
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <IconContext.Provider
                  value={{ className: "list-icon-contact" }}
                >
                  <GiHummingbird />
                </IconContext.Provider>
              </div>
              <h1 className="title">DEVENONS BENEVOLE</h1>
              <span>
                Organiser des événements, initier des collecte,... sont autant
                de moyens bénévoles d’apporter votre soutien à la cause des
                personnes vulnérable issues des familles plus nécessiteux.
              </span>
              <div className="list">
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    <strong>Etre au cœur de l'action:</strong>
                    Rejoignez nos 90 bénévoles à travers le grand kivu pour
                    aider davantage de familles et personnes plus nécessiteux ;
                    notre petite équipe a besoin de toutes les bonnes volontés.
                  </p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    <strong>Devenez notre :</strong>
                    Vous avez envie de vous engager pour une cause en laquelle
                    vous croyez ? Vous avez un talent, des compétences, des
                    idées, un réseau, du temps libre et l'envie de donner à
                    chaque personne/famille démuni les moyens de construire sa
                    vie ?
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <IconContext.Provider
                  value={{ className: "list-icon-contact" }}
                >
                  <FaSmileBeam />
                </IconContext.Provider>
              </div>
              <h1 className="title"> Karibu, welcome, bienvenu</h1>
              <span>
                Etre bénévole c’est la possibilité de rejoindre une équipe
                existante pour des causes précises, afin de :
              </span>
              <div className="list">
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    échanger avec des personnes qui partagent les mêmes
                    engagements,
                  </p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>mutualiser les bonnes idées,</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>organiser des événements,</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>faire connaitre l'association</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>soutenir notre cause dans vos habitudes au quotidien</p>
                </div>
              </div>
              <span>
                Pour mettre en place des événements innovateurs nous faisons
                régulièrement appelle aux nouveaux bénévoles.
              </span>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <IconContext.Provider
                  value={{ className: "list-icon-contact" }}
                >
                  <FaHandsHelping />
                </IconContext.Provider>
              </div>
              <h1 className="title">FAITES UN DON</h1>
              <span>
                Agir pour améliorer les conditions de vie de toute une
                génération ; agir pour que leurs droits soient défendus et
                respectés et ainsi leur permettre de devenir autonome et
                responsable.
              </span>
              <div className="list">
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    <strong>Faites un don à l'Association</strong>
                    Pour mettre en place nos actions au sein des différents
                    programmes que nous soutenons sur le terrain et venir ainsi
                    en aide aux familles et personnes les plus démunis, nous
                    avons besoin de vos dons.
                  </p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    En faisant un don à notre Association, vous pérennisez notre
                    activité tout en aidant, chaque année, un nombre important
                    des familles et personnes les plus démunis à devenir et
                    autonomes et responsables, pourquoi pas à le demeurés.
                    Pensez aujourd’hui aux familles et personnes les plus
                    démunis et nécessiteux, pour leur permettre, demain, de
                    devenir autonomes et responsables.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <IconContext.Provider
                  value={{ className: "list-icon-contact" }}
                >
                  <GiHummingbird />
                </IconContext.Provider>
              </div>
              <h1 className="title">DEVENONS BENEVOLE</h1>
              <span>
                Organiser des événements, initier des collecte,... sont autant
                de moyens bénévoles d’apporter votre soutien à la cause des
                personnes vulnérable issues des familles plus nécessiteux.
              </span>
              <div className="list">
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    Vous pouvez faire le choix de ces formes de soutien et
                    associer durablement votre nom à nos actions en faveur des
                    personnes défavorisées. Ces personnes défavorisées ont
                    besoin de vous, n'attendez plus pour leur donner une chance
                    dans la vie.
                  </p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>
                    Comment tolérer que des êtres humains soit privé d'avenir
                    parce qu'ils sont nés dans des familles parmi les plus
                    nécessiteuses ?
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <IconContext.Provider
                  value={{ className: "list-icon-contact" }}
                >
                  <FaSmileBeam />
                </IconContext.Provider>
              </div>
              <h1 className="title">Faire parler de nous</h1>
              <span>Parler de watoto wa kivu autour de vous permet de :</span>
              <div className="list">
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>promouvoir l’Association,</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>trouver de nouveaux parrains,</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <IconContext.Provider
                      value={{ className: "list-icon-contact" }}
                    >
                      <FiCheckCircle />
                    </IconContext.Provider>
                  </div>
                  <p>collecter des fonds pour les projets.</p>
                </div>
              </div>
              <span>
                Ainsi Grâce à vous, nos partenaires sur le terrain pourront agir
                efficacement et durablement en répondant à des besoins concrets
                exprimés par les familles et les communautés pauvres et sans
                voix.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
