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

export interface ApiResponseType {
  [key: string]: string | number | boolean;
}

export interface ActionType {
  type: string;
  payload?: string | Cocktail[];
}

export enum TitleSize {
  sm = "small",
  md = "medium",
  lg = "large",
}
