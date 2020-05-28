import { takeLatest, call, put, all } from "redux-saga/effects";
import { Alert } from "react-native";

import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  for (let i = 1; i <= 5; i += 1) {
    try {
      const emailPayload = payload.email;
      const passwordPayload = payload.password;

      const response = yield call(api.post, "v1/auth/client/login", {
        email: emailPayload,
        password: passwordPayload,
      });

      const { token } = response.data;
      // const { name } = response.data.passenger.user;
      // const { email } = response.data.passenger.user;
      // const { phone } = response.data.passenger.user;
      // const { id } = response.data.passenger.user;

      // api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(signInSuccess(token));

      return;
    } catch (error) {
      console.log(error.response);
      if (i === 5) {
        if (error.response) {
          if (typeof error.response.data.error === "string") {
            Alert.alert(
              "Falha ao Entrar",
              // 'Houve um erro no login, verifique seus dados'
              error.response.data.error
            );
          } else if (typeof error.response.data.error.text === "string") {
            Alert.alert(
              "Falha ao Entrar",
              // 'Houve um erro no login, verifique seus dados'
              error.response.data.error.text
            );
          } else {
            Alert.alert(
              "Falha ao Entrar",
              // 'Houve um erro no login, verifique seus dados'
              typeof error.response.data.error === "string"
                ? error.response.data.error
                : "Não conseguimos entrar, verifique seus dados e tente novamente."
            );
          }
        } else if (error.code === "ECONNABORTED") {
          Alert.alert(
            "Erro",
            "Parece que demorou um pouquinho para conectar, aguarde alguns minutos e tente novamente."
          );
        } else {
          Alert.alert(
            "Erro",
            "Não conseguimos conectar no servidor, aguarde alguns minutos e tente novamente."
          );
        }

        yield put(signFailure());
      }
    }
  }
}

export function setToken({ payload }): void {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
]);
