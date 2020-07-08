import produce from "immer";
import { Reducer } from "redux";
import { SlideType, GridType } from "~/types";

const INITIAL_STATE = {
  noPageLoading: false,
  pageLoading: false,
  pageFailure: false,
  newCompanies: [],
  emptyNewCompanies: false,
  topProducts: [],
  emptyTopProducts: [],
  promotions: [],
  emptyPromotions: [],
};

type InitialProps = {
  noPageLoading: boolean;
  pageLoading: boolean;
  pageFailure: boolean;
  newCompanies: SlideType[];
  emptyNewCompanies: boolean;
  topProducts: SlideType[];
  emptyTopProducts: boolean;
  promotions: GridType[];
  emptyPromotions: boolean;
};

const dash: Reducer<InitialProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@dash/DASHBOARD_REQUEST": {
        draft.noPageLoading = true;
        break;
      }
      case "@dash/DASHBOARD_SUCCESS": {
        draft.noPageLoading = false;
        draft.newCompanies = action.payload.newCompanies;
        if (action.payload.newCompanies.length === 0) {
          draft.emptyNewCompanies = true;
        } else {
          draft.emptyNewCompanies = false;
        }

        draft.topProducts = action.payload.topProducts;
        if (action.payload.topProducts.length === 0) {
          draft.emptyTopProducts = true;
        } else {
          draft.emptyTopProducts = false;
        }
        break;
      }
      case "@dash/DASHBOARD_FAILURE": {
        draft.noPageLoading = false;
        break;
      }
      case "@promo/PROMO_REQUEST": {
        draft.pageLoading = true;
        if (action.payload.page === 0) {
          action.payload.page = Math.floor(draft.promotions.length / 8) + 1;
        }
        break;
      }
      case "@promo/PROMO_SUCCESS_RESET": {
        draft.pageLoading = false;
        draft.pageFailure = false;
        draft.promotions = action.payload.promotions;
        if (action.payload.promotions.length === 0) {
          draft.emptyPromotions = true;
        } else {
          draft.emptyPromotions = false;
        }
        break;
      }
      case "@promo/PROMO_SUCCESS": {
        draft.pageLoading = false;
        draft.pageFailure = false;
        draft.promotions = [
          ...draft.promotions.slice(0, 8 * action.payload.page),
          ...action.payload.promotions,
        ];
        break;
      }
      case "@promo/PROMO_FAILURE": {
        draft.pageLoading = false;
        draft.pageFailure = true;
        break;
      }
      default:
        break;
    }
  });
};

export default dash;
