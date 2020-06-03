import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  searchLoading: false,
  searchProductsResults: [],
  searchStoresResults: [],
};

type InitialProps = {
  searchLoading: boolean;
  searchProductsResults: object[];
  searchStoresResults: object[];
};

const search: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@search/SEARCH_REQUEST": {
        draft.searchLoading = true;
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
      default:
        break;
    }
  });
};

export default search;
