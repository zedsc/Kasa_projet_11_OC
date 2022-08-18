import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CollapseBox from "../components/CollapseBox";

const About = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <div className="banner-about">
          <img
            src={`${process.env.PUBLIC_URL}/banner2.png`}
            alt="Fond bannière nature"
            className="banner-about__img"
          />
        </div>
        <section className="about">
          <h1 className="about__title sr-only">A propos</h1>
          <CollapseBox
            id="1"
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les
            informations sont régulièrement vérifiées par nos équipes."
          />
          <CollapseBox
            id="2"
            title="Respect"
            content=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
          />
          <CollapseBox
            id="3"
            title="Service"
            content=" Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez
            la moindre question."
          />
          <CollapseBox
            id="4"
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien
            à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
            que les standards sont bien respectés. Nous organisons également
            des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default About;
