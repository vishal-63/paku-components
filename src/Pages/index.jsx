import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { SliderData } from "../Components/Herosection/SliderData";
import Infosection from "../Components/Infosection";
import ContactSection from "../Components/Contact Form";
import Footer from "../Components/Footer";
import { ToTopArrow } from "../Components/Infosection/InfoElements";
import { BsArrowUp } from "react-icons/bs";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 690) setScrollNav(true);
    else setScrollNav(false);
  };

  document.addEventListener("scroll", changeNav);

  return (
    <>
      <Topbar />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Herosection slides={SliderData} />
      <Infosection />
      <ContactSection />
      <Footer />

      <ToTopArrow onClick={toggleHome} scrollNav={scrollNav}>
        <BsArrowUp />
      </ToTopArrow>
    </>
  );
};

export default Home;
