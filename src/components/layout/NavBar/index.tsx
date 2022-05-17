import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import images from "../../../assets/images";
import { navLinks } from "../../../helpers/constants";
import "./index.css";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo-container" onClick={() => navigate("/")}>
        <img src={images.logo} alt="logo" />
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.image ? (
                  <img
                    className="img-links"
                    src={link.image}
                    alt={link.title}
                  />
                ) : (
                  link.title
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
