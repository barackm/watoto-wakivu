import React, { Component } from "react";

class NewsLetter extends Component {
  state = {};
  render() {
    return (
      <div className="news-letter-main-container">
        <div className="header">
          <h1 data-aos="zoom-in-up">Newsletter</h1>
          <p data-aos="zoom-in-up">
            Sauver la dignité humaine de la personne vulnérable dans le respect
            de son authenticité Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit aperiam nemo repellendus molestiae quos autem
            saepe pariatur vel dolor officiis.
          </p>
        </div>
        <div className="input-main-container">
          <div className="input-wrapper">
            <input
              type="text"
              name=""
              id=""
              placeholder="Entrer votre address Email"
            />
          </div>
          <div className="btn-wrapper">Souscrire</div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;
