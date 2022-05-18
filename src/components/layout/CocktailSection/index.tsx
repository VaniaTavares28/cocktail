import { Warning, CocktailCard } from "../..";
import { Cocktails, Search } from "../../../interfaces";
import "./style.css";

const CocktailSection = ({
  title,
  cocktails,
  custom,
}: {
  custom?: boolean;
  title: string;
  cocktails: Cocktails | Search;
}) => {
  if (cocktails.loading || cocktails.error.hasHappened)
    return (
      <section className="cocktail-section">
        <Warning
          warning={cocktails.loading ? "Loading..." : "There was an error..."}
        />
      </section>
    );

  return (
    <section className="cocktail-section">
      <h3>{title}</h3>
      <div className={custom ? "cocktail-browse-grid" : "cocktail-grid"}>
        {cocktails.drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} size={95} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailSection;
