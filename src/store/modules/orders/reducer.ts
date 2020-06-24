import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  loading: false,
};

type InitialProps = {
  loading: boolean;
};

const orders: Reducer<InitialProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@orders/ORDERS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@orders/ORDERS_SUCCESS": {
        draft.loading = false;
        break;
      }
      case "@orders/ORDERS_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
        break;
    }
  });
};

export default orders;
