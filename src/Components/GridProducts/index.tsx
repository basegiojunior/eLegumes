import React from "react";

import {
  TitleProduct,
  PriceProduct,
  LinkContainerLine,
  ProductsView,
  ImageProductLine,
  ViewLinkLine,
  Title,
} from "./styles";

import produto from "../../assets/product.jpg";

interface ProductsArray {
  listElements: Array<object>;
  title: string;
}

const GridProducts: React.FC<ProductsArray> = ({ listElements, title }) => {
  return (
    <ProductsView>
      {title && <Title>{title}</Title>}
      {listElements.map((item, index) => (
        <LinkContainerLine>
          <ViewLinkLine last={index % 2 !== 0}>
            <ImageProductLine
              resizeMethod="scale"
              resizeMode="contain"
              source={produto}
            />
            <TitleProduct>{item.title}</TitleProduct>
            <PriceProduct>R$ ${item.price}</PriceProduct>
          </ViewLinkLine>
        </LinkContainerLine>
      ))}
    </ProductsView>
  );
};

export default GridProducts;
