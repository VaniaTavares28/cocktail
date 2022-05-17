import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholicsDrink } from "./actions";
import { AppDispatch, RootState } from "../../store";
import "./index.css";
import { CocktailSection } from "../../components";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktailsState = useSelector((state: RootState) => state.cocktails);
  useEffect(() => {
    fetchAlcoholicsDrink(dispatch);
  }, [dispatch]);

  return (
    <>
      <CocktailSection title="Popular Drinks" cocktailsState={cocktailsState} />
    </>
  );
};

export default Home;
