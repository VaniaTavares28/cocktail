// Cocktails

import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { Cocktail, ActionType, ApiResponseType } from "../../interfaces";

export enum CocktailFetchState {
  loading = "cocktails/loading",
  loaded = "cocktails/loaded",
  failed = "cocktails/error",
}

type CocktailResponseType = ApiResponseType & {
  [key: string]: { drinks: Cocktail[] };
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
