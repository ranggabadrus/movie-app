import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Fonts} from '../utilities/Fonts';
import {Theme} from './../utilities/Theme';

const EditTextV2 = ({
  title,
  placeholder = 'test',
  disablePlaceholder = false,
  disableTitle = false,
  borderRadius = 20,
  style,
  titleSize = 30,
  backgroundColor = Theme.dark,
  textStyle,

}) => {
  const placeholderText = placeholder != null ? placeholder : title;
  return (
    <View style={{backgroundColor: 'gold'}}>
      {title != null && !disableTitle ? (
        <Text
          style={[
            {
              position: 'absolute',
              zIndex: 1,
              marginLeft: borderRadius,
              backgroundColor,
              paddingHorizontal: 5,
              fontFamily: Fonts.bold,
              color: Theme.darker,
              fontSize: 14,
            },
            {...textStyle},
          ]}>
          {title}
        </Text>
      ) : null}
      <TextInput
        placeholder={placeholderText}
        style={[
          {
            borderRadius,
            top: 10,
            paddingHorizontal: borderRadius,
            borderWidth:2,
            backgroundColor
          },
          {...style},
        ]}
      />
    </View>
  );
};

export default EditTextV2;

const styles = StyleSheet.create({});
