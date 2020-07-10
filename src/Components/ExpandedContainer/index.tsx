import React, { useRef, useState, useEffect } from "react";
import { Animated } from "react-native";
/* eslint-disable no-underscore-dangle */

import Icon from "~/Components/Icon";

import Button, { ButtonGhost } from "../Button";

import COLORS from "~/styles/colors";

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../PercentageConverter";

import {
  ExpandedEnd,
  ExpandedEndOff,
  ExpandedEndBackground,
  InfoTopContainer,
  InfoTopPrice,
  InfoTopTitle,
  InfoTopLeft,
  ButtonsContainer,
  ButtonsIntern,
} from "./styles";

type ExpandedType = {
  infoTopTitle: string;
  infoTopText: string;
  buttonLeftTitle: string;
  buttonLeftCall: CallableFunction;
  buttonRightTitle: string;
  buttonRightCall: CallableFunction;
  expanded: boolean;
};

const ExpandedContainer: React.FC<ExpandedType> = ({
  infoTopText,
  infoTopTitle,
  buttonLeftCall,
  buttonLeftTitle,
  buttonRightCall,
  buttonRightTitle,
  children,
  expanded,
}) => {
  const sizeExpandEnd = -heightPercentageToDP("65%");

  const expandedEnd = useRef(new Animated.Value(sizeExpandEnd)).current;
  const colorBack = expandedEnd.interpolate({
    inputRange: [sizeExpandEnd, 0],
    outputRange: ["rgba(0, 0, 0, .0)", "rgba(0, 0, 0, .35)"],
  });

  const [showModal, setShowModal] = useState(false);

  // gerencia a animação do conteiner expansível MAIOR
  function animatedExpandEnd(to: number): void {
    Animated.timing(expandedEnd, {
      toValue: to,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      if (to !== 0) {
        setShowModal(false);
      }
    });
  }

  useEffect(() => {
    if (expanded) {
      setShowModal(true);
      animatedExpandEnd(0);
    } else {
      animatedExpandEnd(sizeExpandEnd);
    }
  }, [expanded]);

  return (
    <ExpandedEndOff transparent visible={showModal}>
      <ExpandedEndBackground style={{ backgroundColor: colorBack }}>
        <ExpandedEnd style={{ bottom: expandedEnd }}>
          <InfoTopContainer>
            <InfoTopLeft>
              <InfoTopTitle>{infoTopTitle}</InfoTopTitle>
              <InfoTopPrice>{infoTopText}</InfoTopPrice>
            </InfoTopLeft>
            <Icon
              name="elegumes"
              color={COLORS.PRIMARY_COLOR}
              size={widthPercentageToDP("20%")}
            />
          </InfoTopContainer>

          {children}

          <ButtonsContainer>
            <ButtonsIntern>
              <ButtonGhost
                text={buttonLeftTitle}
                onPress={() => buttonLeftCall()}
              />
            </ButtonsIntern>
            <ButtonsIntern last>
              <Button
                text={buttonRightTitle}
                onPress={() => buttonRightCall()}
              />
            </ButtonsIntern>
          </ButtonsContainer>
        </ExpandedEnd>
      </ExpandedEndBackground>
    </ExpandedEndOff>
  );
};

export default ExpandedContainer;
