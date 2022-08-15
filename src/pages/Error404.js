import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups ! La Page que vous demandez n'existe pas.</h2>
          <NavLink to="/" className="navlink errorlink">
            <p>Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Error404;
