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

// COMPANIES
export const searchCompaniesRequest: Function = (name: string) => {
  return {
    type: "@search/SEARCH_COMPANIES_REQUEST",
    payload: { name },
  };
};

export const searchCompaniesSuccess: Function = (
  searchCompaniesResults: object[]
) => {
  return {
    type: "@search/SEARCH_COMPANIES_SUCCESS",
    payload: { searchCompaniesResults },
  };
};

export const searchCompaniesFailure: Function = () => {
  return {
    type: "@search/SEARCH_COMPANIES_FAILURE",
  };
};
