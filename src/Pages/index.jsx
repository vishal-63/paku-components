import React, { useState, useEffect, Suspense, lazy } from "react";
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
import BeatLoader from "react-spinners/BeatLoader";
import img1 from "../Images/img-1.webp";
import img2 from "../Images/img-2.webp";
import img3 from "../Images/img-3.webp";

const ContactSection = React.lazy(() =>
  import("../Components/Contact Section/index.jsx")
);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pictures = [img1, img2, img3];
    cacheImages(pictures);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    setLoading(false);
  };

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

  const loadingScreen = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    transition: "all 0.4s ease-out",
  };
  return (
    <>
      {loading ? (
        <BeatLoader color={"#00194f"} size={20} css={loadingScreen} />
      ) : (
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
      )}
    </>
  );
};

export default Home;
