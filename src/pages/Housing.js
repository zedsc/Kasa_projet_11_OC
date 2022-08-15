import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Housing = () => {
  const location = useLocation();
  const { housing } = location.state;
  console.log(housing);

  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <section className="gallery-container">
          <h2 className="sr-only">Gallerie d'images</h2>
          {/* <div>{housing.pictures[0]}</div>
        <div>{housing.pictures[0 + 2]}</div>
        <div>
          {housing.pictures[0 + 5]
            ? housing.pictures[0 + 5]
            : housing.pictures[0]}
        </div> */}
          <Gallery housing={housing} />
        </section>
        <section className="housing-presentation">
          <h1 className="housing-title">{housing.title}</h1>
          <h2 className="housing-location">{housing.location}</h2>
        </section>
        <section className="housing-details">
          <h2 className="sr-only">Description et équipements</h2>
          <div className="housing-description">
            <p>{housing.description}</p>
          </div>
          <div className="housing-equipments">
            <p>{housing.equipments}</p>
          </div>
        </section>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Housing;
