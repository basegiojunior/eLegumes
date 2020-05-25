import React from "react";

import {
  LinkContainer,
  LateralSlide,
  ImageProduct,
  ViewLink,
  TitleProduct,
  PriceProduct,
  Content,
  Title,
} from "./styles";

import produto from "../../assets/product.jpg";

interface ProductsArray {
  listElements: Array<object>;
  nItemsInScreen?: number;
  title?: string;
}

const SlideProducts: React.FC<ProductsArray> = ({
  listElements,
  nItemsInScreen,
  title,
}) => {
  return (
    <Content>
      {title && <Title>{title}</Title>}
      <LateralSlide>
        {listElements.map((item) => (
          <LinkContainer>
            <ViewLink>
              <ImageProduct
                nItemsInScreen={nItemsInScreen || 2}
                source={produto}
              />
              <TitleProduct>{item.title}</TitleProduct>
              {item.price && <PriceProduct>R$ {item.price}</PriceProduct>}
            </ViewLink>
          </LinkContainer>
        ))}
      </LateralSlide>
    </Content>
  );
};

export default SlideProducts;
