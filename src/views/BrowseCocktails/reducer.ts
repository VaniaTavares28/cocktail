import { Cocktail, ActionType, Search } from "../../interfaces";
import { SearchFetchState } from "./actions";

const initialCocktails: Search = {
  loading: false,
  error: { hasHappened: false, message: "" },
  drinks: [],
  searchTerm: "",
  searchLetter: "",
};

const searchReducer = (
  state: Search = initialCocktails,
  action: ActionType
) => {
  switch (action.type) {
    case SearchFetchState.loading:
      return { ...state, loading: true };
    case SearchFetchState.loaded:
      return {
        ...state,
        loading: false,
        drinks: action.payload as Cocktail[],
        searchTerm: "",
        searchLetter: "",
      };
    case SearchFetchState.failed:
      return {
        ...state,
        loading: false,
        error: { hasHappened: true, message: action.payload as string },
      };
    default:
      return state;
  }
};

export default searchReducer;
