import React from 'react';
import {Text, TextInput, View} from 'react-native';
import '../utilities/GlobalStyle';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from './../utilities/Theme';
import {Fonts} from './../utilities/Fonts';

const EditText = ({
  title = 'Text Title',
  placeholder = null,
  value = null,
  onChangeText = () => {
    //Default Function
    console.log('Please override onChangeText in Edit Text');
  },
  isTitled = true,
  isTitledFull = false,
  isSecured = false,
  disablePlaceholder = false,
  isScrollable = false,
  lines = 1,
  linesMax = lines,
  align = 'center',
  borderWidth = 2,
  bgColor = null,
  autoCap = 'sentences',
  keyType = null,
  nullifyBG = false,
  placeholderTextColor,
  textColor = placeholderTextColor,
  underlined = false,
  underlineThickness = 2,
  underlineColor = Theme.light,
  fontSize = 18,
  height,
  borderColor
}) => {
  let pickedColor = textColor;
  let placeholderOption = disablePlaceholder
    ? null
    : placeholder != null
    ? placeholder
    : title != null
    ? title
    : null;
  let bgElement = bgColor == null ? (nullifyBG ? null : Theme.light) : bgColor;
  let keyboardsType = keyType => {
    switch (keyType) {
      case 'number':
        return 'numeric';
      case 'email':
        return 'email-address';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };
  return (
    <View
      style={[
        GlobalStyle.editTextContainer,
        {
          borderWidth: isTitledFull ? borderWidth : null,
          backgroundColor: bgElement,
          
        },
      ]}>
      <View
        style={[
          GlobalStyle.editTextTextInputContainer,
          {borderWidth: !isTitledFull ? borderWidth : null},{borderColor}
        ]}>
        <TextInput
          style={[
            GlobalStyle.editTextTextInput,
            {
              maxHeight: fontSize * 7,
              textAlignVertical: align,
              color: pickedColor,
              fontFamily: Fonts.bold,
              borderBottomWidth: underlined ? underlineThickness : null,
              borderColor: underlineColor,
              fontSize: fontSize,
              height:height,
            },
          ]}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderOption}
          value={value}
          onChangeText={txt => onChangeText(txt)}
          secureTextEntry={isSecured}
          scrollEnabled={isScrollable}
          numberOfLines={lines}
          multiline={isScrollable}
          autoCapitalize={autoCap}
          keyboardType={keyboardsType(keyType)}
          // maxLength={3}
        />
      </View>
      {isTitled ? (
        <Text style={[GlobalStyle.editTextTitle, {backgroundColor: bgElement, color:textColor}]}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};

export default EditText;
