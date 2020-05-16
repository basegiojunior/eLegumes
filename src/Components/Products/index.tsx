import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { widthPercentageToDP } from "../PercentageConverter";

import {
  ProductContainer,
  ProductContent,
  Price,
  NormalPrice,
  PromotionPrice,
  Div2,
  Add,
  AddText,
  NameProduct,
  ImageProduct,
} from "./styles";

import image from "../../assets/product.jpg";

const Products: React.FC = () => {
  return (
    <ProductContainer>
      <ImageProduct resizeMode="contain" source={image} />
      <ProductContent>
        <View style={{ flexDirection: "row" }}>
          <NameProduct numberOfLines={2} ellipsizeMode="tail">
            Um gatinho muito fofinho e branquinho
          </NameProduct>
        </View>
        <Div2>
          <Price>
            <NormalPrice>R$ 24,00</NormalPrice>
            <PromotionPrice>R$ 19,99</PromotionPrice>
          </Price>
          <Add>
            {/* <AddText>Adicionar</AddText> */}
            <Icon name="plus" size={widthPercentageToDP("8%")} color="white" />
          </Add>
        </Div2>
      </ProductContent>
    </ProductContainer>
  );
};

export default Products;
