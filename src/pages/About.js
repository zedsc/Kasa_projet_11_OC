import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <h1 className="about">A propos</h1>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default About;
