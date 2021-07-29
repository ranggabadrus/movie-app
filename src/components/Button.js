import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from './../utilities/Theme';
import {Fonts} from './../utilities/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({
  text = 'Button',
  onPress = () => {
    console.log('Please override onPress in this Button');
  },
  radius = 10,
  isWithRadius = false,
  fontSize = 16,
  backColor = Theme.darker,
  textColor,
  isBold = true,
  isFull = false,
  iconEnabled = false,
  iconName = 'home',
  align = 'center',
  style,
}) => {
  const buttonRadius = isWithRadius ? radius : null;
  const fontFams = isBold ? Fonts.bold : Fonts.regular;
  const handleBackColor = backColor == null ? null : backColor;
  const handleBackColorForText =
    backColor == null
      ? textColor == null
        ? Theme.darker
        : textColor
      : textColor;
  const handleAlign =
    align == 'center'
      ? 'center'
      : align == 'left'
      ? 'flex-start'
      : 'flex-right';
  return (
    <View style={[isFull ? null : {flexWrap: 'wrap'}, style]}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          GlobalStyle.buttonContainer,
          {
            borderRadius: buttonRadius,
            backgroundColor: handleBackColor,
            alignItems: handleAlign,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          {iconEnabled ? (
            <Icon
              name={iconName}
              size={fontSize * 1.2}
              color={handleBackColorForText}
              style={{marginRight: 16}}
            />
          ) : null}

          <Text
            style={{
              fontSize: fontSize,
              color: handleBackColorForText,
              fontFamily: fontFams,
            }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
