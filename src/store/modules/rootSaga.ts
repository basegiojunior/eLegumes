import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import dash from "./dashboard/sagas";
import search from "./search/sagas";
import categories from "./categories/sagas";
import companies from "./companies/sagas";
import cart from "./cart/sagas";

export default function* rootSaga(): any {
  return yield all([auth, dash, search, categories, companies, cart]);
}
