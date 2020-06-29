import styled from "styled-components/native";
// import { widthPercentageToDP } from "../Components/PercentageConverter";

import SIZES from "./sizes";

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
    paddingBottom: SIZES.SPACE_SIX_DP,
  },
  keyboardShouldPersistTaps: "always",
}))`
  background-color: #fff;
`;
