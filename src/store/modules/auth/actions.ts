export const signInRequest: Function = (email: string, password: string) => {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
};

export const signInSuccess: Function = (
  token: string,
  name: string,
  email: string,
  phone: string,
  id: string
) => {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, name, email, phone, id },
  };
};

export const signUpSuccess: Function = () => {
  return {
    type: "@auth/SIGN_UP_SUCCESS",
  };
};

export const signUpRequest: Function = (
  name: string,
  email: string,
  password: string,
  phone: string
) => {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: {
      name,
      email,
      password,
      phone,
    },
  };
};

export const signOut: Function = () => {
  return {
    type: "@auth/SIGN_OUT",
  };
};

export const signFailure: Function = () => {
  return {
    type: "@auth/SIGN_FAILURE",
  };
};
