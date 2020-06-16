import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  LinkContainer,
  ViewLink,
  ImageProduct,
  TitleProduct,
  PriceProduct,
} from "./styles";

const SlideItem: React.FC = ({ item, nItemsInScreen }) => {
  const navigation = useNavigation();

  return (
    <LinkContainer
      onPress={() => {
        navigation.navigate("Produto", { data: item });
      }}
    >
      <ViewLink>
        <ImageProduct
          nItemsInScreen={nItemsInScreen || 2}
          source={{
            uri: item.image ? item.image.url : item.productDefault.image.url,
          }}
        />
        <TitleProduct>
          {item.name ? item.name : item.productDefault.name}
        </TitleProduct>
        {item.weekly_sales && (
          <PriceProduct>{item.weekly_sales} vendidos</PriceProduct>
        )}
        {item.price && (
          <PriceProduct>
            R$ {item.price.replace(".", ",")} /
            {item.type === "weight" ? ` ${item.weight}g` : " 1 uni."}
          </PriceProduct>
        )}
      </ViewLink>
    </LinkContainer>
  );
};

export default SlideItem;
