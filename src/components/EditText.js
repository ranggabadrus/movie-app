import React from 'react';
import {Text, TextInput, View} from 'react-native';
import '../utilities/GlobalStyle';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from './../utilities/Theme';

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
}) => {
  let placeholderOption = disablePlaceholder
    ? null
    : placeholder != null
    ? placeholder
    : title != null
    ? title
    : null;
  let bgElement = bgColor == null ? Theme.light : bgColor;
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
          {borderWidth: !isTitledFull ? borderWidth : null},
        ]}>
        <TextInput
          style={[
            GlobalStyle.editTextTextInput,
            {
              maxHeight: linesMax * 60,
              textAlignVertical: align,
            },
          ]}
          placeholder={placeholderOption}
          value={value}
          onChangeText={txt => onChangeText(txt)}
          secureTextEntry={isSecured}
          scrollEnabled={isScrollable}
          numberOfLines={lines}
          multiline={isScrollable}
          autoCapitalize={autoCap}
          keyboardType={keyboardsType(keyType)}
        />
      </View>
      {isTitled ? (
        <Text style={[GlobalStyle.editTextTitle, {backgroundColor: bgElement}]}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};

export default EditText;
