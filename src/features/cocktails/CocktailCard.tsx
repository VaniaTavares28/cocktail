import React from "react";
import { Cocktail } from "./cocktailTypes";

const CocktailCard = ({ drink }: { drink: Cocktail }) => {
  return (
    <a href=".">
      <div className="cocktail-grid-card">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      {drink.strDrink}
    </a>
  );
};

export default CocktailCard;
