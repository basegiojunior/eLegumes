export const searchRequest: Function = (name: string) => {
  return {
    type: "@search/SEARCH_REQUEST",
    payload: { name },
  };
};

export const searchSuccess: Function = (
  searchProductsResults: object[],
  searchCompaniesResults: object[]
) => {
  return {
    type: "@search/SEARCH_SUCCESS",
    payload: { searchProductsResults, searchCompaniesResults },
  };
};

export const searchFailure: Function = () => {
  return {
    type: "@search/SEARCH_FAILURE",
  };
};

// PRODUCTS
export const searchProductsRequest: Function = (name: string, page = 0) => {
  return {
    type: "@search/SEARCH_PRODUCTS_REQUEST",
    payload: { name, page },
  };
};

export const searchProductsSuccessReset: Function = (
  searchProductsResults: object[]
) => {
  return {
    type: "@search/SEARCH_PRODUCTS_SUCCESS_RESET",
    payload: { searchProductsResults },
  };
};

export const searchProductsSuccess: Function = (
  searchProductsResults: object[],
  page: number
) => {
  return {
    type: "@search/SEARCH_PRODUCTS_SUCCESS",
    payload: { searchProductsResults, page },
  };
};

export const searchProductsFailure: Function = () => {
  return {
    type: "@search/SEARCH_PRODUCTS_FAILURE",
  };
};

// COMPANIES
export const searchCompaniesRequest: Function = (name: string, page = 0) => {
  return {
    type: "@search/SEARCH_COMPANIES_REQUEST",
    payload: { name, page },
  };
};

export const searchCompaniesSuccess: Function = (
  searchCompaniesResults: object[],
  page: number
) => {
  return {
    type: "@search/SEARCH_COMPANIES_SUCCESS",
    payload: { searchCompaniesResults, page },
  };
};

export const searchCompaniesSuccessReset: Function = (
  searchCompaniesResults: object[]
) => {
  return {
    type: "@search/SEARCH_COMPANIES_SUCCESS_RESET",
    payload: { searchCompaniesResults },
  };
};

export const searchCompaniesFailure: Function = () => {
  return {
    type: "@search/SEARCH_COMPANIES_FAILURE",
  };
};
