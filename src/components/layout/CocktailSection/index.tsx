import { Warning, CocktailCard } from "../..";
import { Cocktails } from "../../../interfaces";
import "./index.css";

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
