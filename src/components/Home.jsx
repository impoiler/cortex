import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import Devider from "./Devider";
import Hero from "./Hero";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";
import NFT from "./NFT";
import TopNav from "./TopNav";

const Home = () => {
  const navigate = useNavigate();

  const checkloggedin = () => {
    let islogeddin = localStorage.getItem("Login");

    if (islogeddin === "false" || islogeddin === null) {
      navigate(
        "/start?LoggedOutw9n0wpbhhgj949u33egida2ga3dk88zp8ow6t6wzh872fdt8ptqy1bqrx40l"
      );
    }
  };

  useEffect(() => {
    document.title = "Dashboard ! Cortex";
    checkloggedin();
  });

  return (
    <>
      <div className="flx twoprt flxcol">
        <Mobilemenu />
        <div className="sml">
          <Navbar />
        </div>
        <div className="bgc">
          <TopNav />
          <Devider />
          <Hero />
          <Devider />
          <NFT />
        </div>
      </div>
    </>
  );
};

export default Home;
