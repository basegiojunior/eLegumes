import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../services/api";

import { cartSuccess, cartFailure } from "./actions";

export function* cartRequestSaga({ payload }: any): any {
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(api.get, "/v1/client/categories", {
        params: { perpage: 10 },
      });

      const { categories } = response.data.data;

      type categoryObjectType = {
        [key: string]: object;
      };

      const categoryObject: categoryObjectType = {};

      for (let e = 0; e < categories.length; e += 1) {
        categoryObject[categories[e].name] = categories[e];
      }

      yield put(cartSuccess(categoryObject));

      return;
    } catch (error) {
      if (i === 5) {
        yield put(cartFailure());
        console.log(error);
      }
    }
  }
}

export enum TypeKeys {
  CART_REQUEST = "@cart/CART_REQUEST",
}

export default all([takeLatest(TypeKeys.CART_REQUEST, cartRequestSaga)]);
