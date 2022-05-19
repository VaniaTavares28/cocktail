// Cocktails

import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { Cocktail, ActionType, ApiResponseType } from "../../interfaces";
import { randomEight } from "../../helpers/functions";

export enum CocktailFetchState {
  loading = "cocktails/loading",
  loaded = "cocktails/loaded",
  failed = "cocktails/error",
}

type CocktailResponseType = ApiResponseType & {
  [key: string]: { drinks: Cocktail[] };
};

const loadingCocktails = (): ActionType => {
  return { type: CocktailFetchState.loading };
};

const failedCocktails = (payload: string): ActionType => {
  return { type: CocktailFetchState.failed, payload };
};

const loadCocktails = (payload: Cocktail[]): ActionType => {
  return { type: CocktailFetchState.loaded, payload };
};

export const fetchAlcoholicsDrink = async (
  dispatch: ThunkDispatch<RootState, {}, ActionType>,
  { searchTerm, searchLetter }: { searchTerm?: string; searchLetter?: string }
) => {
  try {
    dispatch(loadingCocktails());
    let url: string =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    if (searchTerm) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    } else if (searchLetter) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`;
    }
    const resp: CocktailResponseType = await axios.get(url);
    if (resp?.status === 200 && resp?.data) {
      const { drinks } = resp.data as { drinks: Cocktail[] };
      if (!searchLetter && !searchTerm) {
        const eightDrinks = randomEight(drinks);
        dispatch(loadCocktails(eightDrinks));
      } else dispatch(loadCocktails(drinks));
    }
  } catch (error: unknown | { message: string }) {
    dispatch(failedCocktails((error as { message: string }).message));
  }
};