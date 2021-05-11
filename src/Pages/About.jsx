import { useState } from "react";
import AboutPage from "../Components/About/AboutPage";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import bgImg from "../Images/about-background.png";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar color="#121212" border="#343434aa" />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header page="About" bgImg={bgImg} />
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
