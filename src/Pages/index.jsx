import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

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
    </>
  );
};

export default Home;
