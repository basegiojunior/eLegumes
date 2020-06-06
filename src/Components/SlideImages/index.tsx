import React, { useRef, useState } from "react";
import { ScrollView, Animated, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  LinkContainer,
  LateralSlide,
  ImageProduct,
  ViewLink,
  TitleProduct,
  PriceProduct,
  Content,
  TitleLine,
  VerMais,
} from "./styles";

import { widthPercentageToDP } from "../PercentageConverter";
import Title from "../Title";

import { SPACE_SIX_DP } from "../../styles/sizes";

type ProductsArray = {
  listElements: object[];
  nItemsInScreen?: number;
  title?: string;
  color: any;
  seeMore?: boolean;
  seeMoreData?: { id: string; name: string };
};

const SlideImages: React.FC<ProductsArray> = ({
  listElements,
  nItemsInScreen = 1,
  title,
  color,
  seeMore = false,
  seeMoreData,
}) => {
  const slideRef = useRef<ScrollView>(null);
  const lastCard = {
    last: 0,
    position: 0,
  };
  const navigation = useNavigation();

  // const [lastCard, setLastCard] = useState(0);

  const scrollCard: Function = (position: number) => {
    const perc = widthPercentageToDP(`${92 / nItemsInScreen}%`);
    const div = position / perc;
    const ceil = Math.ceil(div);
    // const newP = Math.abs(div - ceil);
    const newP = Math.abs((position / perc) % 1);

    let scrollTo = lastCard.last;

    if (position > lastCard.position) {
      if (newP > 0.35) {
        scrollTo = ceil;
      } else if (newP < 0.35) {
        scrollTo = Math.floor(div);
      }
    } else if (newP > 0.65) {
      scrollTo = ceil;
    } else if (newP < 0.65) {
      scrollTo = Math.floor(div);
    }

    lastCard.last = scrollTo;
    lastCard.position = position;

    slideRef.current?.scrollTo({
      x: scrollTo * perc,
      y: 0,
      animated: true,
    });
  };

  return (
    <Content>
      <TitleLine>
        <Title style={{ marginLeft: SPACE_SIX_DP }}>{title}</Title>

        {seeMore && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Categoria", {
                name: seeMoreData.name,
                id: seeMoreData.id,
              });
            }}
          >
            <VerMais>Ver Mais</VerMais>
          </TouchableOpacity>
        )}
      </TitleLine>
      <LateralSlide
        onScrollEndDrag={({ nativeEvent }) => {
          scrollCard(nativeEvent.contentOffset.x);
        }}
        ref={slideRef}
      >
        {listElements.length > 0 ? (
          listElements.map(
            (item): JSX.Element => (
              <LinkContainer key={item.id}>
                <ViewLink>
                  <ImageProduct
                    nItemsInScreen={nItemsInScreen || 2}
                    source={{
                      uri: item.image.url,
                    }}
                  />
                  <TitleProduct>{item.name}</TitleProduct>
                  {item.weekly_sales && (
                    <PriceProduct>{item.weekly_sales} vendidos</PriceProduct>
                  )}
                </ViewLink>
              </LinkContainer>
            )
          )
        ) : (
          <LinkContainer>
            <ViewLink>
              <Animated.View
                style={{
                  width: widthPercentageToDP("88%"),
                  height: widthPercentageToDP("51%"),
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
            </ViewLink>
          </LinkContainer>
        )}
      </LateralSlide>
    </Content>
  );
};

export default SlideImages;
