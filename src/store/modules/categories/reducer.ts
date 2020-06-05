import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  loading: false,
  categories: [],
};

type InitialProps = {
  loading: boolean;
  categories: object[];
};

const search: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@categories/CATEGORIES_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@categories/CATEGORIES_SUCCESS": {
        draft.loading = false;
        draft.categories = action.payload.categories;
        break;
      }
      case "@categories/CATEGORIES_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
        break;
    }
  });
};

export default search;
