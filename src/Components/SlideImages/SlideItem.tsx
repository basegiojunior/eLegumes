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
  companyId?: string;
};

const SlideItem: React.FC<ItemType> = ({ item, nItemsInScreen, companyId }) => {
  const navigation = useNavigation();

  return (
    <LinkContainer
      onPress={() => {
        navigation.navigate("Produto", {
          id: item.id,
          image: item.image,
          name: item.title,
          company: companyId
            ? {
                id: companyId,
              }
            : null,
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
        {!!item.subtitle && <PriceProduct>{item.subtitle}</PriceProduct>}
      </ViewLink>
    </LinkContainer>
  );
};

export default SlideItem;
