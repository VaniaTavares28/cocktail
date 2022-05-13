import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAlcoholicsDrink } from "../features/cocktails/cocktailsSlice";
import "./App.css";
import { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  // const cocktailsState = useSelector((state: RootStore) => state.cocktails);
  useEffect(() => {
    fetchAlcoholicsDrink(dispatch);
  });
  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
