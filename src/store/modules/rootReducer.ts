import { combineReducers, Reducer as ReducerProps } from "redux";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

import auth from "./auth/reducer";
import dash from "./dashboard/reducer";
import search from "./search/reducer";
import categories from "./categories/reducer";
import companies from "./companies/reducer";
import cart from "./cart/reducer";
import orders from "./orders/reducer";

const appReducer = combineReducers({
  auth,
  dash,
  search,
  categories,
  companies,
  cart,
  orders,
});

const Reducer: ReducerProps = (state, action) => {
  if (action.type === "@auth/SIGN_OUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

type RootState = ReturnType<typeof appReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default Reducer;
