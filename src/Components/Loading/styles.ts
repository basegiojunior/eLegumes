import styled from "styled-components/native";

import { widthPercentageToPx } from "../PercentageConverter";

export const ContainerOut = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerIn = styled.View`
  background-color: white;
  border-radius: ${widthPercentageToPx("7%")};
  width: ${widthPercentageToPx("14%")};
  height: ${widthPercentageToPx("14%")};
  align-items: center;
  justify-content: center;
`;
