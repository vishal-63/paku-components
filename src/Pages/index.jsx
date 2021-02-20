import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Herosection from "../Components/Herosection";
import Infosection from "../Components/Infosection";
import Footer from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  AOS.init({ duration: 2000 });
  return (
    <>
      <Topbar />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} data-aos="slide-down" />
      <Herosection />
      <Infosection />
      <Footer />
    </>
  );
};

export default Home;
