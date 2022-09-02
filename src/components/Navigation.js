import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            data-testid="about-test"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
