import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  signed: false,
  loading: false,
  userData: {},
};

type InitialProps = {
  signed: boolean;
  loading: boolean;
  userData: object;
};

const auth: Reducer<InitialProps> = (state = INITIAL_STATE, action: any) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.signed = true;
        draft.loading = false;
        draft.userData = action.payload.userData;
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
        break;
    }
  });
};

export default auth;
