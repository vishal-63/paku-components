import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Infosection.css";
import img5 from "../../Images/img-5.jpg";
import Cards from "./Cards";
import BrandSlider from "./Slider";

class Infosection extends Component {
  render() {
    AOS.init({
      duration: 2000,
    });
    return (
      <div className="infoContainer">
        <div className="infoWrapper">
          <h2
            className="infoTitle"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            About Us{" "}
          </h2>
          <div className="infoContent">
            <div
              className="infoText"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum tristique justo vel fringilla. Duis rutrum lorem a nisl
              luctus pharetra. Aliquam ultricies ante placerat elit semper, sed
              pretium orci malesuada. Donec sed velit sed nulla malesuada
              blandit non vel justo. Aenean non maximus elit. Nunc lobortis
              ipsum est, non imperdiet urna faucibus et. Nam aliquam risus quis
              erat placerat, suscipit scelerisque mi dignissim. Aenean quis nisi
              sed leo porta gravida in eu felis. Nunc in mauris massa.
            </div>
            <img
              src={img5}
              alt="infoImg"
              className="infoImg"
              data-aos="fade-right"
            />
          </div>
        </div>
        <Cards />
        <BrandSlider />
      </div>
    );
  }
}

export default Infosection;
