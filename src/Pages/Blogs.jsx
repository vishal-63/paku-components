import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import BlogPage from "../Components/Blogs/Blog Home Page/BlogPage";
import bgImg from "../../src/Images/blogs-background.jpg";
import Footer from "../Components/Footer";
import { ToTopArrow } from "../Components/Infosection/InfoElements";
import { BsArrowUp } from "react-icons/bs";

const Blogs = () => {
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
      <Header title="Blogs" pages={pages} page="Blogs" bgImg={bgImg} />
      <BlogPage />
      <Footer />

      <ToTopArrow onClick={toggleHome} scrollNav={scrollNav}>
        <BsArrowUp />
      </ToTopArrow>
    </>
  );
};

export default Blogs;
