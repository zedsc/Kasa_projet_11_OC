import React from "react";

const LogoWB = () => {
  return (
    <div className="logo-container">
      <img
        src={`${process.env.PUBLIC_URL}/logoKasa.svg`}
        alt="logo Kasa"
        className="logo-wb"
      />
    </div>
  );
};

export default LogoWB;
