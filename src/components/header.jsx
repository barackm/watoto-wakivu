import React, { Component, createRef } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.navbar = createRef();
  }
  state = {};
  componentDidMount() {
    window.onscroll = () => {
      const scrollHeight = window.scrollY;

      if (scrollHeight > 200) {
        this.navbar.current.classList.add("scrolling");
      } else {
        this.navbar.current.classList.remove("scrolling");
      }
    };
  }
  handleToggleMenu = () => {
    this.navbar.current.classList.toggle("open");
  };
  render() {
    return (
      <div className="header-main-area" ref={this.navbar}>
        <div className="logo">
          <span>LOGO</span>
          <div className="hamburger-container" onClick={this.handleToggleMenu}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#1">Accueil</a>
            </li>
            <li>
              <a href="#1">Apropos</a>
            </li>
            <li>
              <a href="#1">Services</a>
            </li>
            <li>
              <a href="#1">Contacts</a>
            </li>
            <li>
              <div>Souscrire</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
