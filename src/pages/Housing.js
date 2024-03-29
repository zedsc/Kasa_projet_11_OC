import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CollapseBox from "../components/CollapseBox";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Owner from "../components/Owner";
import Tag from "../components/Tag";
import Error404 from "./Error404";

const Housing = () => {
  const userId = useParams();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const housing = data;

  useEffect(() => {
    const getHousing = async () => {
      await axios
        .get("/logements.json")
        .then((result) =>
          setData(
            result.data.find((housing) => housing.id === userId.housingId)
          )
        );
      setDataLoaded(true);
    };
    getHousing();
  }, [userId.housingId]);

  return !housing ? (
    <Error404 />
  ) : dataLoaded ? (
    <div>
      <div className="main-wrapper">
        <Header />
        <section className="gallery-container">
          <h2 className="sr-only">Gallerie d'images</h2>
          <Gallery housing={housing} />
        </section>
        <section className="housing-presentation">
          <div className="housing-title-loc-tags-container">
            <h1 className="housing-title">{housing.title}</h1>
            <h2 className="housing-location">{housing.location}</h2>
            <div className="tags">
              {housing.tags.map((tag) => (
                <Tag key={housing.id + "-" + tag} tag={tag} />
              ))}
            </div>
          </div>
          <Owner owner={housing.host} rating={housing.rating} />
        </section>
        <section className="housing-details">
          <h2 className="sr-only">Description et équipements</h2>
          <CollapseBox
            id="1"
            title="Description"
            content={housing.description}
            className="housing-desc"
          />
          <CollapseBox
            id="2"
            title="Equipements"
            className="housing-desc"
            content={housing.equipments.map((kit) => (
              <span key={housing.id + "-" + kit} className="housing-desc__kit">
                {kit}
              </span>
            ))}
          />
        </section>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  ) : (
    <div className="loading">Chargement...</div>
  );
};

export default Housing;
