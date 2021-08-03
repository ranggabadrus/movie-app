import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import {interpolate} from 'react-native-reanimated';
import {Fonts} from '../utilities/Fonts';
import {Theme} from './../utilities/Theme';

const EditTextV2 = ({
  title = 'Username',
  placeholder,
  disablePlaceholder = true,
  disableTitle = false,
  borderRadius = 15,
  titleSize = 14,
  disableBorder = false,
  backgroundColor = Theme.light,
  // placeholderTextColor = Theme.darker,
  textColor = Theme.darker,
  borderColor = Theme.darker,
  lines = 1,
  secured = false,
  autoCap = 'sentences',
  keyType = null,
  disableAnimation = false,
  onFocusColor = Theme.yellow,
  onErrorColor = Theme.orange,
  value,
  onChangeText = txt => {
    console.log('please override onChangeText in EditText// value: ', txt);
  },
  isError = false,
  style,
  textStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isStateError, setIsStateError] = useState(isError);
  const [currentColor, setCurrentColor] = useState();
  const [text, setText] = useState(value);
  const translateY = useRef(
    new Animated.Value(titleSize + titleSize / 1.5),
  ).current;
  const translateColor = useRef(new Animated.Value(0)).current;

  const animationDuration = 200;

  const isMultiline = lines > 1;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.stagger(animationDuration * 2, [
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(translateColor, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  const handleUnfocused = () => {
    setIsFocused(false);
    Animated.timing(translateColor, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const handleError = errorState => {
    Animated.timing(translateColor, {
      toValue: errorState ? 2 : isFocused ? 1 : 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setIsStateError(isError);
  }, []);

  useEffect(() => {
    handleError(isError);
  }, [isError]);

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

  const placeholderText = disablePlaceholder
    ? null
    : placeholder != null
    ? placeholder
    : title;

  const handleColor = translateColor.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [borderColor, onFocusColor, onErrorColor],
  });
  return (
    <View style={{}}>
      {title != null && !disableTitle ? (
        <Animated.View style={{}}>
          <Animated.Text
            style={[
              {
                position: 'absolute',
                zIndex: 1,
                transform: [{translateY: !disableAnimation ? translateY : 0}],
                marginLeft: borderRadius,
                backgroundColor,
                paddingVertical: 0,

                paddingHorizontal: 5,
                fontFamily: Fonts.bold,
                color: textColor,
                fontSize: titleSize,
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderRadius,
              },
              {...textStyle},
            ]}>
            {title}
          </Animated.Text>
        </Animated.View>
      ) : null}
      <Animated.View
        style={[
          {
            borderRadius,
            marginTop: titleSize / 1.3,
            borderWidth: disableBorder ? 0 : 2,
            backgroundColor,
            borderColor: !disableAnimation ? handleColor : borderColor,
          },
          {...style},
        ]}>
        <TextInput
          style={[
            {
              paddingHorizontal: borderRadius + 5,
              paddingVertical: 8,
              fontFamily: Fonts.medium,
              color: textColor,
              fontSize: titleSize + 4,
            },
          ]}
          placeholder={
            disableTitle
              ? disablePlaceholder
                ? title
                : placeholder != null
                ? placeholder
                : null
              : null
          }
          placeholderTextColor={textColor}
          value={text}
          onChangeText={t => {
            setText(t);
          }}
          secureTextEntry={secured}
          scrollEnabled={isMultiline}
          multiline={isMultiline}
          numberOfLines={lines}
          keyboardType={keyboardsType(keyType)}
          onFocus={() => handleFocus()}
          autoCapitalize={autoCap}
          onBlur={() => handleUnfocused()}
          value={value}
          onChangeText={t => {
            setText(t);
            onChangeText(t);
          }}
        />
      </Animated.View>
    </View>
  );
};

export default EditTextV2;

const styles = StyleSheet.create({});
