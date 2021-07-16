import React, { useState, Suspense, lazy } from "react";
import { animateScroll as scroll } from "react-scroll";
import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { SliderData } from "../Components/Herosection/SliderData";
import Infosection from "../Components/Infosection";
// import ContactSection from "../Components/Contact Form";
import Footer from "../Components/Footer";
import { ToTopArrow } from "../Components/Infosection/InfoElements";
import { BsArrowUp } from "react-icons/bs";
const ContactSection = React.lazy(() =>
  import("../Components/Contact Form/index.jsx")
);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 690) setShowToTop(true);
    else setShowToTop(false);
  };

  document.addEventListener("scroll", changeNav);

  return (
    <>
      <Topbar color="#efefef" border="rgba(255, 255, 255, 0.2)" />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Herosection slides={SliderData} />
      <Infosection />
      <Suspense fallback={<div>loading..</div>}>
        <ContactSection />
      </Suspense>
      <Footer />

      <ToTopArrow onClick={toggleHome} showToTop={showToTop}>
        <BsArrowUp />
      </ToTopArrow>
    </>
  );
};

export default Home;
