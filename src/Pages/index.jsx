import React, { useState, useEffect } from "react";
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
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [loading, setLoading] = useState(false);

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

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  document.onreadystatechange = function () {
    if (document.readyState !== "complete") setLoading(true);
    else setLoading(false);
  };

  const loadingScreen = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
    transition: "all 0.4s ease-out",
  };

  return (
    <>
      {loading ? (
        <BeatLoader
          color={"#00b4d8"}
          loading={loading}
          size={20}
          css={loadingScreen}
        />
      ) : (
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
      )}
    </>
  );
};

export default Home;
