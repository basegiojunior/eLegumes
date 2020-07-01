import React, { memo } from "react";
import { useDispatch } from "react-redux";

import {
  ProductAboutContainer,
  ProductChangeQuantityIntern,
  ProductAboutTop,
  ProductChangeQuantityButton,
  ProductChangeQuantityButtonText,
  ProductChangeQuantityContainer,
  ProductChangeQuantityText,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
} from "./styles";

import { decreaseProduct, increaseProduct } from "~/store/modules/cart/actions";

import { CartProduct } from "~/types";

type ItemType = {
  productItem: { quantity: number; data: CartProduct };
  companieId: string;
};

const ProductItem: React.FC<ItemType> = ({ productItem, companieId }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainer>
      <ProductImage source={{ uri: productItem.data.image.url }} />
      <ProductAboutContainer>
        <ProductAboutTop>
          <ProductTitle>{productItem.data.title}</ProductTitle>
          <ProductPrice>
            R$ {productItem.data.price.toFixed(1).toString().replace(".", ",")}
          </ProductPrice>
        </ProductAboutTop>
        <ProductQuantity>
          {productItem.quantity} x{" "}
          {productItem.data.weight
            ? `${productItem.data.weight}g`
            : "1 unidade"}
        </ProductQuantity>
      </ProductAboutContainer>

      <ProductChangeQuantityContainer>
        <ProductChangeQuantityIntern>
          <ProductChangeQuantityButton
            onPress={() => {
              dispatch(decreaseProduct(productItem.data.id, companieId));
            }}
          >
            <ProductChangeQuantityButtonText
              style={{
                includeFontPadding: false,
              }}
            >
              -
            </ProductChangeQuantityButtonText>
          </ProductChangeQuantityButton>

          <ProductChangeQuantityText>
            {productItem.quantity}
          </ProductChangeQuantityText>

          <ProductChangeQuantityButton
            onPress={() => {
              dispatch(increaseProduct(productItem.data.id, companieId));
            }}
          >
            <ProductChangeQuantityButtonText
              style={{
                includeFontPadding: false,
              }}
            >
              +
            </ProductChangeQuantityButtonText>
          </ProductChangeQuantityButton>
        </ProductChangeQuantityIntern>
      </ProductChangeQuantityContainer>
    </ProductContainer>
  );
};

export default memo(ProductItem);
