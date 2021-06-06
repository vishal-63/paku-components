import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ToTopArrow } from "../Components/Infosection/InfoElements";
import bgImg from "../../src/Images/blog1-bg.jpg";
import blog1 from "../../src/Images/blog-1.jpg";
import blog2 from "../../src/Images/blog-2.jpg";
import blog3 from "../../src/Images/blog-3.jpg";
import Blog from "../Components/Blogs/Blog";
import { BsArrowUp } from "react-icons/bs";

const Blog3 = () => {
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

  const pages = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Blogs",
      link: "/blogs",
    },
  ];

  return (
    <>
      <Topbar color="#121212" border="#343434aa" />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header
        title="Market Research Tips for Small Business Owners"
        pages={pages}
        page="Blog Post"
        bgImg={bgImg}
      />
      <Blog
        likes="12"
        comments="3"
        date="25"
        month="June"
        author="Jeet Shah"
        title="How Small Business Owners Can Succeed in Market Research This Year"
        para1="You already know that market research is important to the development of your business regardless of the size. Yet, it can also be overwhelming to figure out what you need to know, and how to conduct your research. So we’ve put together these tips to help simplify market research and get you started on the journey to soaring sales."
        img={blog3}
        para2="Before setting off on your market research quest, think about what you’re trying to achieve next with your business. Figuring out your objective will help you tailor the rest of your research and your future marketing materials. Having an objective for your research will flesh out what kind of data you need to collect. Next important thing to remember is that your business serves a specific kind of customer. Defining your specific customer has many advantages like allowing you to understand what kind of language to use when crafting your marketing materials, and how to approach building relationships."
        quote="Knowing who you don’t cater to can be essential to helping you grow. When you’re small, you’re advantage is that you can connect deeply with specific customers."
        para3="As you experience the business from the customer perspective, look for what’s being done right and wrong. Also, take a close look at their market segment. Moreover, a good customer survey is one of the most valuable market research tools because it gives you the opportunity to get inside of your customer’s head. However, remember that some feedback may be harsh, so take criticism as a learning tool to point you in the right direction. We hope these tips will help you improve your market research and achieve better results in running your business as well as in catering to the needs of your customers."
        recentPost1="/blog-1"
        recentPost1Title="How Small Business Owners Can Succeed in Market Research This Year"
        recentPost1Img={blog1}
        recentPost2="/blog-2"
        recentPost2Title="Achieving Effective Brand Management"
        recentPost2Img={blog2}
      />
      <Footer />

      <ToTopArrow onClick={toggleHome} scrollNav={scrollNav}>
        <BsArrowUp />
      </ToTopArrow>
    </>
  );
};

export default Blog3;
