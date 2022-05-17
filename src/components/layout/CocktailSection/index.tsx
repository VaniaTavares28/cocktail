import { CocktailCard, Warning } from "../..";
import { Cocktails } from "../../../views/Home/types";

const CocktailSection = ({
  title,
  cocktailsState,
}: {
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
    <section>
      <h3>{title}</h3>
      <div className="cocktail-grid">
        {cocktailsState.drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} size={95} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailSection;
