import React, { useEffect } from "react";
import { RefreshControl, Animated } from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { ContainerScroll } from "../../styles/scrollView";
import SlideImages from "../../Components/SlideImages";

import {
  Recent,
  RecentItem,
  RecentTitle,
  RecentIcon,
  RecentText,
} from "./styles";

import {
  dashRequest,
  promoRequest,
} from "../../store/modules/dashboard/actions";

import { ICON_CHECKBOX_SIZE } from "../../styles/sizes";
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

  const topProducts = useSelector((state) => state.dash.topProducts);

  useEffect(() => {
    store.dispatch(dashRequest());
    store.dispatch(promoRequest());
  }, []);

  return (
    <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
      <Recent>
        <RecentTitle>BUSCAS RECENTES</RecentTitle>
        <RecentItem>
          <RecentText>&ldquo;Acerola&rdquo;</RecentText>
          <Icon
            style={{ marginRight: 5 }}
            name="arrow-top-left"
            size={ICON_CHECKBOX_SIZE}
            color={TEXT_SECONDARY}
          />
        </RecentItem>
        <RecentItem>
          <RecentText>&ldquo;Acerola&rdquo;</RecentText>
          <Icon
            style={{ marginRight: 5 }}
            name="arrow-top-left"
            size={ICON_CHECKBOX_SIZE}
            color={TEXT_SECONDARY}
          />
        </RecentItem>
        <RecentItem>
          <RecentText>&ldquo;Acerola&rdquo;</RecentText>
          <Icon
            style={{ marginRight: 5 }}
            name="arrow-top-left"
            size={ICON_CHECKBOX_SIZE}
            color={TEXT_SECONDARY}
          />
        </RecentItem>
      </Recent>
      <SlideImages
        color={color}
        title="Raízes"
        listElements={topProducts}
        nItemsInScreen={2}
      />
      <SlideImages
        color={color}
        title="Raízes"
        listElements={topProducts}
        nItemsInScreen={2}
      />
      <SlideImages
        color={color}
        title="Raízes"
        listElements={topProducts}
        nItemsInScreen={2}
      />
      <SlideImages
        color={color}
        title="Raízes"
        listElements={topProducts}
        nItemsInScreen={2}
      />
    </ContainerScroll>
  );
};

export default Search;
