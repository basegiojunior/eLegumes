import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "~/services/api";

import {
  categoriesFailure,
  categoriesSuccess,
  categoriesEspecifySuccess,
  categoriesEspecifySuccessReset,
} from "./actions";

export function* categoriesRequestSaga({ payload }: any): any {
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(api.get, "/v1/client/categories", {
        params: { perpage: 10 },
      });

      const { categories } = response.data.data;

      let processCategories: any = [];

      for (let it = 0; it < categories.length; it += 1) {
        let products: any = [];

        for (let et = 0; et < categories[it].products.length; et += 1) {
          products = [
            ...products,
            {
              id: categories[it].products[et].id,
              title: categories[it].products[et].name,
              subtitle: "",
              image: {
                url:
                  categories[it].products[et].image &&
                  categories[it].products[et].image.url
                    ? categories[it].products[et].image.url
                    : "",
              },
            },
          ];
        }

        processCategories = [
          ...processCategories,
          {
            id: categories[it].id,
            title: categories[it].name,
            products,
          },
        ];
      }

      yield put(categoriesSuccess(processCategories));

      return;
    } catch (error) {
      if (i === 5) {
        yield put(categoriesFailure());
        console.log(error);
      }
    }
  }
}

export function* categoriesEspecifyRequestSaga({ payload }: any): any {
  const { categoryId, categoryName, page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(
        api.get,
        `/v1/client/categories/${categoryId}/produts`,
        {
          params: { perpage: 10, page },
        }
      );

      const categories = response.data.data;

      let processCategory: any = [];

      for (let it = 0; it < categories.length; it += 1) {
        processCategory = [
          ...processCategory,
          {
            id: categories[it].id,
            title: categories[it].name,
            image: {
              url:
                categories[it].image && categories[it].image.url
                  ? categories[it].image.url
                  : "",
            },
          },
        ];
      }

      const finalResponse = {
        id: categoryId,
        title: categoryName,
        products: processCategory,
      };

      if (page !== 1) {
        yield put(categoriesEspecifySuccess(finalResponse));
      } else {
        yield put(categoriesEspecifySuccessReset(finalResponse));
      }

      return;
    } catch (error) {
      if (i === 5) {
        yield put(categoriesFailure());
        console.log(error);
      }
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
