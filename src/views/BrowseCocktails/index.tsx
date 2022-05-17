import React from "react";
import { useParams } from "react-router-dom";

const BrowseCocktails = () => {
  const params = useParams();
  const { drinkTerm, drinkLetter } = params;
  return (
    <div>
      <h1>Browse Cocktails</h1>
      {!drinkLetter && !drinkTerm ? <p>No drinks found</p> : ""}
    </div>
  );
};

export default BrowseCocktails;
