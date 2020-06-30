import produce from "immer";
import { Reducer } from "redux";

import { Category, SlideType } from "~/types";

const INITIAL_STATE = {
  loading: false,
  loadingCategory: false,
  categories: [],
  category: { id: "", title: "", products: [] },
};

type InitialProps = {
  loading: boolean;
  loadingCategory: boolean;
  categories: Category[];
  category: { id: string; title: string; products: SlideType[] };
};

const search: Reducer<InitialProps> = (state = INITIAL_STATE, action) => {
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
      case "@categories/CATEGORIES_ESPECIFY_REQUEST": {
        draft.loading = true;

        if (action.payload.categoryId !== draft.category.id) {
          action.payload.page = 1;
        } else if (action.payload.page === 0) {
          action.payload.page =
            Math.floor(draft.category.products.length / 10) + 1;
        }
        break;
      }
      case "@categories/CATEGORIES_ESPECIFY_SUCCESS": {
        draft.loading = false;
        draft.category.products = [
          ...draft.category.products.slice(0, 10 * action.payload.page),
          ...action.payload.category.products,
        ];
        break;
      }
      case "@categories/CATEGORIES_ESPECIFY_SUCCESS_RESET": {
        draft.loading = false;
        draft.category = action.payload.category;
        break;
      }
      default:
        break;
    }
  });
};

export default search;
