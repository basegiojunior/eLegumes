import React from "react";
import { Modal, ActivityIndicator } from "react-native";

import { ContainerOut, ContainerIn } from "./styles";
import { widthPercentageToDP } from "../PercentageConverter";

type RequestProps = {
  visible: boolean;
};

const RequestConfirmation: React.FC<RequestProps> = ({ visible }) => (
  <Modal transparent visible={visible} animationType="fade">
    <ContainerOut>
      <ContainerIn>
        <ActivityIndicator size={widthPercentageToDP("10%")} color="black" />
      </ContainerIn>
    </ContainerOut>
  </Modal>
);

export default RequestConfirmation;
