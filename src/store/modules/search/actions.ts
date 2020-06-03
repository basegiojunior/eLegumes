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
