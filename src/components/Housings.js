import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Housings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("logements.json").then((result) => setData(result.data));
  }, []);

  return (
    <section className="housings-container">
      <h2 className="housings-title sr-only">Liste des logements</h2>
      <div className="row">
        {data.map((housing, index) => (
          <Card key={housing.id} housing={housing} />
        ))}
      </div>
    </section>
  );
};

export default Housings;
