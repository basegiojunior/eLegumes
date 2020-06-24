/* eslint-disable @typescript-eslint/camelcase */
import produce from "immer";
import { Reducer } from "redux";
import { string } from "prop-types";
import { CompanieFromProduct, CompaniePage, Product } from "../../../types";

const INITIAL_STATE = {
  loading: false,
  loadingProduct: false,
  companieProducts: { id: "", products: [] },
  companieComments: { id: "", comments: [] },
  companie: {
    id: "",
    name: "",
    owner: "",
    rating: 0,
    totalStars: 0,
    primary_phone: "",
    secundary_phone: "",
    image: {
      url: "",
    },
    address: {
      id: "",
      description: "",
      street: "",
      cep: 0,
      neighborhood: "",
      city: "",
      state: "",
    },
    stars: {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    },
  },
  companiesFromProduct: { id: "", companies: [] },
};

type InitialProps = {
  loading: boolean;
  loadingProduct: boolean;
  companieProducts: { id: string; products: Product[] };
  companieComments: {
    id: string;
    comments: {
      id: string;
      rate: number;
      comment: string;
      user: { id: string; username: string };
    }[];
  };
  companiesFromProduct: { id: string; companies: CompanieFromProduct[] };
  companie: CompaniePage;
};

const companie: Reducer<InitialProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@companies/COMPANIES_PRODUCTS_REQUEST": {
        draft.loading = true;
        if (action.payload.page !== 1) {
          if (action.payload.id === draft.companieProducts.id) {
            action.payload.page =
              Math.floor(draft.companieProducts.products.length / 10) + 1;
          } else {
            action.payload.page = 1;
          }
        }
        break;
      }
      case "@companies/COMPANIES_PRODUCTS_SUCCESS": {
        draft.loading = false;
        draft.companieProducts.products = [
          ...draft.companieProducts.products.slice(0, 10 * action.payload.page),
          ...action.payload.companieProducts,
        ];
        break;
      }
      case "@companies/COMPANIES_PRODUCTS_SUCCESS_RESET": {
        draft.loading = false;
        draft.companieProducts.products = action.payload.companieProducts;
        draft.companieProducts.id = action.payload.id;
        break;
      }
      case "@companies/COMPANIES_PRODUCTS_FAILURE": {
        draft.loading = false;
        break;
      }

      // COMPANIE
      case "@companies/COMPANIE_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@companies/COMPANIE_SUCCESS": {
        draft.loading = false;
        draft.companie = action.payload.companie;
        break;
      }
      case "@companies/COMPANIE_FAILURE": {
        draft.loading = false;
        break;
      }

      // COMMENTS
      case "@companies/COMPANIES_COMMENTS_REQUEST": {
        draft.loading = true;
        if (action.payload.page !== 1) {
          if (action.payload.id === draft.companieComments.id) {
            action.payload.page =
              Math.floor(draft.companieComments.comments.length / 10) + 1;
          } else {
            action.payload.page = 1;
          }
        }
        break;
      }
      case "@companies/COMPANIES_COMMENTS_SUCCESS": {
        draft.loading = false;
        draft.companieComments.comments = [
          ...draft.companieComments.comments.slice(0, 10 * action.payload.page),
          ...action.payload.companieComments,
        ];
        break;
      }
      case "@companies/COMPANIES_COMMENTS_SUCCESS_RESET": {
        draft.loading = false;
        draft.companieComments.comments = action.payload.companieComments;
        draft.companieComments.id = action.payload.id;
        break;
      }
      case "@companies/COMPANIES_COMMENTS_FAILURE": {
        draft.loading = false;
        break;
      }

      // COMPANIES FROM PRODUCT
      case "@companies/COMPANIES_FROM_PRODUCTS_REQUEST": {
        draft.loadingProduct = true;
        break;
      }
      case "@companies/COMPANIES_FROM_PRODUCTS_SUCCESS": {
        draft.loadingProduct = false;
        draft.companiesFromProduct.companies = action.payload.companies;
        draft.companiesFromProduct.id = action.payload.id;
        break;
      }
      case "@companies/COMPANIES_FROM_PRODUCTS_FAILURE": {
        draft.loadingProduct = false;
        break;
      }
      default:
        break;
    }
  });
};

export default companie;
