import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Herosection from "../Components/Herosection";
import Infosection from "../Components/Infosection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Herosection />
      <Infosection />
    </>
  );
};

export default Home;
