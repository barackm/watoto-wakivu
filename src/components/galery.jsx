import React, { Component } from "react";

import CarouselModal from "./carouselModal";
import { allImages } from "./data";
import Images from "./galeryImage";
const photographyImages = allImages
  .filter((image) => image.categoryId === 1)
  .slice(0, 6);
const printImages = allImages
  .filter((image) => image.categoryId === 2)
  .slice(0, 6);
const designImages = allImages
  .filter((image) => image.categoryId === 3)
  .slice(0, 6);
const newImages = allImages.slice(0, 12);

class AllImages extends Component {
  render() {
    const { onShowCarousel } = this.props;
    return <Images onShowCarousel={onShowCarousel} images={newImages} />;
  }
}

class Photographie extends Component {
  render() {
    const { onShowCarousel } = this.props;
    return (
      <Images onShowCarousel={onShowCarousel} images={photographyImages} />
    );
  }
}
class Print extends Component {
  render() {
    const { onShowCarousel } = this.props;
    return <Images onShowCarousel={onShowCarousel} images={printImages} />;
  }
}
class Design extends Component {
  render() {
    const { onShowCarousel } = this.props;
    return <Images onShowCarousel={onShowCarousel} images={designImages} />;
  }
}

class Galery extends Component {
  state = {
    selectedLink: "Tout",
    carouselVisible: false,
    selectedImage: null,
  };
  handleChangeLink = (selectedLink) => {
    this.setState({ selectedLink });
  };
  handleHideCarousel = () => {
    console.log("hide carousel get called");
    this.setState({ carouselVisible: false });
  };
  handleShowCarousel = (image) => {
    this.setState({ selectedImage: image._id, carouselVisible: true });
  };
  render() {
    const links = [{ id: 1, name: "Tout" }];

    return (
      <>
        <div className="galery-main-area">
          <h1 className="title-main">Galerie</h1>
          <div className="header">
            <ul>
              {links.map((link, index) => (
                <li
                  className={
                    this.state.selectedLink === link.name ? "active" : ""
                  }
                  onClick={() => this.handleChangeLink(link.name)}
                  key={link.id + index}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="images-wrapper-area">
            {this.state.selectedLink === "Tout" && (
              <AllImages onShowCarousel={this.handleShowCarousel} />
            )}
            {this.state.selectedLink === "Photographie" && (
              <Photographie onShowCarousel={this.handleShowCarousel} />
            )}
            {this.state.selectedLink === "Print" && (
              <Print onShowCarousel={this.handleShowCarousel} />
            )}
            {this.state.selectedLink === "Design" && (
              <Design onShowCarousel={this.handleShowCarousel} />
            )}
          </div>
        </div>
        <CarouselModal
          selectedImage={this.state.selectedImage}
          onHideCarousel={this.handleHideCarousel}
          visible={this.state.carouselVisible}
          images={newImages}
        />
      </>
    );
  }
}

export default Galery;
