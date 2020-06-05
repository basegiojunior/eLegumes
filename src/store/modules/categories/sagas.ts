import { takeLatest, call, put, all } from "redux-saga/effects";
import { NavigationActions, StackActions } from "react-navigation";

import { object } from "prop-types";
import * as NavigationService from "../../../Routes/navigationService";

import api from "../../../services/api";

import { categoriesFailure, categoriesSuccess } from "./actions";

export function* categoriesRequestSaga({ payload }: any): any {
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

      yield put(categoriesSuccess(categoryObject));

      return;
    } catch (error) {
      yield put(categoriesFailure());
      console.log(error);
    }
  }
}

export function* categoriesEspecifyRequestSaga({ payload }: any): any {
  const { categoryId, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      if (categoryId === "") {
        response = yield call(api.get, "/v1/client/categories", {
          params: { perpage: 1 },
        });

        const { categories } = response.data.data;

        type categoryObjectType = {
          [key: string]: object;
        };

        const categoryObject: categoryObjectType = {};

        for (let e = 0; e < categories.length; e += 1) {
          categoryObject[categories[e].name] = categories[e];
        }

        yield put(categoriesSuccess(categories));
      } else {
        response = yield call(
          api.get,
          `/v1/client/categories/${categoryId}/produts`,
          {
            params: { perpage: 10, id: categoryId, page },
          }
        );
      }

      const { categories } = response.data.data;

      yield put(categoriesSuccess(categories));

      return;
    } catch (error) {
      yield put(categoriesFailure());
      console.log(error);
    }
  }
}

export enum TypeKeys {
  CATEGORIES_ESPECIFY_REQUEST = "@categories/CATEGORIES_ESPECIFY_REQUEST",
  CATEGORIES_REQUEST = "@categories/CATEGORIES_REQUEST",
}

export default all([
  takeLatest(TypeKeys.CATEGORIES_REQUEST, categoriesRequestSaga),
  takeLatest(
    TypeKeys.CATEGORIES_ESPECIFY_REQUEST,
    categoriesEspecifyRequestSaga
  ),
]);
