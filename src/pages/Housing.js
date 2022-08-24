import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import CollapseBox from "../components/CollapseBox";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Owner from "../components/Owner";
import Tag from "../components/Tag";

const Housing = () => {
  const userId = useParams();
  const [data, setData] = useState({});
  const housing = { ...data[0] };

  //const dataHousing = data;
  //const housing = dataHousing[0];

  /* const getHousing = async () => {
    return await axios.get("/logements.json").then((result) =>
      result.data.filter(function (housing) {
        return housing.id === userId.housingId;
      })
    );
  }; */

  //console.log(getHousing);

  useEffect(() => {
    axios
      .get("/logements.json")
      .then((result) =>
        result.data.filter(function (object) {
          return object.id === userId.housingId;
        })
      )
      .then((filteredData) => setData(filteredData));
  }, []);

  /*  useEffect(() => {
    const getData = async () => {
      const result = await axios("/logements.json");
      const filterData = result.data.filter(function (housing) {
        return housing.id === userId.housingId;
      });
      setData(filterData);
    };
    getData();
  }, [data, userId]); */

  //const location = useLocation();
  //const { housing } = location.state;
  //console.log(housing);
  console.log(userId.housingId);
  console.log(housing);
  if (data === {}) {
    return "Chargement...";
  } else {
    return (
      <div>
        <div className="main-wrapper">
          <Header />
          <div className="TEST">
            {housing.id}
            {housing.title}
            {housing.equipments}
            {housing.tags}
            {housing.pictures}
          </div>
          {/*    <section className="gallery-container">
          <h2 className="sr-only">Gallerie d'images</h2>
          <Gallery housing={housing} />
        </section> */}
          {/* <section className="housing-presentation">
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
        </section>*/}
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
                <span className="housing-desc__kit">{kit}</span>
              ))}
            />
          </section>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
};

export default Housing;
