import React from "react";
import { Animated, ListRenderItem, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP } from "../PercentageConverter";

import * as NavigationService from "../../Routes/navigationService";

import {
  TitleProduct,
  PriceProduct,
  LinkContainerLine,
  ProductsView,
  ImageProductLine,
  ViewLinkLine,
  Title,
} from "./styles";

type GridTypes = {
  item: object;
};

const GridImages: React.FC<GridTypes> = ({ item, index }) => {
  // const navigation = useNavigation();

  return (
    // <Text>a</Text>
    <ProductsView>
      <LinkContainerLine
        onPress={() => {
          NavigationService.navigate("Produto", { data: item });
        }}
        key={item.id}
      >
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
