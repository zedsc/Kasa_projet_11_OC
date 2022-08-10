import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ housing }) => {
  return (
    <div className="card">
      <NavLink to={"/housing/" + housing.id} state={{ housing }}>
        <img
          src={housing.cover}
          alt={"Photo" + housing.title}
          className="card__img"
        />
        <h3 className="card__title">{housing.title}</h3>
      </NavLink>
    </div>
  );
};

export default Card;
