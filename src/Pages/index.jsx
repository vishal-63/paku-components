import React, { useState } from "react";
import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { SliderData } from "../Components/Herosection/SliderData";
import Infosection from "../Components/Infosection";
import ContactSection from "../Components/Contact Form";
import Footer from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Herosection slides={SliderData} />
      <Infosection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
