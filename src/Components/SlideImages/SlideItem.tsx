import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  LinkContainer,
  ViewLink,
  ImageProduct,
  TitleProduct,
  PriceProduct,
} from "./styles";

import { SlideType } from "~/types";

type ItemType = {
  item: SlideType;
  nItemsInScreen: number;
};

const SlideItem: React.FC<ItemType> = ({ item, nItemsInScreen }) => {
  const navigation = useNavigation();

  return (
    <LinkContainer
      onPress={() => {
        navigation.navigate("Produto", {
          id: item.id,
          image: item.image,
          name: item.title,
        });
      }}
    >
      <ViewLink>
        <ImageProduct
          nItemsInScreen={nItemsInScreen || 2}
          source={{
            uri: item.image.url,
          }}
        />
        <TitleProduct>{item.title}</TitleProduct>
        {item.subtitle && <PriceProduct>{item.subtitle}</PriceProduct>}
      </ViewLink>
    </LinkContainer>
  );
};

export default SlideItem;
