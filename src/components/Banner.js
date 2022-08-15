import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container-img">
        <img
          src={`${process.env.PUBLIC_URL}/banner1.png`}
          alt="Fond bannière"
          className="banner__img"
        />
      </div>
      <h1 className="banner__txt">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
