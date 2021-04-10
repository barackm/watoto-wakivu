import React, { Component, createRef } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  constructor(props) {
    super(props);
    this.navbar = createRef();
  }
  state = {};
  componentDidMount() {
    window.onscroll = () => {
      const scrollHeight = window.scrollY;
      const scrollTop = document.querySelector(".go-top-main-btn");

      if (scrollHeight > 200) {
        scrollTop.classList.add("visible");
        this.navbar.current.classList.add("scrolling");
      } else {
        this.navbar.current.classList.remove("scrolling");
        scrollTop.classList.remove("visible");
      }
    };
  }
  handleToggleMenu = () => {
    this.navbar.current.classList.toggle("open");
  };
  handleCloseMenu = () => {
    this.navbar.current.classList.remove("open");
  };
  render() {
    return (
      <div className="header-main-area" ref={this.navbar}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={700}
          href="#1"
          className="logo"
        >
          <span>LOGO</span>
          <div className="hamburger-container" onClick={this.handleToggleMenu}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link
                to="home"
                onClick={this.handleCloseMenu}
                spy={true}
                smooth={true}
                duration={700}
                href="#1"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleCloseMenu}
                to="about"
                spy={true}
                smooth={true}
                duration={700}
                href="#1"
              >
                Apropos
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleCloseMenu}
                to="services"
                spy={true}
                smooth={true}
                duration={700}
                href="#1"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleCloseMenu}
                to="contacts"
                spy={true}
                smooth={true}
                duration={700}
                href="#1"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                onClick={this.handleCloseMenu}
                spy={true}
                smooth={true}
                duration={700}
              >
                <div>Souscrire</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
