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

export interface Search extends Cocktails {
  searchTerm?: string;
  searchLetter?: string;
}

export interface ApiResponseType {
  [key: string]: string | number | boolean;
}

export interface ActionType {
  type: string;
  payload?: string | Cocktail[];
}
