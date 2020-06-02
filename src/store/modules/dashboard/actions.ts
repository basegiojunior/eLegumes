export const dashRequest: Function = () => {
  return {
    type: "@dash/DASHBOARD_REQUEST",
  };
};

export const dashSuccess: Function = (
  newCompanies: object[],
  topProducts: object[]
) => {
  return {
    type: "@dash/DASHBOARD_SUCCESS",
    payload: { newCompanies, topProducts },
  };
};

export const dashFailure: Function = () => {
  return {
    type: "@dash/DASHBOARD_FAILURE",
  };
};

export const promoRequest: Function = (page: number, perpage: number) => {
  return {
    type: "@promo/PROMO_REQUEST",
    payload: { page, perpage },
  };
};

export const promoSuccess: Function = (promotions: object[]) => {
  return {
    type: "@promo/PROMO_SUCCESS",
    payload: { promotions },
  };
};

export const promoFailure: Function = () => {
  return {
    type: "@promo/PROMO_FAILURE",
  };
};
