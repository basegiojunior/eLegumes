import React, { useEffect } from "react";
import { RefreshControl, Animated } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useSelector } from "../../store/modules/rootReducer";

import { ContainerScroll } from "../../styles/scrollView";
import SlideImages from "../../Components/SlideImages";
import Loading from "../../Components/Loading";
import Title from "../../Components/Title";

import { Recent, RecentItem, RecentText } from "./styles";

import { searchRequest } from "../../store/modules/search/actions";
import { categoriesRequest } from "../../store/modules/categories/actions";

import { ICON_CHECKBOX_SIZE, SPACE_TWO_DP } from "../../styles/sizes";
import { TEXT_SECONDARY } from "../../styles/colors";

import { store } from "../../store/index";

const Search: React.FC = () => {
  // eslint-disable-next-line no-var
  var x = new Animated.Value(0);

  const color = x.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [
      "rgba(0, 0, 0, .07)",
      "rgba(0, 0, 0, .25)",
      "rgba(0, 0, 0, .07)",
    ],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(x, {
        toValue: 180,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const recentSearchs = useSelector((state) => state.search.recentSearchs);
  const categories = useSelector((state) => state.categories.categories);
  const loadingCategories = useSelector((state) => state.categories.loading);
  const loading = useSelector((state) => state.search.searchLoading);

  const handleRequest: Function = () => {
    store.dispatch(categoriesRequest());
  };

  const handleSubmit: Function = (searchValue: string) => {
    store.dispatch(searchRequest(searchValue.trim()));
  };

  useEffect(() => {
    if (categories === []) {
      store.dispatch(categoriesRequest());
    }
  }, []);

  return (
    <ContainerScroll
      refreshControl={
        <RefreshControl
          onRefresh={() => handleRequest()}
          refreshing={loadingCategories}
        />
      }
    >
      <Loading visible={loading} />
      {recentSearchs.length > 0 && (
        <Recent>
          <Title style={{ marginBottom: SPACE_TWO_DP }}>BUSCAS RECENTES</Title>
          {recentSearchs.map((item, index) => (
            <RecentItem
              onPress={() => handleSubmit(item)}
              key={item.repeat(index)}
            >
              <RecentText>&ldquo;{item}&rdquo;</RecentText>
              <Icon
                style={{ marginRight: 5 }}
                name="arrow-top-left"
                size={ICON_CHECKBOX_SIZE}
                color={TEXT_SECONDARY}
              />
            </RecentItem>
          ))}
        </Recent>
      )}

      {Object.entries(categories).length > 0 &&
        Object.entries(categories).map((item) => (
          <SlideImages
            color={color}
            seeMoreData={{ name: item[1].name, id: item[1].id }}
            title={item[1].name.toUpperCase()}
            listElements={item[1].products}
            nItemsInScreen={2}
            key={item[1].id}
          />
        ))}
    </ContainerScroll>
  );
};

export default Search;
