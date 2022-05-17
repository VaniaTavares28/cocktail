import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CSS from "csstype";
import images from "../../../assets/images";
import { navLinks } from "../../../helpers/constants";
import "./style.css";

const activeStyle: CSS.Properties = {
  backgroundColor: "#c52d2f",
  color: "white",
  borderRadius: "3px",
};

const Navigation = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo-container" onClick={() => navigate("/")}>
          <button
            className={showMenu ? "small-screen colored" : "small-screen"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="small-screen-bar"></span>
            <span className="small-screen-bar"></span>
            <span className="small-screen-bar"></span>
          </button>
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="big-screen">
          {navLinks.map((link) => (
            <li key={link.id} className={link.group ? "social-media-li" : ""}>
              {link.group ? (
                link.group.map((link) => (
                  <a
                    key={link.subId}
                    target="_blank"
                    href={link.path}
                    rel="noreferrer"
                  >
                    {link.image ? (
                      <img
                        className="img-links"
                        src={link.image}
                        alt={link.title}
                      />
                    ) : (
                      link.title
                    )}
                  </a>
                ))
              ) : (
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  {link.title}
                </NavLink>
              )}
            </li>
          ))}
          <li>
            <input placeholder="Search" />
          </li>
        </ul>
        <ul className={showMenu ? "dropdown-menu" : "dropdown-menu-hidden"}>
          {navLinks.map((link) => (
            <li key={link.id} className={link.group ? "social-media-li" : ""}>
              {link.group ? (
                link.group.map((link) => (
                  <NavLink key={link.subId} to={link.path}>
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
                ))
              ) : (
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  {link.title}
                </NavLink>
              )}
            </li>
          ))}
          <li>
            <input placeholder="Search" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
