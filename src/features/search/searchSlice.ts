interface Search {
  active: boolean;
  term: string;
}

enum SearchActions {
  search = "search/searchDrinks",
  clear = "search/clearSearch",
}

type SearchActionType = { type: string; payload?: string };

export const insertSearchTerm = (payload: string): SearchActionType => {
  return { type: SearchActions.search, payload };
};

export const clearSearch = (): SearchActionType => {
  return { type: SearchActions.clear };
};

const searchReducer = (state: Search, action: SearchActionType) => {
  switch (action.type) {
    case SearchActions.search:
      return { active: true, term: action.payload };
    case SearchActions.clear:
      return { active: false, term: "" };
    default:
      return state;
  }
};

export default searchReducer;
