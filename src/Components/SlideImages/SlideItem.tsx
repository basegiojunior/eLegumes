import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  LinkContainer,
  ViewLink,
  ImageProduct,
  TitleProduct,
  PriceProduct,
} from "./styles";

import { TopProduct } from "../../types";

type ItemType = {
  item: TopProduct;
  nItemsInScreen: number;
};

const SlideItem: React.FC<ItemType> = ({ item, nItemsInScreen }) => {
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
            uri: item.image?.url,
          }}
        />
        <TitleProduct>{item.name}</TitleProduct>
        {item.weekly_sales && (
          <PriceProduct>{item.weekly_sales} vendidos</PriceProduct>
        )}
      </ViewLink>
    </LinkContainer>
  );
};

export default SlideItem;
