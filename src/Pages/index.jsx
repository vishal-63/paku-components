import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

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
    </>
  );
};

export default Home;
