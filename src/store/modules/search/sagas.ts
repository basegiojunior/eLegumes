import { takeLatest, call, put, all } from "redux-saga/effects";

import * as NavigationService from "~/Routes/navigationService";

import api from "~/services/api";

import {
  searchFailure,
  searchSuccess,
  searchProductsFailure,
  searchProductsSuccess,
  searchProductsSuccessReset,
  searchCompaniesFailure,
  searchCompaniesSuccess,
  searchCompaniesSuccessReset,
} from "./actions";

export function* searchRequestSaga({ payload }: any): any {
  const { name } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/search", {
        params: { name, perpage: 10 },
      });

      const products = response.data.products.data;
      const companies = response.data.companies.data;

      let processProducts: any = [];
      let processCompanies: any = [];

      for (let it = 0; it < products.length; it += 1) {
        processProducts = [
          ...processProducts,
          {
            id: products[it].id,
            title: products[it].name,
            image: {
              url:
                products[it].image && products[it].image.url
                  ? products[it].image.url
                  : "",
            },
          },
        ];
      }

      for (let it = 0; it < companies.length; it += 1) {
        processCompanies = [
          ...processCompanies,
          {
            id: companies[it].id,
            title: companies[it].name,
            image: {
              url:
                companies[it].image && companies[it].image.url
                  ? companies[it].image.url
                  : "",
            },
          },
        ];
      }

      yield put(searchSuccess(processProducts, processCompanies));
      NavigationService.navigate("ResultadosBusca", { search: name });

      return;
    } catch (error) {
      if (i === 5) {
        yield put(searchFailure());
        console.log(error);
      }
    }
  }
}

export function* searchProductsRequestSaga({ payload }: any): any {
  const { name, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/search/products", {
        params: { name, page, perpage: 10 },
      });

      const products = response.data.data;
      let processProducts: any = [];

      for (let it = 0; it < products.length; it += 1) {
        processProducts = [
          ...processProducts,
          {
            id: products[it].id,
            title: products[it].name,
            image: {
              url:
                products[it].image && products[it].image.url
                  ? products[it].image.url
                  : "",
            },
          },
        ];
      }

      if (page === 1) {
        yield put(searchProductsSuccessReset(processProducts));
      } else {
        yield put(searchProductsSuccess(processProducts, page));
      }

      return;
    } catch (error) {
      if (i === 5) {
        yield put(searchProductsFailure());
        console.log(error);
      }
    }
  }
}

export function* searchCompaniesRequestSaga({ payload }: any): any {
  const { name, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/search/companies", {
        params: { name, page, perpage: 4 },
      });

      // console.log(response.data.products.data);

      const companies = response.data.data;
      let processCompanies: any = [];

      for (let it = 0; it < companies.length; it += 1) {
        processCompanies = [
          ...processCompanies,
          {
            id: companies[it].id,
            title: companies[it].name,
            image: {
              url:
                companies[it].image && companies[it].image.url
                  ? companies[it].image.url
                  : "",
            },
          },
        ];
      }

      if (page === 1) {
        yield put(searchCompaniesSuccessReset(processCompanies));
      } else {
        yield put(searchCompaniesSuccess(processCompanies, page));
      }

      return;
    } catch (error) {
      if (i === 5) {
        yield put(searchCompaniesFailure());
        console.log(error);
      }
    }
  }
}

export enum TypeKeys {
  SEARCH_REQUEST = "@search/SEARCH_REQUEST",
  SEARCH_PRODUCTS_REQUEST = "@search/SEARCH_PRODUCTS_REQUEST",
  SEARCH_COMPANIES_REQUEST = "@search/SEARCH_COMPANIES_REQUEST",
}

export default all([
  takeLatest(TypeKeys.SEARCH_REQUEST, searchRequestSaga),
  takeLatest(TypeKeys.SEARCH_PRODUCTS_REQUEST, searchProductsRequestSaga),
  takeLatest(TypeKeys.SEARCH_COMPANIES_REQUEST, searchCompaniesRequestSaga),
]);
