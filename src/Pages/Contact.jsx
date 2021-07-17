import { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import bgImg from "../Images/contact-background.jpg";
import ContactPage from "../Components/Contact Page/ContactPage";
import { ToTopArrow } from "../Components/Infosection/InfoElements";
import { BsArrowUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

const About = () => {
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

  const pages = [{ page: "Home", link: "/" }];
  return (
    <>
      <Topbar color="#121212" border="#343434aa" />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header title="Contact" pages={pages} page="Contact" bgImg={bgImg} />
      <ContactPage />
      <Footer />

      <ToTopArrow onClick={toggleHome} scrollNav={scrollNav}>
        <BsArrowUp />
      </ToTopArrow>
    </>
  );
};

export default About;
