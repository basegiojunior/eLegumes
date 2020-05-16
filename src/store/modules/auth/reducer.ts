import produce from "immer";

const INITIAL_STATE = {
  signed: false,
  loading: false,
};

const auth: Function = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_UP_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_UP_SUCCESS": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        draft.signed = false;
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.loading = false;
        draft.signed = false;
        break;
      }
      default:
    }
  });
};

export default auth;
