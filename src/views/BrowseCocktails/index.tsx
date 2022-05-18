import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchDrinksByInput } from "./actions";
import { AppDispatch, RootState } from "../../store";
import { CocktailSection } from "../../components";
// import "./style.css";

const BrowseCocktails = () => {
  const params = useParams();
  const { drinkTerm, drinkLetter } = params;
  const dispatch = useDispatch<AppDispatch>();
  const searchCocktails = useSelector((state: RootState) => state.search);
  useEffect(() => {
    if (drinkTerm) {
      searchDrinksByInput({ searchTerm: drinkTerm }, dispatch);
    } else if (drinkLetter) {
      searchDrinksByInput({ searchLetter: drinkLetter }, dispatch);
    }
  }, [dispatch, drinkLetter, drinkTerm]);

  return (
    <div>
      <h1>Browse Cocktails</h1>
      {!drinkLetter && !drinkTerm ? (
        <p>No drinks found</p>
      ) : (
        <CocktailSection custom title="" cocktails={searchCocktails} />
      )}
    </div>
  );
};

export default BrowseCocktails;
