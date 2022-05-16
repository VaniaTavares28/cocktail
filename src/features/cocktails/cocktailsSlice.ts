import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../app/store";

import {
  Cocktail,
  CocktailResponseType,
  ActionType,
  Cocktails,
  CocktailFetchState,
} from "./cocktailTypes";

const initialCocktails: Cocktails = {
  loading: false,
  error: { hasHappened: false, message: "" },
  drinks: [],
};

const loadingCocktails = (): {
  type: string;
} => {
  return { type: CocktailFetchState.loading };
};

const failedCocktails = (
  payload: string
): {
  type: string;
  payload: string;
} => {
  return { type: CocktailFetchState.failed, payload };
};

const loadCocktails = (
  payload: Cocktail[]
): {
  type: string;
  payload: Cocktail[];
} => {
  return { type: CocktailFetchState.loaded, payload };
};

export const fetchAlcoholicsDrink = async (
  dispatch: ThunkDispatch<RootState, {}, ActionType>
) => {
  try {
    dispatch(loadingCocktails());
    const url: string =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const resp: CocktailResponseType = await axios.get(url);
    if (resp?.status === 200 && resp?.data) {
      const { drinks } = resp.data as { drinks: Cocktail[] };
      dispatch(loadCocktails(drinks));
    }
  } catch (error: unknown | { message: string }) {
    dispatch(failedCocktails((error as { message: string }).message));
  }
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
        loading: false,
        error: false,
        drinks: action.payload as Cocktail[],
      };
    case CocktailFetchState.failed:
      return {
        ...state,
        loading: false,
        error: { hasHappened: true, message: action.payload },
      };
    default:
      return state;
  }
};

export default cocktailReducer;
