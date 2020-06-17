import { takeLatest, call, put, all } from "redux-saga/effects";
import { NavigationActions, StackActions } from "react-navigation";

import { object } from "prop-types";
import * as NavigationService from "../../../Routes/navigationService";

import api from "../../../services/api";

import {
  companieProductsFailure,
  companieProductsSuccess,
  companieProductsSuccessReset,
  companieCommentsFailure,
  companieCommentsSuccess,
  companieCommentsSuccessReset,
  companieFailure,
  companieSuccess,
  companiesFromProductsFailure,
  companiesFromProductsSuccess,
} from "./actions";

export function* companieProductsRequestSaga({ payload }: any): any {
  const { companieId, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(
        api.get,
        `/v1/client/company/${companieId}/products`,
        {
          params: { perpage: 10, page },
        }
      );

      const products = response.data.data;

      if (page === 1) {
        yield put(companieProductsSuccessReset(products, companieId));
      } else {
        yield put(companieProductsSuccess(products, page));
      }

      return;
    } catch (error) {
      yield put(companieProductsFailure());
      console.log(error);
    }
  }
}

export function* companieRequestSaga({ payload }: any): any {
  const { companieId } = payload;
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(api.get, `/v1/client/company/${companieId}`);

      const products = response.data.data.company;

      yield put(companieSuccess(products));

      return;
    } catch (error) {
      yield put(companieFailure());
      console.log(error);
    }
  }
}

export function* companieCommentsRequestSaga({ payload }: any): any {
  const { companieId, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(
        api.get,
        `/v1/client/company/${companieId}/comments`,
        {
          params: { perpage: 10, page },
        }
      );

      const comments = response.data.data;

      if (page === 1) {
        yield put(companieCommentsSuccessReset(comments, companieId));
      } else {
        yield put(companieCommentsSuccess(comments, page));
      }

      return;
    } catch (error) {
      yield put(companieCommentsFailure());
      console.log(error);
    }
  }
}

export function* companiesFromProductsRequestSaga({ payload }: any): any {
  const { productId } = payload;
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(
        api.get,
        `/v1/client/companies/sell/product_default/${productId}`
      );

      const companies = response.data.data;

      yield put(companiesFromProductsSuccess(companies, productId));

      return;
    } catch (error) {
      yield put(companiesFromProductsFailure());
      console.log(error);
    }
  }
}

export enum TypeKeys {
  COMPANIES_PRODUCTS_REQUEST = "@companies/COMPANIES_PRODUCTS_REQUEST",
  COMPANIES_COMMENTS_REQUEST = "@companies/COMPANIES_COMMENTS_REQUEST",
  COMPANIE_REQUEST = "@companies/COMPANIE_REQUEST",
  COMPANIES_FROM_PRODUCTS_REQUEST = "@companies/COMPANIES_FROM_PRODUCTS_REQUEST",
}

export default all([
  takeLatest(TypeKeys.COMPANIES_PRODUCTS_REQUEST, companieProductsRequestSaga),
  takeLatest(TypeKeys.COMPANIE_REQUEST, companieRequestSaga),
  takeLatest(TypeKeys.COMPANIES_COMMENTS_REQUEST, companieCommentsRequestSaga),
  takeLatest(
    TypeKeys.COMPANIES_FROM_PRODUCTS_REQUEST,
    companiesFromProductsRequestSaga
  ),
]);
