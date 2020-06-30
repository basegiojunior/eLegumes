export const categoriesRequest: Function = () => {
  return {
    type: "@categories/CATEGORIES_REQUEST",
  };
};

export const categoriesSuccess: Function = (categories: object[]) => {
  return {
    type: "@categories/CATEGORIES_SUCCESS",
    payload: { categories },
  };
};

export const categoriesEspecifyRequest: Function = (
  categoryId = "",
  categoryName = "",
  page = 0
) => {
  return {
    type: "@categories/CATEGORIES_ESPECIFY_REQUEST",
    payload: { categoryId, categoryName, page },
  };
};

export const categoriesEspecifySuccess: Function = (category: object) => {
  return {
    type: "@categories/CATEGORIES_ESPECIFY_SUCCESS",
    payload: { category },
  };
};

export const categoriesEspecifySuccessReset: Function = (category: object) => {
  return {
    type: "@categories/CATEGORIES_ESPECIFY_SUCCESS_RESET",
    payload: { category },
  };
};

export const categoriesFailure: Function = () => {
  return {
    type: "@categories/CATEGORIES_FAILURE",
  };
};
