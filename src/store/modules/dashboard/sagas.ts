import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "~/services/api";

import {
  dashFailure,
  dashSuccess,
  promoFailure,
  promoSuccessReset,
  promoSuccess,
} from "./actions";

// requisição dos produtos mais vendidos e das empresas recentes
export function* dashRequestSaga(): any {
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "v1/client/dashboard");

      const { newCompanies, topProducts } = response.data.data;

      let processNewCompanies: any = [];
      let processTopProducts: any = [];

      // verificar e pré-processar os dados das empresas
      for (let it = 0; it < newCompanies.length; it += 1) {
        processNewCompanies = [
          ...processNewCompanies,
          {
            ...newCompanies[it],
            image: {
              url:
                newCompanies[it].image && newCompanies[it].image.url
                  ? newCompanies[it].image.url
                  : "",
            },
          },
        ];
      }

      // verificar e pré-processar os dados dos produtos
      for (let it = 0; it < topProducts.length; it += 1) {
        if (topProducts[it].weekly_sales) {
          processTopProducts = [
            ...processTopProducts,
            {
              id: topProducts[it].id,
              image: {
                url:
                  topProducts[it].image && topProducts[it].image.url
                    ? topProducts[it].image.url
                    : "",
              },
              title: topProducts[it].name,
              subtitle: `${topProducts[it].weekly_sales} vendidos`,
            },
          ];
        }
      }

      yield put(dashSuccess(processNewCompanies, processTopProducts));

      return;
    } catch (error) {
      if (i === 5) {
        yield put(dashFailure());
      }
    }
  }
}

// requisição das promoções
export function* promoRequestSaga({ payload }: any): any {
  const { page } = payload;
  for (let i = 1; i <= 5; i += 1) {
    try {
      const response = yield call(api.get, "/v1/client/promotions", {
        params: { page, perpage: 8 },
      });

      const promotions = response.data.data;

      let processPromotions: any = [];

      // verificar e pré-processar os dados dos produtos em promoção
      for (let it = 0; it < promotions.length; it += 1) {
        let imageUrl = "";
        let title = "";

        // verifica e seleciona a url da imagem
        if (promotions[it].image && promotions[it].image.url) {
          imageUrl = promotions[it].image.url;
        } else if (
          promotions[it].productDefault.image &&
          promotions[it].productDefault.image.url
        ) {
          imageUrl = promotions[it].productDefault.image.url;
        }

        // verifica e seleciona o nome do produto
        if (promotions[it].description) {
          title = promotions[it].description;
        } else {
          title = promotions[it].productDefault.name;
        }

        processPromotions = [
          ...processPromotions,
          {
            image: {
              url: imageUrl,
            },
            id: promotions[it].productDefault.id,
            title,
            subtitle: `R$ ${promotions[it].price.replace(".", ",")} / ${
              promotions[it].type === "weight"
                ? `${promotions[it].weight}g`
                : "1 uni."
            }`,
            lineThrough: `R$ ${promotions[it].price_promotion.replace(
              ".",
              ","
            )} / ${
              promotions[it].type === "weight"
                ? `${promotions[it].weight}g`
                : "1 uni."
            }`,
          },
        ];
      }

      if (page === 1) {
        yield put(promoSuccessReset(processPromotions));
      } else {
        yield put(promoSuccess(processPromotions, page));
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
