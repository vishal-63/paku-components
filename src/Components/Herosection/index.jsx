import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../Images/img-1.jpg";
import img2 from "../../Images/img-2.jpg";
import img3 from "../../Images/img-3.jpg";
import img4 from "../../Images/img-4.jpg";
import "./herosection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Herosection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div className="herosection">
        <div className="herosectionWrapper">
          <Slider {...settings} className="herosectionSlider">
            <div className="herosectionSlide">
              <div>
                <img src={img2} alt="engine" className="heroImage"></img>
              </div>
              <div className="heroText">
                <h1 className="heroHeadline">Lorem Ipsum</h1>
                <div className="heroSubtitle">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </div>
              </div>
            </div>
            <div className="herosectionSlide">
              <div>
                <img src={img3} alt="engine" className="heroImage"></img>
              </div>
              <div className="heroText">
                <h1 className="heroHeadline">Lorem Ipsum</h1>
                <div className="heroSubtitle">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </div>
              </div>
            </div>
            <div className="herosectionSlide">
              <div>
                <img src={img4} alt="engine" className="heroImage"></img>
              </div>
              <div className="heroText">
                <h1 className="heroHeadline">Lorem Ipsum</h1>
                <div className="heroSubtitle">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </div>
              </div>
            </div>
            <div className="herosectionSlide">
              <div>
                <img src={img1} alt="engine" className="heroImage"></img>
              </div>
              <div className="heroText">
                <h1 className="heroHeadline">Lorem Ipsum</h1>
                <div className="heroSubtitle">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
