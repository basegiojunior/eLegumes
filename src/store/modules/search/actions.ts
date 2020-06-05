export const searchRequest: Function = (name: string) => {
  return {
    type: "@search/SEARCH_REQUEST",
    payload: { name },
  };
};

export const searchSuccess: Function = (
  searchProductsResults: object[],
  searchStoresResults: object[]
) => {
  return {
    type: "@search/SEARCH_SUCCESS",
    payload: { searchProductsResults, searchStoresResults },
  };
};

export const searchFailure: Function = () => {
  return {
    type: "@search/SEARCH_FAILURE",
  };
};

// PRODUCTS
export const searchProductsRequest: Function = (name: string) => {
  return {
    type: "@search/SEARCH_PRODUCTS_REQUEST",
    payload: { name },
  };
};

export const searchProductsSuccess: Function = (
  searchProductsResults: object[]
) => {
  return {
    type: "@search/SEARCH_PRODUCTS_SUCCESS",
    payload: { searchProductsResults },
  };
};

export const searchProductsFailure: Function = () => {
  return {
    type: "@search/SEARCH_PRODUCTS_FAILURE",
  };
};

// STORES
export const searchStoresRequest: Function = (name: string) => {
  return {
    type: "@search/SEARCH_STORES_REQUEST",
    payload: { name },
  };
};

export const searchStoresSuccess: Function = (
  searchStoresResults: object[]
) => {
  return {
    type: "@search/SEARCH_STORES_SUCCESS",
    payload: { searchStoresResults },
  };
};

export const searchStoresFailure: Function = () => {
  return {
    type: "@search/SEARCH_STORES_FAILURE",
  };
};
