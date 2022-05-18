import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { Cocktail, ActionType, ApiResponseType } from "../../interfaces";

export enum SearchFetchState {
  loading = "search/loading",
  loaded = "search/loaded",
  failed = "search/error",
}

type SearchResponseType = ApiResponseType & {
  [key: string]: { drinks: Cocktail[] };
};

const loadingSearch = (): ActionType => {
  return { type: SearchFetchState.loading };
};

const loadSearch = (payload: Cocktail[]): ActionType => {
  return { type: SearchFetchState.loaded, payload };
};

const failedSearch = (payload: string): ActionType => {
  return { type: SearchFetchState.failed, payload };
};

export const searchDrinksByInput = async (
  { searchTerm, searchLetter }: { searchTerm?: string; searchLetter?: string },
  dispatch: ThunkDispatch<RootState, {}, ActionType>
) => {
  try {
    dispatch(loadingSearch());
    let url: string = "a";
    if (searchTerm) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    } else if (searchLetter) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`;
    }
    const resp: SearchResponseType = await axios.get(url);
    if (resp?.status === 200 && resp?.data) {
      const { drinks } = resp.data as { drinks: Cocktail[] };
      dispatch(loadSearch(drinks));
    }
  } catch (error: unknown | { message: string }) {
    dispatch(failedSearch((error as { message: string }).message));
  }
};
