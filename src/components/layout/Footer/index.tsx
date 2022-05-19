import React from "react";
import images from "../../../assets/images";
import "./style.css";

const Footer = () => {
  return (
    <footer className="outer-wrapper">
      <div className="footer-section">
        <article>
          <p>© 2022 TheCocktailDB.</p>
          <div>
            <p style={{ paddingInlineEnd: "4px" }}>Proudly built in the UK </p>
            <img className="footer-flag" src={images.ukflag} alt="uk flag" />
          </div>
        </article>
        <article className="footer-image-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.thesportsdb.com/"
          >
            <img src={images.sportdb} alt="sportdb link" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.theaudiodb.com/"
          >
            <img src={images.audiodb} alt="audiodb link" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.themealdb.com/">
            <img src={images.mealdb} alt="mealdb link" />
          </a>
        </article>
        <ul className="footer-links">
          <li>
            <a href=".">Missing</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a href=".">FAQ</a>
          </li>
          <li>
            <a href=".">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
