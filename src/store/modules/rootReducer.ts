import { combineReducers } from "redux";

import auth from "./auth/reducer";

const appReducer = combineReducers({
  auth,
});

export default (state, action) => {
  if (action.type === "@auth/SIGN_OUT") {
    state = undefined;
  }

  return appReducer(state, action);
};
