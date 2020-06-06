import React from "react";
import { Animated, ListRenderItem, Text } from "react-native";
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

const GridImages: any = ({ item, index }) => {
  // console.log(item);

  return (
    // <Text>a</Text>
    <ProductsView>
      <LinkContainerLine key={item.id}>
        <ViewLinkLine last={index % 2 !== 0}>
          <ImageProductLine
            source={{
              uri: item.image ? item.image.url : item.productDefault.image.url,
            }}
          />
          <TitleProduct>{item.description}</TitleProduct>
          <PriceProduct style={{ textDecorationLine: "line-through" }}>
            R$ {item.price.replace(".", ",")} /
            {item.type === "weight" ? ` ${item.weight}g` : " 1 uni."}
          </PriceProduct>
          <PriceProduct>
            R$ {item.price_promotion.replace(".", ",")} /
            {item.type === "weight" ? ` ${item.weight}g` : " 1 uni."}
          </PriceProduct>
        </ViewLinkLine>
      </LinkContainerLine>
    </ProductsView>
  );
};

export default GridImages;
