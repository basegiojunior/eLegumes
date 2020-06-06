import React from "react";
import { Text } from "react-native";

import { Container, ImageCompanie } from "./styles";

const Companies: React.FC = ({ route }) => {
  const { data } = route.params;
  return (
    <Container>
      <ImageCompanie source={{ uri: data.image.url }} />
    </Container>
  );
};

export default Companies;
