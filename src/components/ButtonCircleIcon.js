import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import GlobalStyle from '../utilities/GlobalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {Theme} from './../utilities/Theme';

const ButtonCircleIcon = ({
  iconName = 'home',
  iconSize = 40,
  iconColor = Theme.darker,
  backgroundColor = Theme.darker,
  borderColor = Theme.darker,
  isBordered = false,
  expandButton = 0,
  position = null,
  onPress = () => {
    console.log('Please override onPress Circle Button Components');
  },
}) => {
  const Sizing = (iconSize + expandButton) * 1.3;
  const handleIconColor =
    backgroundColor == null
      ? iconColor == null
        ? Theme.darker
        : iconColor
      : iconColor;
  return (
    <View style={[GlobalStyle.buttonCircleContainer]}>
      <TouchableOpacity
        style={[
          GlobalStyle.buttonCircleTouchable,
          {backgroundColor: backgroundColor, borderColor: borderColor},
          isBordered ? {borderWidth: 2} : null,
          {
            width: Sizing,
            height: Sizing,
            borderRadius: 400,
            position: position,
          },
        ]}
        onPress={() => onPress()}>
        <Icon name={iconName} size={iconSize} color={handleIconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCircleIcon;
