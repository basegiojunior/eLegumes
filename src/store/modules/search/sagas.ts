import { takeLatest, call, put, all } from "redux-saga/effects";
import { NavigationActions, StackActions } from "react-navigation";

import * as NavigationService from "../../../Routes/navigationService";

import api from "../../../services/api";

import {
  searchFailure,
  searchSuccess,
  searchProductsFailure,
  searchProductsSuccess,
  searchCompaniesFailure,
  searchCompaniesSuccess,
} from "./actions";

export function* searchRequestSaga({ payload }: any): any {
  const { name } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/search", {
        params: { name, perpage: 4 },
      });

      // console.log(response.data.products.data);

      const products = response.data.products.data;
      const companies = response.data.companies.data;

      yield put(searchSuccess(products, companies));
      NavigationService.navigate("ResultadosBusca", { search: name });

      return;
    } catch (error) {
      yield put(searchFailure());
      console.log(error);
    }
  }
}

export function* searchProductsRequestSaga({ payload }: any): any {
  const { name, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/search/products", {
        params: { name, page, perpage: 4 },
      });

      // console.log(response.data);

      const products = response.data.data;

      yield put(searchProductsSuccess(products));

      return;
    } catch (error) {
      yield put(searchProductsFailure());
      console.log(error);
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

      yield put(searchCompaniesSuccess(companies));

      return;
    } catch (error) {
      yield put(searchCompaniesFailure());
      console.log(error);
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
