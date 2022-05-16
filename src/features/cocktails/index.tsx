import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholicsDrink, cocktailSelector } from "./cocktailsSlice";
import { AppDispatch } from "../../app/store";
import Warning from "../../components/Warning";
import CocktailCard from "./CocktailCard";
import "./index.css";

const CocktailSection = ({ title }: { title: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktailsState = useSelector(cocktailSelector);
  useEffect(() => {
    fetchAlcoholicsDrink(dispatch);
  }, [dispatch]);

  if (cocktailsState.loading || cocktailsState.error.hasHappened)
    return (
      <section className="cocktail-section">
        <Warning
          warning={
            cocktailsState.loading ? "Loading..." : "There was an error..."
          }
        />
      </section>
    );

  return (
    <section>
      <h3>{title}</h3>
      <div className="cocktail-grid">
        {cocktailsState.drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailSection;
