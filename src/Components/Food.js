import React from "react";
import About from "./About";
import logo from "../Images_Main/logo.jpg";
import cover from "../Images_Main/cover.jpg";
import curve from "../Images_Main/curve.jpg";
import Latest_articles from "./Latest_articles";
import Footer from "./Footer";
const Food = () => {
  return (
    <>
      <div className="main">
        <div className="main_page">
          <div className="upper_page">
            <img src={logo} alt="Logo" />
            <h1>
              Discover the <br />
              <span style={{ color: "#E23744" }}>Best </span> Food <br /> and
              Drinks
            </h1>
            <p>
              Naturally made Healthcare Products for the <br /> better care &
              support of your body
            </p>
            <button>Explore Now!</button>
          </div>
          <div className="head_image">
            <img src={cover} alt="cover"/>
            <button>Get in Touch</button>
          </div>
        </div>
        <div></div>
        <About />
        <Latest_articles />
        <Footer />
      </div>
    </>
  );
};

export default Food;
