import {
  createStore,
  compose,
  applyMiddleware,
  Middleware,
  Reducer,
} from "redux";

export default (
  reducers: Reducer,
  middlewares: Middleware<any, any, any>[]
): any => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
