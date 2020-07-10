import React, { useEffect, useState } from "react";
import { useSelector } from "~/store/modules/rootReducer";

import { ContainerScroll } from "~/styles/scrollView";
import Button from "~/Components/Button";
import Slide from "~/Components/SlideImages";
import Title from "~/Components/Title";
import Loading from "~/Components/Loading";
import Icon from "~/Components/Icon";

import {
  companieProductsRequest,
  companieRequest,
  companieCommentsRequest,
} from "~/store/modules/companies/actions";
import { store } from "~/store";

import profile from "~/assets/product.jpg";

import {
  Container,
  ImageCompanie,
  ImageCompanieEmpty,
  CompanieName,
  CompanieAddress,
  Address,
  RatingView,
  RatingLeft,
  RatingRight,
  RatingNumbersActual,
  RatingNumbersTotal,
  RatingNumbersView,
  Icone,
  IconeSecond,
  Stars,
  StarLine,
  StarLineBarLeft,
  StarLineBarRight,
  StarLineBarView,
  StarLineNumber,
  StarLineViewLeft,
  CommentView,
  CommentTopView,
  CommentTopLeft,
  CommentTopStars,
  ProfileView,
  Name,
  CommentText,
} from "./styles";

import { widthPercentageToDP } from "~/Components/PercentageConverter";

import { SlideType } from "~/types";

import COLORS from "~/styles/colors";

type CompaniesProps = {
  route: {
    params: {
      id: string;
      data: SlideType;
    };
  };
  navigation: any;
};

const Companies: React.FC<CompaniesProps> = ({ route, navigation }) => {
  const { params } = route;

  const [actualCompanie, setActualCompanie] = useState({
    id: "",
    title: "",
    image: {
      url: "",
    },
    address: "",
    rating: 0,
    totalStars: 0,
    phone: "",
    stars: [
      { id: 5, value: 1 },
      { id: 4, value: 1 },
      { id: 3, value: 1 },
      { id: 2, value: 1 },
      { id: 1, value: 1 },
    ],
  });

  const companieProducts = useSelector(
    (state) => state.companies.companieProducts
  );
  const companieComments = useSelector(
    (state) => state.companies.companieComments
  );
  const companie = useSelector((state) => state.companies.companie);
  const loading = useSelector((state) => state.companies.loading);

  const color = "rgba(0,0,0,.1)";

  useEffect(() => {
    if (companie.id === params.id) {
      const { five, four, three, two, one } = companie.stars;
      // const { one } = companie.stars;

      const total = five + four + three + two + one;

      setActualCompanie({
        ...companie,
        stars: [
          { id: 5, value: (five * 100) / total },
          { id: 4, value: (four * 100) / total },
          { id: 3, value: (three * 100) / total },
          { id: 2, value: (two * 100) / total },
          { id: 1, value: (one * 100) / total },
        ],
      });
    }
  }, [companie, params]);

  // useEffect(() => {
  //   const newProducts = companieProducts.products.map((item) => {
  //     const subtitle = item.active_promotion
  //       ? item.price_promotion
  //       : item.price;
  //     return {
  //       id: item.id,
  //       image: item.image?.url,
  //       title: item.name,
  //       subtitle,
  //     };
  //   });

  //   setActualProducts(newProducts);
  // }, [companieProducts]);

  useEffect(() => {
    store.dispatch(companieProductsRequest(params.id, 1));
    store.dispatch(companieCommentsRequest(params.id, 1));
    store.dispatch(companieRequest(params.id));
  }, []);

  return (
    <ContainerScroll>
      <Loading visible={loading} />
      {actualCompanie.image.url ? (
        <ImageCompanie source={{ uri: actualCompanie.image.url }} />
      ) : (
        <ImageCompanieEmpty />
      )}
      <Container>
        <CompanieName>{actualCompanie.title}</CompanieName>
        <Address>
          <Icone
            color="#11bb11"
            size={widthPercentageToDP("7%")}
            name="local24x24"
          />
          <CompanieAddress>{actualCompanie.address}</CompanieAddress>
        </Address>

        <Button text="entrar em contato" onPress={() => null} />
      </Container>
      <Slide
        seeMoreData={() => {
          navigation.navigate("CompanieProducts", {
            title: actualCompanie.title,
            id: actualCompanie.id,
          });
        }}
        isFromCompany={actualCompanie.id}
        listElements={companieProducts.products}
        color={color}
        show={
          companieProducts.products.length > 0 &&
          companieProducts.id === params.id
        }
        nItemsInScreen={2}
        title="PRODUTOS"
      />

      <Title
        style={{
          alignSelf: "flex-start",
          marginLeft: widthPercentageToDP("6%"),
        }}
      >
        AVALIAÇÕES
      </Title>
      <RatingView>
        <RatingLeft>
          <RatingNumbersView>
            <RatingNumbersActual
              style={{
                includeFontPadding: false,
              }}
            >
              {actualCompanie.id === params.id ? actualCompanie.rating : "?"}
            </RatingNumbersActual>
            <RatingNumbersTotal
              style={{
                includeFontPadding: false,
              }}
            >
              /5
            </RatingNumbersTotal>
          </RatingNumbersView>
          <Stars>
            <IconeSecond
              name="star"
              size={widthPercentageToDP("6%")}
              color={actualCompanie.rating > 0 ? "#6bc76b" : "#bec1bd"}
            />
            <IconeSecond
              name="star"
              size={widthPercentageToDP("6%")}
              color={actualCompanie.rating > 1 ? "#6bc76b" : "#bec1bd"}
            />
            <IconeSecond
              name="star"
              size={widthPercentageToDP("6%")}
              color={actualCompanie.rating > 2 ? "#6bc76b" : "#bec1bd"}
            />
            <IconeSecond
              name="star"
              size={widthPercentageToDP("6%")}
              color={actualCompanie.rating > 3 ? "#6bc76b" : "#bec1bd"}
            />
            <IconeSecond
              name="star"
              size={widthPercentageToDP("6%")}
              color={actualCompanie.rating > 4 ? "#6bc76b" : "#bec1bd"}
            />
          </Stars>
        </RatingLeft>
        <RatingRight>
          {actualCompanie.stars.map((item, index) => {
            return (
              <StarLine key={item.id}>
                <StarLineViewLeft>
                  <StarLineNumber
                    style={{
                      includeFontPadding: false,
                    }}
                  >
                    {5 - index}
                  </StarLineNumber>
                  <IconeSecond
                    name="star"
                    size={widthPercentageToDP("4.5%")}
                    color="#bec1bd"
                  />
                </StarLineViewLeft>
                <StarLineBarView>
                  <StarLineBarLeft percentage={item.value} />
                  <StarLineBarRight percentage={item.value} />
                </StarLineBarView>
              </StarLine>
            );
          })}
        </RatingRight>
      </RatingView>

      {companieComments.id === params.id &&
        companieComments.comments.map((item) => (
          <CommentView key={item.id}>
            <CommentTopView>
              <CommentTopLeft>
                <ProfileView>
                  <Icon
                    name="person"
                    color={COLORS.PRIMARY_COLOR}
                    size={widthPercentageToDP("10%")}
                  />
                </ProfileView>
                <Name>{item.user.username}</Name>
              </CommentTopLeft>
              <CommentTopStars>
                <IconeSecond
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 0 ? "#6bc76b" : "#bec1bd"}
                />
                <IconeSecond
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 1 ? "#6bc76b" : "#bec1bd"}
                />
                <IconeSecond
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 2 ? "#6bc76b" : "#bec1bd"}
                />
                <IconeSecond
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 3 ? "#6bc76b" : "#bec1bd"}
                />
                <IconeSecond
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 4 ? "#6bc76b" : "#bec1bd"}
                />
              </CommentTopStars>
            </CommentTopView>
            <CommentText>{item.comment}</CommentText>
          </CommentView>
        ))}
    </ContainerScroll>
  );
};

export default Companies;
