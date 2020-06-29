import React from "react";
import { Modal, ActivityIndicator } from "react-native";

import { ContainerOut, ContainerIn } from "./styles";
import { widthPercentageToDP } from "../PercentageConverter";

import COLORS from "~/styles/colors";

type RequestProps = {
  visible: boolean;
};

const Loading: React.FC<RequestProps> = ({ visible }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <ContainerOut>
        <ContainerIn>
          <ActivityIndicator
            size={widthPercentageToDP("10%")}
            color={COLORS.PRIMARY_COLOR}
          />
        </ContainerIn>
      </ContainerOut>
    </Modal>
  );
};

export default Loading;
