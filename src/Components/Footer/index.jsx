import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.css";
import ContactForm from "./Contact Form/ContactForm";
import Location from "./map";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { BsChevronCompactLeft } from "react-icons/bs";

class Footer extends Component {
  render() {
    const Copy = (id) => {
      var copyText = document.getElementById(id);
      console.log(copyText);
      copyText.select();
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    };
    return (
      <div className="footerContainer" id="contact">
        <div className="footerWrap">
          <ContactForm />

          <div className="footerContact">
            <div className="footerLinksWrapper">
              <div className="footerLinkItems">
                <div className="footerLinkTitle">Contact Us</div>
                <div className="footerLink">
                  <div className="footerLinkIcons">
                    <FaPhoneAlt />
                  </div>
                  <div className="footerPhoneNos">
                    <input
                      className="footerInput"
                      value="+91-8197302228"
                      readonly
                      id="phone1"
                      name="phone"
                      onClick={() => Copy("phone1")}
                    />

                    <input
                      className="footerInput"
                      value="+91-9023502228"
                      readonly
                      id="phone2"
                      onClick={() => Copy("phone2")}
                    ></input>
                  </div>
                </div>
                <div className="footerLink">
                  <div className="footerLinkIcons">
                    <MdEmail />
                  </div>
                  <input
                    className="footerInput"
                    value="pakucomponents@gmail.com"
                    readonly
                    id="contactEmail"
                    onClick={() => Copy("contactEmail")}
                  />
                </div>
                <div className="footerLink">
                  <div className="footerLinkIcons">
                    <BiCurrentLocation />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  rutrum tristique justo vel fringilla. Duis rutrum lorem a nisl
                  luctus pharetra.
                </div>
              </div>
              <div className="footerMap">
                <Location />
              </div>
            </div>
          </div>
        </div>
        <div className="socialMedia">
          <div className="socialMediaWrap">
            <div className="websiteRights">
              Paku Components © {new Date().getFullYear()}&nbsp; All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
