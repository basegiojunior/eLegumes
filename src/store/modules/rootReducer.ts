import { combineReducers, Reducer as ReducerProps } from "redux";

import auth from "./auth/reducer";
import dash from "./dashboard/reducer";
import search from "./search/reducer";
import categories from "./categories/reducer";

const appReducer = combineReducers({
  auth,
  dash,
  search,
  categories,
});

const Reducer: ReducerProps = (state, action) => {
  if (action.type === "@auth/SIGN_OUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default Reducer;
