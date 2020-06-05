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
  categoryName = ""
) => {
  return {
    type: "@categories/CATEGORIES_ESPECIFY_REQUEST",
    payload: { categoryId, categoryName },
  };
};

export const categoriesEspecifySuccess: Function = (categories: object) => {
  return {
    type: "@categories/CATEGORIES_ESPECIFY_SUCCESS",
    payload: { categories },
  };
};

export const categoriesFailure: Function = () => {
  return {
    type: "@categories/CATEGORIES_FAILURE",
  };
};
