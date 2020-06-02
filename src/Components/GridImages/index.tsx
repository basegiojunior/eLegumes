import React from "react";
import { Animated } from "react-native";
import { widthPercentageToDP } from "../PercentageConverter";

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

interface ItemsArray {
  listElements: Array<{ title: string; price: number }>;
  title: string;
  color: any;
}

const GridImages: React.FC<ItemsArray> = ({ listElements, title, color }) => {
  return (
    <ProductsView>
      {title && <Title>{title}</Title>}
      {listElements.length > 0 ? (
        listElements.map((item, index) => (
          <LinkContainerLine>
            <ViewLinkLine last={index % 2 !== 0}>
              <ImageProductLine
                source={{
                  uri: item.image ? item.image.url : item.default.image.url,
                }}
              />
              <TitleProduct>{item.description}</TitleProduct>
              <PriceProduct style={{ textDecorationLine: "line-through" }}>
                R$ ${item.price}
              </PriceProduct>
              <PriceProduct>R$ ${item.price_promotion}</PriceProduct>
            </ViewLinkLine>
          </LinkContainerLine>
        ))
      ) : (
        <>
          <LinkContainerLine>
            <ViewLinkLine last={false}>
              <Animated.View
                style={{
                  width: widthPercentageToDP("42%"),
                  height: widthPercentageToDP("25%"),
                  marginBottom: widthPercentageToDP("2%"),
                  borderRadius: widthPercentageToDP("2%"),
                  backgroundColor: color,
                }}
              />
              <Animated.View
                style={{
                  width: widthPercentageToDP("25%"),
                  height: widthPercentageToDP("4.5%"),
                  marginTop: widthPercentageToDP("2%"),
                  marginLeft: widthPercentageToDP("2%"),
                  borderRadius: widthPercentageToDP("2%"),
                  backgroundColor: color,
                }}
              />
              <Animated.View
                style={{
                  width: widthPercentageToDP("20%"),
                  height: widthPercentageToDP("3.4%"),
                  marginTop: widthPercentageToDP("2%"),
                  marginLeft: widthPercentageToDP("2%"),
                  borderRadius: widthPercentageToDP("2%"),
                  backgroundColor: color,
                }}
              />
            </ViewLinkLine>
          </LinkContainerLine>
          <LinkContainerLine>
            <ViewLinkLine last>
              <Animated.View
                style={{
                  width: widthPercentageToDP("42%"),
                  height: widthPercentageToDP("25%"),
                  marginBottom: widthPercentageToDP("2%"),
                  borderRadius: widthPercentageToDP("2%"),
                  backgroundColor: color,
                }}
              />
              <Animated.View
                style={{
                  width: widthPercentageToDP("25%"),
                  height: widthPercentageToDP("4.5%"),
                  marginTop: widthPercentageToDP("2%"),
                  marginLeft: widthPercentageToDP("2%"),
                  borderRadius: widthPercentageToDP("2%"),
                  backgroundColor: color,
                }}
              />
              <Animated.View
                style={{
                  width: widthPercentageToDP("20%"),
                  height: widthPercentageToDP("3.4%"),
                  marginTop: widthPercentageToDP("2%"),
                  marginLeft: widthPercentageToDP("2%"),
                  borderRadius: widthPercentageToDP("2%"),
                  backgroundColor: color,
                }}
              />
            </ViewLinkLine>
          </LinkContainerLine>
        </>
      )}
    </ProductsView>
  );
};

export default GridImages;
