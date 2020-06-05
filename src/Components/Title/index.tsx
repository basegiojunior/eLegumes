import React from "react";
import { TextProps } from "react-native";

import { TitleText } from "./styles";

const Title: React.FC<TextProps> = ({ ...rest }) => {
  return <TitleText {...rest} />;
};

export default Title;
