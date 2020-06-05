import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  searchLoading: false,
  searchProductsResults: [],
  searchStoresResults: [],
  recentSearchs: [],
};

type InitialProps = {
  searchLoading: boolean;
  searchProductsResults: object[];
  searchStoresResults: object[];
  recentSearchs: string[];
};

const search: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@search/SEARCH_REQUEST": {
        draft.searchLoading = true;
        if (draft.recentSearchs.length === 3) {
          draft.recentSearchs.pop();
        }
        draft.recentSearchs = [action.payload.name, ...draft.recentSearchs];

        break;
      }
      case "@search/SEARCH_SUCCESS": {
        draft.searchLoading = false;
        draft.searchProductsResults = action.payload.searchProductsResults;
        draft.searchStoresResults = action.payload.searchStoresResults;
        break;
      }
      case "@search/SEARCH_FAILURE": {
        draft.searchLoading = false;
        break;
      }
      // PRODUCTS
      case "@search/SEARCH_PRODUCTS_REQUEST": {
        draft.searchLoading = true;
        action.payload.page = draft.searchProductsResults.length / 4 + 1;
        break;
      }
      case "@search/SEARCH_PRODUCTS_SUCCESS": {
        draft.searchLoading = false;
        draft.searchProductsResults = [
          ...draft.searchProductsResults,
          ...action.payload.searchProductsResults,
        ];
        break;
      }
      case "@search/SEARCH_PRODUCTS_FAILURE": {
        draft.searchLoading = false;
        break;
      }
      // STORES
      case "@search/SEARCH_STORES_REQUEST": {
        draft.searchLoading = true;
        action.payload.page = draft.searchStoresResults.length / 4 + 1;
        break;
      }
      case "@search/SEARCH_STORES_SUCCESS": {
        draft.searchLoading = false;
        draft.searchStoresResults = [
          ...draft.searchStoresResults,
          ...action.payload.searchStoresResults,
        ];
        break;
      }
      case "@search/SEARCH_STORES_FAILURE": {
        draft.searchLoading = false;
        break;
      }
      default:
        break;
    }
  });
};

export default search;
