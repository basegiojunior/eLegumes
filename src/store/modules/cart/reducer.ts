import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  loading: false,
  categories: [],
  companieSelected: { id: "", name: "" },
  cart: [],
};

type InitialProps = {
  loading: boolean;
  categories: object[];
  companieSelected: { id: string; name: string };
  cart: {
    companie: object;
    totalPrice: number;
    products: { quantity: number; data: object }[];
  }[];
};

const cart: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: InitialProps) => {
    switch (action.type) {
      case "@cart/CART_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@cart/CART_SUCCESS": {
        draft.loading = false;
        draft.categories = action.payload.categories;
        break;
      }
      case "@cart/CART_FAILURE": {
        draft.loading = false;
        break;
      }

      case "@cart/ADD_TO_CART": {
        const { product, companie, quantity } = action.payload;
        const price = product.active_promotion
          ? parseFloat(product.price_promotion) * quantity
          : parseFloat(product.price) * quantity;

        // verifica se já existe essa empresa
        const companieIndex = draft.cart.findIndex(
          (item) => item.companie.id === companie.id
        );

        // Se já ouver um produto dessa empresa
        if (companieIndex !== -1) {
          // verifica se o produto já existe
          const productIndex = draft.cart[companieIndex].products.findIndex(
            (item) => item.data.id === product.id
          );

          // se não existir, adiciona ele na lista
          if (productIndex === -1) {
            draft.cart[companieIndex].products = [
              ...draft.cart[companieIndex].products,
              {
                quantity,
                data: product,
              },
            ];

            draft.cart[companieIndex].totalPrice += price;
          } else {
            // se já existir, sobrescreve ele com os novos dados
            const lastProduct =
              draft.cart[companieIndex].products[productIndex].data;

            const lastPrice =
              parseFloat(
                lastProduct.active_promotion
                  ? lastProduct.price_promotion
                  : lastProduct.price
              ) * draft.cart[companieIndex].products[productIndex].quantity;

            draft.cart[companieIndex].totalPrice -= lastPrice + price;

            draft.cart[companieIndex].products[productIndex] = {
              quantity,
              data: product,
            };
          }
        } else {
          // se a empresa não existir, adiciona ela com o produto do parâmetro
          draft.cart = [
            ...draft.cart,
            {
              companie,
              totalPrice: price,
              products: [
                {
                  quantity,
                  data: product,
                },
              ],
            },
          ];
        }
        break;
      }

      case "@cart/INCREASE_PRODUCT": {
        const { companieId, productId } = action.payload;

        const companieIndex = draft.cart.findIndex(
          (item) => item.companie.id === companieId
        );

        const productIndex = draft.cart[companieIndex].products.findIndex(
          (item) => item.data.id === productId
        );

        const product = draft.cart[companieIndex].products[productIndex].data;
        const price = parseFloat(
          product.active_promotion ? product.price_promotion : product.price
        );

        draft.cart[companieIndex].products[productIndex].quantity += 1;
        draft.cart[companieIndex].totalPrice += price;
        break;
      }

      case "@cart/DECREASE_PRODUCT": {
        const { companieId, productId } = action.payload;

        const companieIndex = draft.cart.findIndex(
          (item) => item.companie.id === companieId
        );

        const productIndex = draft.cart[companieIndex].products.findIndex(
          (item) => item.data.id === productId
        );

        const product = draft.cart[companieIndex].products[productIndex].data;
        const price = parseFloat(
          product.active_promotion ? product.price_promotion : product.price
        );

        // se tiver mais que um produto no carrinho, pode iminuir uma unidade
        if (draft.cart[companieIndex].products[productIndex].quantity > 1) {
          draft.cart[companieIndex].products[productIndex].quantity -= 1;
          draft.cart[companieIndex].totalPrice -= price;
        }
        break;
      }

      case "@cart/SELECT_COMPANIE": {
        const { companie } = draft.cart.find(
          (item) => item.companie.id === action.payload.id
        )[0];

        draft.companieSelected = { id: companie.id, name: companie.name };
        break;
      }

      case "@cart/DESELECT_COMPANIE": {
        draft.companieSelected = { id: "", name: "" };

        break;
      }

      case "@cart/DELETE_COMPANIE": {
        const { id } = draft.companieSelected;

        draft.companieSelected = { id: "", name: "" };

        draft.cart = draft.cart.filter((item) => item.companie.id !== id);
        break;
      }

      default:
        break;
    }
  });
};

export default cart;
