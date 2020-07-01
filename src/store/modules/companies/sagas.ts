import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "~/services/api";

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

      let processed: any = [];
      const products = response.data.data;

      for (let e = 0; e < products.length; e += 1) {
        let image;
        let price;

        if (products[e].active_promotion) {
          price = `R$ ${products[e].price_promotion.replace(".", ",")} / ${
            products[e].type === "weight" ? `${products[e].weight}g` : "1 uni."
          }`;
        } else {
          price = `R$ ${products[e].price.replace(".", ",")} / ${
            products[e].type === "weight" ? `${products[e].weight}g` : "1 uni."
          }`;
        }

        if (products[e].image && products[e].image.url) {
          image = products[e].image;
        } else if (
          products[e].productDefault.image &&
          products[e].productDefault.image.url
        ) {
          image = products[e].productDefault.image;
        } else {
          image = {
            url: "",
          };
        }

        processed = [
          ...processed,
          {
            id: products[e].productDefault.id,
            title: products[e].name
              ? products[e].name
              : products[e].productDefault.name,
            subtitle: price,
            image,
          },
        ];
      }

      if (page === 1) {
        yield put(companieProductsSuccessReset(processed, companieId));
      } else {
        yield put(companieProductsSuccess(processed, page));
      }

      return;
    } catch (error) {
      if (i === 5) {
        yield put(companieProductsFailure());
        console.log(error);
      }
    }
  }
}

export function* companieRequestSaga({ payload }: any): any {
  const { companieId } = payload;
  for (let i = 1; i <= 5; i += 1) {
    let response;

    try {
      response = yield call(api.get, `/v1/client/company/${companieId}`);

      const companie = response.data.data.company;

      const processCompanie = {
        id: companie.id,
        image: {
          url: companie.image && companie.image.url ? companie.image.url : "",
        },
        address: `${companie.address.street}, ${companie.address.neighborhood}`,
        title: companie.name,
        phone: companie.primary_phone,
        rating: Math.round(parseFloat(companie.rating)),
        totalStars: companie.totalStars,
        stars: companie.stars,
      };

      yield put(companieSuccess(processCompanie));

      return;
    } catch (error) {
      if (i === 5) {
        yield put(companieFailure());
        console.log(error);
      }
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
      if (i === 5) {
        yield put(companieCommentsFailure());
        console.log(error);
      }
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
            rating: Math.round(companies[it].rating),
            product: {
              id: companies[it].product.productDefault.id,
              title: companies[it].product.productDefault.name,
              price: companies[it].product.active_promotion
                ? parseFloat(companies[it].product.price_promotion)
                : parseFloat(companies[it].product.price),
              image: {
                url:
                  companies[it].product.image && companies[it].product.image.url
                    ? companies[it].product.image.url
                    : companies[it].product.productDefault.image.url,
              },
              typeString:
                companies[it].product.type === "weight"
                  ? `aproximadamente ${companies[it].product.weight} g`
                  : "1 unidade",
              weight:
                companies[it].product.type === "weight"
                  ? companies[it].product.weight
                  : undefined,
            },
          },
        ];
      }

      yield put(companiesFromProductsSuccess(processCompanies, productId));

      return;
    } catch (error) {
      if (i === 5) {
        yield put(companiesFromProductsFailure());
        console.log(error);
      }
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
