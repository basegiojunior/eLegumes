import React, { useRef } from "react";
import { ScrollView, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  LinkContainer,
  LateralSlide,
  ImagePartner,
  ImagePartnerEmpry,
  ViewLink,
  TitlePartner,
  TextPartner,
  ViewAbout,
  Content,
  ViewAboutLazy,
} from "./styles";

import { widthPercentageToDP } from "../PercentageConverter";
import Title from "../Title";

import SIZES from "~/styles/sizes";
import { SlideType } from "~/types";

type ProductsArray = {
  listElements: SlideType[];
  nItemsInScreen?: number;
  title?: string;
  color: any;
};

const SlidePartners: React.FC<ProductsArray> = ({
  listElements,
  nItemsInScreen = 1,
  title,
  color,
}) => {
  const slideRef = useRef<ScrollView>(null);

  const navigation = useNavigation();

  const scrollCard: Function = (position: number) => {
    const scrollTo = Math.round(position / widthPercentageToDP("92%"));

    slideRef.current?.scrollTo({
      x: scrollTo * widthPercentageToDP("92%"),
      y: 0,
      animated: true,
    });
  };

  return (
    <Content>
      {title && (
        <Title style={{ marginLeft: SIZES.SPACE_SIX_DP }}>{title}</Title>
      )}
      <LateralSlide
        onScrollEndDrag={({ nativeEvent }) => {
          scrollCard(nativeEvent.contentOffset.x);
        }}
        ref={slideRef}
      >
        {listElements.length > 0 ? (
          listElements.map(
            (item): JSX.Element => (
              <LinkContainer
                onPress={() => navigation.navigate("Companie", { ...item })}
                key={item.id}
              >
                <ViewLink>
                  {item.image.url ? (
                    <ImagePartner
                      nItemsInScreen={nItemsInScreen || 2}
                      source={{ uri: item.image.url }}
                    />
                  ) : (
                    <ImagePartnerEmpry />
                  )}
                  <ViewAbout>
                    <TitlePartner>{item.title}</TitlePartner>
                    <TextPartner>{item.subtitle}</TextPartner>
                  </ViewAbout>
                </ViewLink>
              </LinkContainer>
            )
          )
        ) : (
          <>
            <LinkContainer>
              <ViewLink>
                <Animated.View
                  style={{
                    width: widthPercentageToDP("21%"),
                    height: widthPercentageToDP("21%"),
                    marginRight: widthPercentageToDP("4%"),
                    borderRadius: widthPercentageToDP("2%"),
                    backgroundColor: color,
                  }}
                />
                <ViewAboutLazy>
                  <Animated.View
                    style={{
                      width: widthPercentageToDP("55%"),
                      height: widthPercentageToDP("5.2%"),
                      borderRadius: widthPercentageToDP("2%"),
                      backgroundColor: color,
                    }}
                  />
                  <Animated.View
                    style={{
                      width: widthPercentageToDP("30%"),
                      height: widthPercentageToDP("3.8%"),
                      borderRadius: widthPercentageToDP("2%"),
                      marginTop: 10,
                      backgroundColor: color,
                    }}
                  />
                </ViewAboutLazy>
              </ViewLink>
            </LinkContainer>
          </>
        )}
      </LateralSlide>
    </Content>
  );
};

export default SlidePartners;
