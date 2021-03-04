import React, { useState } from "react";
import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { SliderData } from "../Components/Herosection/SliderData";

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
    </>
  );
};

export default Home;
