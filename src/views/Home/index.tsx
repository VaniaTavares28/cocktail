import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholicsDrink } from "./actions";
import { AppDispatch, RootState } from "../../store";
import { CocktailSection, Navigation } from "../../components";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktailsState = useSelector((state: RootState) => state.cocktails);
  useEffect(() => {
    fetchAlcoholicsDrink(dispatch);
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <CocktailSection title="Popular Drinks" cocktailsState={cocktailsState} />
    </>
  );
};

export default Home;