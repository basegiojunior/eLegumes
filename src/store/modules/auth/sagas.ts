import { takeLatest, call, put, all } from "redux-saga/effects";
import { Alert } from "react-native";

import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }: any): any {
  for (let i = 1; i <= 5; i += 1) {
    try {
      const emailPayload = payload.email;
      const passwordPayload = payload.password;

      const response = yield call(api.post, "v1/auth/client/login", {
        email: emailPayload,
        password: passwordPayload,
      });

      const { token } = response.data.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(signInSuccess(response.data.data));

      return;
    } catch (error) {
      if (i === 5) {
        // console.log(error.response.status);
        if (error.response.status === 400) {
          Alert.alert(
            "Ops..",
            "Parece que seu email ou sua senha não estão corretos."
          );
        } else if (error.response.status === 403) {
          Alert.alert(
            "Ops..",
            "Você precisa confirmar seu e-mail para poder acessar o sistema"
          );
        }

        yield put(signFailure());
      }
    }
  }
}

export function setToken({ payload }: any): any {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export enum TypeKeys {
  PERSIST = "persist/REHYDRATE",
  SIGN_IN_REQUEST = "@auth/SIGN_IN_REQUEST",
}

export default all([
  takeLatest(TypeKeys.PERSIST, setToken),
  takeLatest(TypeKeys.SIGN_IN_REQUEST, signIn),
]);
