import React from 'react';
import photo from "../../assets/landscapes/coverImage.jpg" ;

function Carousel(props) {
  const currentCategory = {
    name: "landscapes",
    description:
      "Photos of landscapes",
  };
  return (
    <section>
<h1>{currentCategory.name}</h1>
<p>{currentCategory.name}</p>
<div className="flex-row">
          <img
            src={photo}
            alt="Landscape Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Carousel;

/* make this a carousel/ slideshow of images
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./slide";

class carousel extends Component {
  render() {
    let carousel = {
      position: "relative"
    };

    return (
      <div className="has-margins margin-top">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        style={carousel}
        showStatus={false}
      >
        <Slide
          image={this.props.img1}
          title={this.props.title1}
          description={this.props.description1}
        />
        <Slide
          image={this.props.img2}
          title={this.props.title2}
          description={this.props.description2}
        />
        <Slide
          image={this.props.img3}
          title={this.props.title3}
          description={this.props.description3}
        />
      </Carousel>
      </div>
    );
  }
}

export default carousel;*/