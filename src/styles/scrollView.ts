import styled from "styled-components/native";
// import { widthPercentageToDP } from "../Components/PercentageConverter";

import { COLOR_BACKGROUND_PRIMARY } from "./colors";
import { SPACE_PRIMARY_DP } from "./sizes";

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
  },
  keyboardShouldPersistTaps: "always",
}))`
  background-color: ${COLOR_BACKGROUND_PRIMARY};
`;
