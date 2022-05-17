import { Cocktail } from "../../interfaces";
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

export default CocktailCard;
