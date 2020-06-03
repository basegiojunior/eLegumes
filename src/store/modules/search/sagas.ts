import { takeLatest, call, put, all } from "redux-saga/effects";
import { NavigationActions, StackActions } from "react-navigation";

import * as NavigationService from "../../../Routes/navigationService";

import api from "../../../services/api";

import { searchFailure, searchSuccess } from "./actions";

export function* searchRequestSaga({ payload }: any): any {
  const { name } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/search", {
        params: { name, perpage: 10 },
      });

      // console.log(response.data.products.data);

      const products = response.data.products.data;
      const companies = response.data.companies.data;

      yield put(searchSuccess(products, companies));
      NavigationService.navigate("ResultadosBusca");

      return;
    } catch (error) {
      yield put(searchFailure());
      console.log(error);
    }
  }
}

export enum TypeKeys {
  SEARCH_REQUEST = "@search/SEARCH_REQUEST",
}

export default all([takeLatest(TypeKeys.SEARCH_REQUEST, searchRequestSaga)]);
