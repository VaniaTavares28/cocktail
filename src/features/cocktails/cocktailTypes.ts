import { ApiResponseType } from "../generalTypes";

export enum CocktailFetchState {
  loading = "cocktails/loading",
  loaded = "cocktails/loaded",
  failed = "cocktails/error",
}

export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface Cocktails {
  drinks: Cocktail[];
  error: { hasHappened: boolean; message: string };
  loading: boolean;
}

export type CocktailDispatchTypes =
  | { type: string }
  | { type: string; payload: Cocktail[] };

export type CocktailResponseType = ApiResponseType & {
  [key: string]: { drinks: Cocktail[] };
};

export type ActionType = { type: string; payload?: string | Cocktail[] };
