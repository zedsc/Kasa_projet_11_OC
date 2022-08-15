import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Housings from "../components/Housings";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <Banner />
        <Housings />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
