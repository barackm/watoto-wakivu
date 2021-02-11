import React, { Component, createRef } from "react";
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
import overlay from "../assets/images/bg.jpg";
class Video extends Component {
  constructor(props) {
    super(props);
    this.playBtn = createRef();
    this.video = createRef();
  }
  state = {
    isPlaying: false,
  };
  componentDidMount() {}
  handlePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
    !this.state.isPlaying
      ? this.video.current.play()
      : this.video.current.pause();
  };
  render() {
    return (
      <div className="video-main-wrapper">
        <div className="text-wrapper" data-aos="fade-left">
          <h1>La création de WATOTO WA KIVU racontée par son co- fondateur</h1>
          <p>
            {" "}
            Désormais la solidarité la plus nécessaire est celle de l’ensemble
            des habitants de la terre
          </p>
        </div>
        <div className="images-video-wrapper" data-aos="zoom-out-up">
          <div className="overlay-image">
            <div className="overlay"></div>
            <img src={overlay} alt="" />
          </div>
          <div className="video-container">
            {/* <div className="btn-play--overlay"> */}
            <div
              className="btn-container"
              ref={this.playBtn}
              onClick={this.handlePlay}
            >
              <IconContext.Provider value={{ className: "video-play-icon" }}>
                <FaPlay />
              </IconContext.Provider>
            </div>
            {/* </div> */}
            <video
              controls="controls"
              src="https://www.youtube.com/watch?v=NLtirIuBsnQt=33s"
              ref={this.video}
            ></video>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
