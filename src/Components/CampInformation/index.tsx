import React, { useState, useEffect } from "react";

import { CampInformationView, ContainerCamp, AlertIcon } from "./styles";
import { ICON_SIZE } from "../../styles/sizes";

type Camp = {
  error: string;
  show: boolean;
};

const CampInformation: React.FC<Camp> = ({ error, show }) => {
  if (show && !!error) {
    return (
      <ContainerCamp>
        <AlertIcon name="alert-circle" size={ICON_SIZE} color="red" />
        <CampInformationView>{error}</CampInformationView>
      </ContainerCamp>
    );
  }

  return null;
};

export default CampInformation;
