import React, { useEffect } from "react";

import Routes from "./Routes";

import { dashRequest, promoRequest } from "./store/modules/dashboard/actions";
import { categoriesRequest } from "./store/modules/categories/actions";
import { store } from "./store";

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(categoriesRequest());
    store.dispatch(dashRequest());
    store.dispatch(promoRequest());
  }, []);

  // const Routes = createRouter(true);

  return <Routes />;
};

export default App;
