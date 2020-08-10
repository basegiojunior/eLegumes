import React, { useRef, useCallback } from "react";
import { ScrollView, Animated, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  LinkContainer,
  LateralSlide,
  ViewLink,
  Content,
  TitleLine,
  VerMais,
} from "./styles";

import SlideItem from "./SlideItem";

import { widthPercentageToDP } from "../PercentageConverter";
import Title from "../Title";

import SIZES from "~/styles/sizes";

import { SlideType } from "~/types";

type ProductsArray = {
  listElements: SlideType[];
  isFromCompany?: string;
  nItemsInScreen?: number;
  title?: string;
  color: any;
  seeMore?: boolean;
  seeMoreData?: CallableFunction;
  show?: boolean;
  isLoading?: boolean;
};

const SlideImages: React.FC<ProductsArray> = ({
  listElements,
  isFromCompany,
  nItemsInScreen = 1,
  title,
  color,
  seeMoreData,
  show = true,
  isLoading = false,
}) => {
  const slideRef = useRef<ScrollView>(null);
  const lastCard = {
    last: 0,
    position: 0,
  };

  const navigation = useNavigation();

  // const SlideCallback = useCallback(
  //   (item) => {
  //     console.log(item);
  //     return (
  //       <SlideItem item={item} key={item.id} nItemsInScreen={nItemsInScreen} />
  //     );
  //   },
  //   [nItemsInScreen]
  // );

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
      {show && (
        <>
          <TitleLine>
            <Title style={{ marginLeft: SIZES.SPACE_SIX_DP }}>{title}</Title>

            {seeMoreData && (
              <TouchableOpacity onPress={() => seeMoreData()}>
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
            {listElements.length > 0 &&
              listElements.map((item) => (
                <SlideItem
                  item={item}
                  companyId={isFromCompany || undefined}
                  key={item.id}
                  nItemsInScreen={nItemsInScreen}
                />
              ))}

            {listElements && isLoading && (
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
        </>
      )}
    </Content>
  );
};

export default SlideImages;
