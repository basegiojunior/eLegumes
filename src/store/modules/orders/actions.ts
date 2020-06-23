export const orderRequest: Function = (items: {
  items: { product_id: string; quantity?: number; weight?: number }[];
  company: string;
}) => {
  return {
    type: "@orders/ORDERS_REQUEST",
    payload: { items },
  };
};

export const orderSuccess: Function = () => {
  return {
    type: "@orders/ORDERS_SUCCESS",
  };
};

export const orderFailure: Function = () => {
  return {
    type: "@orders/ORDERS_FAILURE",
  };
};
