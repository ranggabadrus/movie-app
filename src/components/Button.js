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
  buttonColor = Theme.darker,
  textColor,
  isBold = false,
  isFull = false,
  iconEnabled = false,
  iconName = 'home',
  align = 'center',
  style,
  backgroundColor,
  textMarginHorizontal,
}) => {
  const buttonRadius = isWithRadius ? radius : null;
  const fontFams = isBold ? Fonts.bold : Fonts.regular;
  const handlebuttonColor = buttonColor == null ? null : buttonColor;
  const handlebuttonColorForText =
    buttonColor == null
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
    <View
      style={[
        isFull
          ? null
          : {
              flexWrap: 'wrap',
              alignSelf: 'flex-start',
              borderRadius:buttonRadius
            },

        {
          backgroundColor: backgroundColor,
          borderRadius: buttonRadius,
        },
      ]}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          GlobalStyle.buttonContainer,
          {
            borderRadius: buttonRadius,
            // backgroundColor: handlebuttonColor,
            backgroundColor: handlebuttonColor,
            alignItems: handleAlign,
          },
          {...style},
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {iconEnabled ? (
            <Icon
              name={iconName}
              size={fontSize * 1.2}
              color={handlebuttonColorForText}
              style={{marginRight: 16}}
            />
          ) : null}

          <Text
            style={{
              fontSize: fontSize,
              color: handlebuttonColorForText,
              fontFamily: fontFams,
              marginHorizontal: textMarginHorizontal,
              // backgroundColor:'red'
            }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
