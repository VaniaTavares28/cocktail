import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../app/store";

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

export type ResponseType = {
  [key: string]: string | number | { drinks: Cocktail[] };
};

export type ActionType = { type: string; payload?: string | Cocktail[] };

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
