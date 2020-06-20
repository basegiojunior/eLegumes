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

import {
  decreaseProduct,
  increaseProduct,
} from "../../store/modules/cart/actions";

import product from "../../assets/product.jpg";

type ItemType = {
  productItem: object;
  companieId: string;
};

const ProductItem: React.FC<ItemType> = ({ productItem, companieId }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainer>
      <ProductImage source={product} />
      <ProductAboutContainer>
        <ProductAboutTop>
          <ProductTitle>
            {productItem.data.name || productItem.data.productDefault.name}
          </ProductTitle>
          <ProductPrice>
            R${" "}
            {productItem.data.active_promotion
              ? productItem.data.price_promotion.replace(".", ",")
              : productItem.data.price.replace(".", ",")}
          </ProductPrice>
        </ProductAboutTop>
        <ProductQuantity>
          {productItem.quantity} x{" "}
          {productItem.data.type === "weight"
            ? `${productItem.data.weight} g`
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
