import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholicsDrink } from "./actions";
import { AppDispatch, RootState } from "../../store";
import { AlphabeticFilter, CocktailSection } from "../../components";
import { TitleSize } from "../../interfaces";
import images from "../../assets/images";
import "./style.css";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktailsState = useSelector((state: RootState) => state.cocktails);
  useEffect(() => {
    fetchAlcoholicsDrink(dispatch, {});
  }, [dispatch]);

  return (
    <>
      <section className="outer-wrapper" style={{ display: "flex" }}>
        <div className="landing-lateral-image">
          <img src={images.cocktailLeft} alt="cocktail_left" />
        </div>
        <div className="landing-content">
          <h1>Welcome to TheCocktailDB</h1>
          <p>
            An open, crowd-sourced database of drinks and cocktails from around
            the world.
            <br />
            We also offer a{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.thecocktaildb.com/api.php"
            >
              free JSON API
            </a>{" "}
            for anyone wanting to use it.
            <br />
            If you like the site, please consider supporting us on Patreon by
            clicking the link below...
          </p>
          <img src={images.patreonLogo} alt="patreon_logo" />
        </div>
        <div className="landing-lateral-image">
          <img src={images.cocktailRight} alt="cocktail_right" />
        </div>
      </section>
      <CocktailSection
        title={{ size: TitleSize.sm, content: "Popular Drinks" }}
        cocktails={cocktailsState}
        size={95}
      />
      <AlphabeticFilter filterTitle="By Name" />
    </>
  );
};

export default Home;
