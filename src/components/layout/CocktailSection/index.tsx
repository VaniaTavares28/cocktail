import { Warning, CocktailCard } from "../..";
import { Cocktails, TitleSize } from "../../../interfaces";
import "./style.css";

const CocktailSection = ({
  title,
  cocktails,
  custom,
  size,
}: {
  custom?: boolean;
  title: { size: TitleSize; content: string };
  cocktails: Cocktails;
  size: number;
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
      {TitleSize.lg ? (
        <h1 style={{ marginBottom: "75px" }}>{title.content}</h1>
      ) : TitleSize.sm ? (
        <h3>{title.content}</h3>
      ) : (
        <h2>{title.content}</h2>
      )}
      <div className={custom ? "cocktail-browse-grid" : "cocktail-grid"}>
        {cocktails.drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} size={size} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailSection;
