import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Slider.css";
import img1 from "../../../Images/honda.png";
import img2 from "../../../Images/hyundai.png";
import img3 from "../../../Images/toyota.png";
import img4 from "../../../Images/volkswagen.png";
import img5 from "../../../Images/tata.png";
import img6 from "../../../Images/maruti.png";
import img7 from "../../../Images/mahindra.png";
import img8 from "../../../Images/ashok-leyland.png";
import img9 from "../../../Images/eicher.png";
import img10 from "../../../Images/massey-ferguson.png";
import img11 from "../../../Images/sonalika.png";
import img12 from "../../../Images/swaraj.png";

class BrandSlider extends Component {
  render() {
    AOS.init({ duration: 2000 });
    const settings = {
      className: "center",
      //   centerMode: true,
      infinite: true,
      //   centerPadding: "60px",
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="sliderContainer" data-aos="zoom-in">
        <h2 className="sliderTitle">Brands we are associated with</h2>
        <Slider {...settings} className="slider">
          <div className="sliderImg">
            <img src={img1} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img2} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img3} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img4} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img5} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img6} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img7} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img8} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img9} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img10} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img11} className="sliderImg"></img>
          </div>
          <div className="sliderImg">
            <img src={img12} className="sliderImg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

export default BrandSlider;
