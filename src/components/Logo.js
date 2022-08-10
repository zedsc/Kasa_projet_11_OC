import React from "react";

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src={`${process.env.PUBLIC_URL}/logoKasa.svg`}
        alt="logo Kasa"
        className="logo"
      />
    </div>
  );
};

export default Logo;
