import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholicsDrink } from "./actions";
import { AppDispatch, RootState } from "../../store";
import { AlphabeticFilter, CocktailSection, SearchField } from "../../components";
import { TitleSize } from "../../interfaces";
import images from "../../assets/images";
import "./style.css";
import { homeTotals } from "../../helpers/constants";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktailsState = useSelector((state: RootState) => state.cocktails);
  useEffect(() => {
    fetchAlcoholicsDrink(dispatch, {});
  }, [dispatch]);

  return (
    <>
      <section className="outer-wrapper">
        <div className="landing-section-top">
          <article className="landing-lateral-image">
            <img src={images.cocktailLeft} alt="cocktail_left" />
          </article>
          <article className="landing-content">
            <h1>Welcome to TheCocktailDB</h1>
            <p>
              An open, crowd-sourced database of drinks and cocktails from
              around the world.
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
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.patreon.com/thedatadb"
            >
              <img src={images.patreonLogo} alt="patreon_logo" />
              <br />
              Click to Support: Currently 750 supporters
            </a>
          </article>
          <article className="landing-lateral-image">
            <img src={images.cocktailRight} alt="cocktail_right" />
          </article>
        </div>
        <div className="landing-section-bottom">
          <SearchField placeholder="Search for a Cocktail..." includeButton />
          <div className="span-totals">
            {homeTotals.map((total) => (
              <span key={total.id}>
                <div className="span-image">
                  <img src={total.src} alt={total.intro} />
                </div>
                <strong>{total.intro}</strong>: {total.amount}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CocktailSection
        search={false}
        title={{ size: TitleSize.sm, content: "Popular Drinks" }}
        cocktails={cocktailsState}
        size={95}
      />
      <AlphabeticFilter filterTitle="By Name" />
    </>
  );
};

export default Home;
