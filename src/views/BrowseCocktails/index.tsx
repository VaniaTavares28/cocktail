import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholicsDrink } from "../Home/actions";
import { AppDispatch, RootState } from "../../store";
import { TitleSize } from "../../interfaces";
import { CocktailSection } from "../../components";

const BrowseCocktails = () => {
  const params = useParams();
  const { drinkTerm, drinkLetter } = params;

  const dispatch = useDispatch<AppDispatch>();
  const searchCocktails = useSelector((state: RootState) => state.cocktails);
  useEffect(() => {
    if (drinkTerm) {
      fetchAlcoholicsDrink(dispatch, { searchTerm: drinkTerm });
    } else if (drinkLetter) {
      fetchAlcoholicsDrink(dispatch, { searchLetter: drinkLetter });
    }
  }, [dispatch, drinkLetter, drinkTerm]);

  return (
    <>
      {!drinkLetter && !drinkTerm ? (
        <div>
          <h1 style={{ marginBottom: "75px" }}>Browse Cocktails</h1>
          <p>No drinks found</p>
        </div>
      ) : (
        <CocktailSection
          custom
          title={{ size: TitleSize.lg, content: "Browse Cocktails" }}
          cocktails={searchCocktails}
          size={100}
        />
      )}
    </>
  );
};

export default BrowseCocktails;
