import { Warning } from "../..";
import { Cocktail, Cocktails } from "../../../views/Home/types";
import "./index.css";

const CocktailCard = ({ drink, size }: { size: number; drink: Cocktail }) => {
  return (
    <a href=".">
      <div className={`cocktail-grid-card-${size}`}>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      {drink.strDrink}
    </a>
  );
};

const CocktailSection = ({
  title,
  cocktailsState,
  custom,
}: {
  custom?: boolean;
  title: string;
  cocktailsState: Cocktails;
}) => {
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
    <section className="cocktail-section">
      <h3>{title}</h3>
      <div className={custom ? "cocktail-browse-grid" : "cocktail-grid"}>
        {cocktailsState.drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} size={95} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailSection;
