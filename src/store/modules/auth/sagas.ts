/* eslint-disable @typescript-eslint/camelcase */
import { takeLatest, call, put, all } from "redux-saga/effects";
import { Alert } from "react-native";
import * as Navigation from "~/Routes/navigationService";

import api from "~/services/api";

import { signInSuccess, signUpSuccess, signFailure } from "./actions";

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
      const { id, username, email, phone } = response.data.data.user;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(signInSuccess({ id, name: username, email, phone }));

      Navigation.navigate("Minha Conta");

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

export function* signUp({ payload }: any): any {
  for (let i = 1; i <= 5; i += 1) {
    try {
      const {
        name,
        email,
        birth,
        phone,
        password,
        passwordConfirmation,
      } = payload;

      const response = yield call(api.post, "v1/auth/client/register", {
        username: name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        phone,
        birth,
      });

      yield put(signUpSuccess());

      Alert.alert(
        "Parabens!",
        "Está quase lá. Você só precisa confirmar seu cadastro clicando no link que enviamos para o seu email.",
        [{ text: "OK", onPress: () => Navigation.navigate("Entrar") }]
      );

      return;
    } catch (error) {
      if (i === 5) {
        // console.log(error.response.status);
        if (error.response.status === 400) {
          Alert.alert(
            "Ops..",
            "Parece que algum campo não está preenchido corretamente."
          );
        } else if (error.response.status === 500) {
          Alert.alert(
            "Ops..",
            "Parece que tivemos um problema, pode tentar novamente mais tarde?"
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
  SIGN_UP_REQUEST = "@auth/SIGN_UP_REQUEST",
}

export default all([
  takeLatest(TypeKeys.PERSIST, setToken),
  takeLatest(TypeKeys.SIGN_IN_REQUEST, signIn),
  takeLatest(TypeKeys.SIGN_UP_REQUEST, signUp),
]);
