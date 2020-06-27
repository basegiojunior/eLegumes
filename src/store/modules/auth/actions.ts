export const signInRequest: Function = (
  email: string,
  password: string,
  afterNavTo = ""
) => {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password, afterNavTo },
  };
};

export const signInSuccess: Function = (userData: {
  id: string;
  name: string;
  email: string;
  phone: string;
}) => {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { userData },
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
  birth: string,
  phone: string,
  password: string,
  passwordConfirmation: string
) => {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: {
      name,
      email,
      birth,
      phone,
      password,
      passwordConfirmation,
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
