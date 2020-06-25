import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "~/services/api";

import { orderFailure, orderSuccess } from "./actions";

export function* ordersRequestSaga({
  payload,
}: {
  payload: {
    items: {
      items: object[];
      company: string;
    };
  };
}): any {
  const { items, company } = payload.items;

  for (let i = 1; i <= 5; i += 1) {
    try {
      yield call(api.post, "/v1/client/orders", {
        items,
        company,
      });

      yield put(orderSuccess());

      return;
    } catch (error) {
      if (i === 5) {
        yield put(orderFailure());
        console.log(error);
      }
    }
  }
}

export enum TypeKeys {
  ORDERS_REQUEST = "@orders/ORDERS_REQUEST",
}

export default all([takeLatest(TypeKeys.ORDERS_REQUEST, ordersRequestSaga)]);
