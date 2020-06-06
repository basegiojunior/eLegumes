import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  searchLoading: false,
  searchLoadingEspecify: false,
  searchProductsResults: [],
  searchCompaniesResults: [],
  recentSearchs: [],
};

type InitialProps = {
  searchLoading: boolean;
  searchLoadingEspecify: boolean;
  searchProductsResults: object[];
  searchCompaniesResults: object[];
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
        draft.searchCompaniesResults = action.payload.searchCompaniesResults;
        break;
      }
      case "@search/SEARCH_FAILURE": {
        draft.searchLoading = false;
        break;
      }
      // PRODUCTS
      case "@search/SEARCH_PRODUCTS_REQUEST": {
        draft.searchLoadingEspecify = true;
        if (action.payload.page === 0) {
          action.payload.page = Math.floor(
            draft.searchProductsResults.length / 10 + 1
          );
        }
        break;
      }
      case "@search/SEARCH_PRODUCTS_SUCCESS": {
        draft.searchLoadingEspecify = false;
        draft.searchProductsResults = [
          ...draft.searchProductsResults.slice(0, 10 * action.payload.page),
          ...action.payload.searchProductsResults,
        ];
        break;
      }
      case "@search/SEARCH_PRODUCTS_SUCCESS_RESET": {
        draft.searchLoadingEspecify = false;
        draft.searchProductsResults = action.payload.searchProductsResults;
        break;
      }
      case "@search/SEARCH_PRODUCTS_FAILURE": {
        draft.searchLoadingEspecify = false;
        break;
      }
      // COMPANIES
      case "@search/SEARCH_COMPANIES_REQUEST": {
        draft.searchLoadingEspecify = true;
        if (action.payload.page === 0) {
          action.payload.page = Math.floor(
            draft.searchCompaniesResults.length / 10 + 1
          );
        }
        break;
      }
      case "@search/SEARCH_COMPANIES_SUCCESS": {
        draft.searchLoadingEspecify = false;
        draft.searchCompaniesResults = [
          ...draft.searchCompaniesResults.slice(0, 10 * action.payload.page),
          ...action.payload.searchCompaniesResults,
        ];
        break;
      }
      case "@search/SEARCH_COMPANIES_SUCCESS_RESET": {
        draft.searchLoadingEspecify = false;
        draft.searchCompaniesResults = action.payload.searchCompaniesResults;
        break;
      }
      case "@search/SEARCH_COMPANIES_FAILURE": {
        draft.searchLoadingEspecify = false;
        break;
      }
      default:
        break;
    }
  });
};

export default search;
