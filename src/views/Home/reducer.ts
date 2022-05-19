import { Cocktail, ActionType, Cocktails } from "../../interfaces";
import { CocktailFetchState } from "./actions";

const initialCocktails: Cocktails = {
  loading: false,
  error: { hasHappened: false, message: "" },
  drinks: [],
  search: undefined,
};

const cocktailReducer = (
  state: Cocktails = initialCocktails,
  action: ActionType
) => {
  switch (action.type) {
    case CocktailFetchState.loading:
      return { ...state, loading: true, drinks: [] };
    case CocktailFetchState.loaded:
      return {
        ...state,
        loading: false,
        drinks: action.payload as Cocktail[],
      };
    case CocktailFetchState.search:
      return {
        ...state,
        loading: false,
        search: action.payload as Cocktail[],
      };
    case CocktailFetchState.clearSearch:
      return {
        ...state,
        search: undefined,
      };
    case CocktailFetchState.failed:
      return {
        ...state,
        loading: false,
        error: { hasHappened: true, message: action.payload as string },
      };
    default:
      return state;
  }
};

export default cocktailReducer;
