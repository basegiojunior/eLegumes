import produce from "immer";
import { Reducer } from "redux";

const INITIAL_STATE = {
  loading: false,
  categories: [],
  companieSelectedId: "",
  cart: [
    {
      companie: { id: "adb", name: "Loja Teste" },
      products: [{ quantity: 2, data: { name: "Produdo 01", price: "2.50" } }],
    },
  ],
};

type InitialProps = {
  loading: boolean;
  categories: object[];
  companieSelectedId: string;
  cart: {
    companie: object;
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
          } else {
            // se já existir, sobrescreve ele com os novos dados
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

        draft.cart[companieIndex].products[productIndex].quantity += 1;
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

        if (draft.cart[companieIndex].products[productIndex].quantity > 1) {
          draft.cart[companieIndex].products[productIndex].quantity -= 1;
        }
        break;
      }

      case "@cart/SELECT_COMPANIE": {
        draft.companieSelectedId = action.payload.id;
        break;
      }

      case "@cart/DELETE_COMPANIE": {
        draft.cart = draft.cart.filter(
          (item) => item.companie.id !== draft.companieSelectedId
        );
        break;
      }

      default:
        break;
    }
  });
};

export default cart;
