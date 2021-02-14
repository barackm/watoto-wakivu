import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-upper-side-area">
          <div className="footer-logo-wrapper">
            <span>LOGO</span>
          </div>
          <div className="footer-links-wrapper">
            <ul>
              <li>
                <Link to="home" spy={true} smooth={true} duration={700}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={700}>
                  Apropos
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} duration={700}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="contacts" spy={true} smooth={true} duration={700}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-icons-wrapper">
            <div className="icon-wrapper">
              <a
                href="https://web.facebook.com/Watoto-Wa-Kivu-102334961762252/"
                target="blank"
              >
                <IconContext.Provider value={{ className: "footer-icon" }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
              <a href="https://wa.me/243975461916" target="blank">
                <IconContext.Provider value={{ className: "footer-icon" }}>
                  <IoLogoWhatsapp />
                </IconContext.Provider>
              </a>
              <a
                href="https://www.instagram.com/watoto_wa_kivu/"
                target="blank"
              >
                <IconContext.Provider value={{ className: "footer-icon" }}>
                  <AiFillInstagram />
                </IconContext.Provider>
              </a>
              <a href="https://twitter.com/wa_kivu" target="blank">
                <IconContext.Provider value={{ className: "footer-icon" }}>
                  <FaTwitter />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-lower-side-area">
          <p>
            {" "}
            &copy; <span>{new Date().getFullYear()}</span> Watoto wa Kivu |
            Powered by{" "}
            <a href="https://www.fidbagraphics.com">Fidba Graphics</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
