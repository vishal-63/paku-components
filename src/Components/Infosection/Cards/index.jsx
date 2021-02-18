import React, { Component } from "react";
import "./Cards.css";
import { VscFolderOpened } from "react-icons/vsc";
import { BiRupee } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

class Cards extends Component {
  render() {
    return (
      <div className="cardSectionContainer">
        <div className="cardSectionWrapper">
          <h3 className="cardSectionTitle">Why work with us?</h3>
          <div className="cardSectionSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
            tristique justo vel fringilla.
          </div>
          <div className="cardsWrapper">
            <div className="card">
              <div className="cardIcon">
                <VscFolderOpened />
              </div>
              <div className="cardTitle">Wide Range of Products</div>
              <div className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="card">
              <div className="cardIcon">
                <BiRupee />
              </div>
              <div className="cardTitle">Best Price</div>
              <div className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="card">
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
