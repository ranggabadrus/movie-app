import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Theme} from './../utilities/Theme';

const AvatarImage = ({size = 60, minmaxRange = 20}) => {
  const sizing = size
  return (
    <View
      style={{
        justifyContent: 'center',
        // height: size,
        // width: size,
      }}>
      <Image
        style={{
          backgroundColor: Theme.orange,
          height: sizing,
          width: sizing,
          // maxHeight: size + minmaxRange,
          // minHeight: size - minmaxRange,
          // maxWidth: size + minmaxRange,
          // minWidth: size - minmaxRange,
          // margin: 0,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default AvatarImage;

const styles = StyleSheet.create({});
