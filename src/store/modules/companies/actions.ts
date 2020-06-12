export const companieProductsRequest: Function = (
  companieId: string,
  page = 0
) => {
  return {
    type: "@companies/COMPANIES_PRODUCTS_REQUEST",
    payload: { companieId, page },
  };
};

export const companieProductsSuccess: Function = (
  companieProducts: object[],
  page: number
) => {
  return {
    type: "@companies/COMPANIES_PRODUCTS_SUCCESS",
    payload: { companieProducts, page },
  };
};

export const companieProductsSuccessReset: Function = (
  companieProducts: object[],
  id: string
) => {
  return {
    type: "@companies/COMPANIES_PRODUCTS_SUCCESS_RESET",
    payload: { companieProducts, id },
  };
};

export const companieProductsFailure: Function = () => {
  return {
    type: "@companies/COMPANIES_PRODUCTS_FAILURE",
  };
};

// COMPANIE

export const companieRequest: Function = (companieId: string) => {
  return {
    type: "@companies/COMPANIE_REQUEST",
    payload: { companieId },
  };
};

export const companieSuccess: Function = (companie: object) => {
  return {
    type: "@companies/COMPANIE_SUCCESS",
    payload: { companie },
  };
};

export const companieFailure: Function = () => {
  return {
    type: "@companies/COMPANIE_FAILURE",
  };
};

// COMMENTS

export const companieCommentsRequest: Function = (
  companieId: string,
  page = 0
) => {
  return {
    type: "@companies/COMPANIES_COMMENTS_REQUEST",
    payload: { companieId, page },
  };
};

export const companieCommentsSuccess: Function = (
  companieComments: object[],
  page: number
) => {
  return {
    type: "@companies/COMPANIES_COMMENTS_SUCCESS",
    payload: { companieComments, page },
  };
};

export const companieCommentsSuccessReset: Function = (
  companieComments: object[],
  id: string
) => {
  return {
    type: "@companies/COMPANIES_COMMENTS_SUCCESS_RESET",
    payload: { companieComments, id },
  };
};

export const companieCommentsFailure: Function = () => {
  return {
    type: "@companies/COMPANIES_COMMENTS_FAILURE",
  };
};

// PRODUCTS FROM ONE COMPANIE

export const companiesFromProductsRequest: Function = (productId: string) => {
  return {
    type: "@companies/COMPANIES_FROM_PRODUCTS_REQUEST",
    payload: { productId },
  };
};

export const companiesFromProductsSuccess: Function = (
  companies: object[],
  id: string
) => {
  return {
    type: "@companies/COMPANIES_FROM_PRODUCTS_SUCCESS",
    payload: { companies, id },
  };
};
export const companiesFromProductsFailure: Function = () => {
  return {
    type: "@companies/COMPANIES_FROM_PRODUCTS_FAILURE",
  };
};
