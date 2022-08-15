import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ housing }) => {
  return (
    <div className="card-ks col-xl-4 col-md-6">
      <NavLink
        to={"/housing/" + housing.id}
        state={{ housing }}
        className="card-ks__link"
      >
        <div className="card-ks-gradient">
          <img
            src={housing.cover}
            alt={"Photo" + housing.title}
            className="card-ks__img"
          />
        </div>
        <h3 className="card-ks__title">{housing.title}</h3>
      </NavLink>
    </div>
  );
};

export default Card;
