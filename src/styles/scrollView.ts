import styled from "styled-components/native";
// import { widthPercentageToDP } from "../Components/PercentageConverter";

import { COLOR_BACKGROUND_PRIMARY } from "./colors";

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
    // padding: widthPercentageToDP("3%"),
  },
  keyboardShouldPersistTaps: "always",
}))`
  background-color: ${COLOR_BACKGROUND_PRIMARY};
`;
