import { takeLatest, call, put, all } from "redux-saga/effects";
import { Alert } from "react-native";

import api from "../../../services/api";

import {
  dashFailure,
  dashSuccess,
  promoFailure,
  promoSuccessReset,
  promoSuccess,
} from "./actions";

export function* dashRequestSaga(): any {
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "v1/client/dashboard");

      const { newCompanies, topProducts } = response.data.data;

      yield put(dashSuccess(newCompanies, topProducts));

      return;
    } catch (error) {
      if (i === 5) {
        yield put(dashFailure());
      }
    }
  }
}

export function* promoRequestSaga({ payload }): any {
  const { page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/promotions", {
        params: { page, perpage: 8 },
      });

      const promotions = response.data.data;

      if (page === 1) {
        yield put(promoSuccessReset(promotions));
      } else {
        yield put(promoSuccess(promotions, page));
      }

      return;
    } catch (error) {
      if (i === 5) {
        yield put(promoFailure());
      }
    }
  }
}

export enum TypeKeys {
  DASH_REQUEST = "@dash/DASHBOARD_REQUEST",
  PROMO_REQUEST = "@promo/PROMO_REQUEST",
}

export default all([
  takeLatest(TypeKeys.DASH_REQUEST, dashRequestSaga),
  takeLatest(TypeKeys.PROMO_REQUEST, promoRequestSaga),
]);
