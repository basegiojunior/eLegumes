import React from "react";
import { RefreshControl } from "react-native";

import {
  LinkContainer,
  LateralSlide,
  ImageProduct,
  ViewLink,
  TitleProduct,
  PriceProduct,
  LinkContainerLine,
  ProductLine,
  ImageProductLine,
  ViewLinkLine,
} from "./styles";

import { ContainerScroll } from "../../styles/scrollView";

import produto from "../../assets/product.jpg";

interface ProductsArray extends ObjectArray {
  title: string;
  price: number;
}

const ListElements: Array<object> = [
  {
    title: "Gato 01",
    price: 15.99,
  },
  {
    title: "Gato 02",
    price: 13.99,
  },
  {
    title: "Gato 03",
    price: 16.99,
  },
  {
    title: "Gato 04",
    price: 11.99,
  },
  {
    title: "Gato 05",
    price: 26.99,
  },
  {
    title: "Gato 06",
    price: 33.99,
  },
];

const Dashboard: React.FC = () => {
  return (
    <ContainerScroll refreshControl={<RefreshControl />}>
      <LateralSlide>
        <LinkContainer>
          <ViewLink>
            <ImageProduct source={produto} />
            <TitleProduct>Gatinho Fofinho</TitleProduct>
            <PriceProduct>R$ 15,99</PriceProduct>
          </ViewLink>
        </LinkContainer>
        <LinkContainer>
          <ViewLink>
            <ImageProduct source={produto} />
            <TitleProduct>Gatinho Fofinho</TitleProduct>
            <PriceProduct>R$ 15,99</PriceProduct>
          </ViewLink>
        </LinkContainer>
        <LinkContainer>
          <ViewLink>
            <ImageProduct source={produto} />
            <TitleProduct>Gatinho Fofinho</TitleProduct>
            <PriceProduct>R$ 15,99</PriceProduct>
          </ViewLink>
        </LinkContainer>
        <LinkContainer>
          <ViewLink>
            <ImageProduct source={produto} />
            <TitleProduct>Gatinho Fofinho</TitleProduct>
            <PriceProduct>R$ 15,99</PriceProduct>
          </ViewLink>
        </LinkContainer>
        <LinkContainer>
          <ViewLink>
            <ImageProduct source={produto} />
            <TitleProduct>Gatinho Fofinho</TitleProduct>
            <PriceProduct>R$ 15,99</PriceProduct>
          </ViewLink>
        </LinkContainer>
      </LateralSlide>

      {ListElements.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <ProductLine>
              <LinkContainerLine>
                <ViewLinkLine>
                  <ImageProductLine
                    resizeMethod="scale"
                    resizeMode="contain"
                    source={produto}
                  />
                  <TitleProduct>{item.title}</TitleProduct>
                  <PriceProduct>R$ ${item.price}</PriceProduct>
                </ViewLinkLine>
              </LinkContainerLine>
              <LinkContainerLine>
                <ViewLinkLine last>
                  <ImageProductLine
                    resizeMethod="scale"
                    resizeMode="contain"
                    source={produto}
                  />
                  <TitleProduct>{ListElements[index + 1].title}</TitleProduct>
                  <PriceProduct>
                    R$ ${ListElements[index + 1].price}
                  </PriceProduct>
                </ViewLinkLine>
              </LinkContainerLine>
            </ProductLine>
          );
        }
        return null;
      })}

      {/*
        <LinkContainerLine>
          <ViewLinkLine last>
            <ImageProductLine
              resizeMethod="scale"
              resizeMode="contain"
              source={produto}
            />
            <TitleProduct>Gatinho Fofinho 2</TitleProduct>
            <PriceProduct>R$ 15,99</PriceProduct>
          </ViewLinkLine>
        </LinkContainerLine>
      </ProductLine> */}
    </ContainerScroll>
  );
};

export default Dashboard;
