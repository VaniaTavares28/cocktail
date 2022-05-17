import { Cocktail, ActionType, Cocktails, CocktailFetchState } from "./types";

const initialCocktails: Cocktails = {
  loading: false,
  error: { hasHappened: false, message: "" },
  drinks: [],
};

const cocktailReducer = (
  state: Cocktails = initialCocktails,
  action: ActionType
) => {
  switch (action.type) {
    case CocktailFetchState.loading:
      return { ...state, loading: true };
    case CocktailFetchState.loaded:
      return {
        ...state,
        loading: false,
        drinks: action.payload as Cocktail[],
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
