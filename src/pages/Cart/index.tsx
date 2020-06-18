import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { ContainerScroll } from "../../styles/scrollView";

import {
  Container,
  HeaderCompanie,
  HeaderCompanieCheck,
  HeaderCompanieTitle,
  ProductAboutContainer,
  ProductChangeQuantityIntern,
  ProductAboutTop,
  ProductChangeQuantityButton,
  ProductChangeQuantityButtonText,
  ProductChangeQuantityContainer,
  ProductChangeQuantityText,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
} from "./styles";

import product from "../../assets/product.jpg";

import { TEXT_SECONDARY } from "../../styles/colors";
import { SPACE_FIVE_DP, SPACE_SEVEN_DP } from "../../styles/sizes";

const Cart: React.FC = () => {
  const [selected, setSelected] = useState(false);
  return (
    <ContainerScroll>
      <Container>
        <TouchableWithoutFeedback
          style={{
            display: "flex",
            backgroundColor: "gray",
            width: 200,
            height: 100,
          }}
          onPress={() => setSelected((old) => !old)}
        >
          <HeaderCompanie>
            <HeaderCompanieCheck selected={selected}>
              <Icon name="check" size={SPACE_FIVE_DP} color="#fff" />
            </HeaderCompanieCheck>
            <HeaderCompanieTitle>LOJA DO SEU ZÉ</HeaderCompanieTitle>
            <Icon name="store" size={SPACE_SEVEN_DP} color={TEXT_SECONDARY} />
          </HeaderCompanie>
        </TouchableWithoutFeedback>

        <ProductContainer>
          <ProductImage source={product} />
          <ProductAboutContainer>
            <ProductAboutTop>
              <ProductTitle>Abacate Hass</ProductTitle>
              <ProductPrice>R$ 2,00</ProductPrice>
            </ProductAboutTop>
            <ProductQuantity>1 x 1 unidade</ProductQuantity>
          </ProductAboutContainer>

          <ProductChangeQuantityContainer>
            <ProductChangeQuantityIntern>
              <ProductChangeQuantityButton>
                <ProductChangeQuantityButtonText
                  style={{
                    includeFontPadding: false,
                  }}
                >
                  -
                </ProductChangeQuantityButtonText>
              </ProductChangeQuantityButton>

              <ProductChangeQuantityText>22</ProductChangeQuantityText>

              <ProductChangeQuantityButton>
                <ProductChangeQuantityButtonText
                  style={{
                    includeFontPadding: false,
                  }}
                >
                  +
                </ProductChangeQuantityButtonText>
              </ProductChangeQuantityButton>
            </ProductChangeQuantityIntern>
          </ProductChangeQuantityContainer>
        </ProductContainer>
      </Container>
    </ContainerScroll>
  );
};

export default Cart;
