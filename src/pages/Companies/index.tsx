import React, { useEffect, useState } from "react";
import { useSelector } from "~/store/modules/rootReducer";

import { ContainerScroll } from "~/styles/scrollView";
import Button from "~/Components/Button";
import Slide from "~/Components/SlideImages";
import Title from "~/Components/Title";

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
  Profile,
  Name,
  CommentText,
} from "./styles";

import { widthPercentageToDP } from "~/Components/PercentageConverter";

import { Companie } from "~/types";

type CompaniesProps = {
  route: {
    params: {
      data: Companie;
    };
  };
};

const Companies: React.FC<CompaniesProps> = ({ route }) => {
  const [stars, setStars] = useState([
    { id: 5, value: 1 },
    { id: 4, value: 1 },
    { id: 3, value: 1 },
    { id: 2, value: 1 },
    { id: 1, value: 1 },
  ]);

  const { data } = route.params;

  const companieProducts = useSelector(
    (state) => state.companies.companieProducts
  );
  const companieComments = useSelector(
    (state) => state.companies.companieComments
  );
  const companie = useSelector((state) => state.companies.companie);

  const color = "rgba(0,0,0,.1)";

  useEffect(() => {
    if (companie.id === data.id) {
      const { five, four, three, two, one } = companie.stars;
      // const { one } = companie.stars;

      const total = five + four + three + two + one;

      setStars([
        { id: 5, value: (five * 100) / total },
        { id: 4, value: (four * 100) / total },
        { id: 3, value: (three * 100) / total },
        { id: 2, value: (two * 100) / total },
        { id: 1, value: (one * 100) / total },
      ]);
    }
  }, [companie]);

  useEffect(() => {
    store.dispatch(companieProductsRequest(data.id, 1));
    store.dispatch(companieCommentsRequest(data.id, 1));
    store.dispatch(companieRequest(data.id));
  }, []);

  return (
    <ContainerScroll>
      <ImageCompanie source={{ uri: data.image.url }} />
      <Container>
        <CompanieName>{data.name}</CompanieName>
        <Address>
          <Icone
            color="#11bb11"
            size={widthPercentageToDP("7%")}
            name="map-marker"
          />
          <CompanieAddress>{data.address.description}</CompanieAddress>
        </Address>

        <Button text="entrar em contato" onPress={() => null} />
      </Container>
      <Slide
        listElements={companieProducts.products}
        color={color}
        show={
          companieProducts.products.length > 0 &&
          companieProducts.id === data.id
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
              {companie.id === data.id ? companie.rating : "?"}
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
            <Icone
              name="star"
              size={widthPercentageToDP("6%")}
              color={
                companie.rating > 0 && companie.id === data.id
                  ? "#6bc76b"
                  : "#bec1bd"
              }
            />
            <Icone
              name="star"
              size={widthPercentageToDP("6%")}
              color={
                companie.rating > 1 && companie.id === data.id
                  ? "#6bc76b"
                  : "#bec1bd"
              }
            />
            <Icone
              name="star"
              size={widthPercentageToDP("6%")}
              color={
                companie.rating > 2 && companie.id === data.id
                  ? "#6bc76b"
                  : "#bec1bd"
              }
            />
            <Icone
              name="star"
              size={widthPercentageToDP("6%")}
              color={
                companie.rating > 3 && companie.id === data.id
                  ? "#6bc76b"
                  : "#bec1bd"
              }
            />
            <Icone
              name="star"
              size={widthPercentageToDP("6%")}
              color={
                companie.rating > 4 && companie.id === data.id
                  ? "#6bc76b"
                  : "#bec1bd"
              }
            />
          </Stars>
        </RatingLeft>
        <RatingRight>
          {stars.map((item, index) => {
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
                  <Icone
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

      {companieComments.id === data.id &&
        companieComments.comments.map((item) => (
          <CommentView key={item.id}>
            <CommentTopView>
              <CommentTopLeft>
                <Profile source={profile} />
                <Name>{item.user.username}</Name>
              </CommentTopLeft>
              <CommentTopStars>
                <Icone
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 0 ? "#6bc76b" : "#bec1bd"}
                />
                <Icone
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 1 ? "#6bc76b" : "#bec1bd"}
                />
                <Icone
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 2 ? "#6bc76b" : "#bec1bd"}
                />
                <Icone
                  name="star"
                  size={widthPercentageToDP("4.5%")}
                  color={Math.round(item.rate) > 3 ? "#6bc76b" : "#bec1bd"}
                />
                <Icone
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
