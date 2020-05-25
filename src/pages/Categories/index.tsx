import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { ContainerScroll } from "../../styles/scrollView";

type CatProps = {
  navigation: any;
};

const Categories: React.FC<CatProps> = ({ navigation }) => {
  return <ContainerScroll />;
};

export default Categories;
