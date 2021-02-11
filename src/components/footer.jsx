import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-main-container">
        <p>
          {" "}
          &copy; <span>{new Date().getFullYear()}</span> Watoto wa Kivu |
          Powered by <a href="https://www.fidbagraphics.com">Fidba Graphics</a>
        </p>
      </div>
    );
  }
}

export default Footer;
