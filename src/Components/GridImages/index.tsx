import React from "react";

import * as NavigationService from "~/Routes/navigationService";

import {
  TitleProduct,
  PriceProduct,
  LinkContainerLine,
  ProductsView,
  ImageProductLine,
  ImageProductLineEmpty,
  ViewLinkLine,
} from "./styles";

import { GridType } from "~/types";

type GridTypes = {
  item: GridType;
  index: number;
};

const GridImages: React.FC<GridTypes> = ({ item, index }) => {
  return (
    // <Text>a</Text>
    <ProductsView>
      <LinkContainerLine
        onPress={() => {
          NavigationService.navigate("Produto", { ...item });
        }}
        key={item.id}
      >
        <ViewLinkLine last={index % 2 !== 0}>
          {item.image.url ? (
            <ImageProductLine
              source={{
                uri: item.image.url,
              }}
            />
          ) : (
            <ImageProductLineEmpty />
          )}

          <TitleProduct>
            {item.title[0].toUpperCase() + item.title.slice(1)}
          </TitleProduct>
          {!!item.lineThrough && (
            <PriceProduct style={{ textDecorationLine: "line-through" }}>
              {item.lineThrough}
            </PriceProduct>
          )}
          <PriceProduct>{item.subtitle}</PriceProduct>
        </ViewLinkLine>
      </LinkContainerLine>
    </ProductsView>
  );
};

export default GridImages;
