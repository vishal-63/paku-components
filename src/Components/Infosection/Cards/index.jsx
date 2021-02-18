import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Cards.css";
import { VscFolderOpened } from "react-icons/vsc";
import { BiRupee } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

class Cards extends Component {
  render() {
    AOS.init({
      duration: 2000,
    });
    return (
      <div className="cardSectionContainer">
        <div
          className="cardSectionWrapper"
          data-aos="slide-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-250"
        >
          <h3 className="cardSectionTitle">Why work with us?</h3>
          <div className="cardSectionSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
            tristique justo vel fringilla.
          </div>
          <div className="cardsWrapper">
            <div
              className="card"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="3000"
            >
              <div className="cardIcon">
                <VscFolderOpened />
              </div>
              <div className="cardTitle">Wide Range of Products</div>
              <div className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div
              className="card"
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-duration="3000"
            >
              <div className="cardIcon">
                <BiRupee />
              </div>
              <div className="cardTitle">Best Price</div>
              <div className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div
              className="card"
              data-aos="flip-right"
              data-aos-delay="600"
              data-aos-duration="3000"
            >
              <div className="cardIcon">
                <BsStar />
              </div>
              <div className="cardTitle">Professional Experience</div>
              <div className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
