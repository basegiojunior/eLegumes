export const addToCart: Function = (
  companie: object,
  product: object,
  quantity: number
) => {
  return {
    type: "@cart/ADD_TO_CART",
    payload: { companie, product, quantity },
  };
};

export const increaseProduct: Function = (
  productId: string,
  companieId: string
) => {
  return {
    type: "@cart/INCREASE_PRODUCT",
    payload: { productId, companieId },
  };
};

export const decreaseProduct: Function = (
  productId: string,
  companieId: string
) => {
  return {
    type: "@cart/DECREASE_PRODUCT",
    payload: { productId, companieId },
  };
};

export const selectCompanie: Function = (id: string) => {
  return {
    type: "@cart/SELECT_COMPANIE",
    payload: { id },
  };
};

export const deselectCompanie: Function = () => {
  return {
    type: "@cart/DESELECT_COMPANIE",
  };
};

export const deleteCompanie: Function = () => {
  return {
    type: "@cart/DELETE_COMPANIE",
  };
};
