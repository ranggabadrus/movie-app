import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Theme} from './../utilities/Theme';

const AvatarImageCircle = ({size = 80, src = null}) => {
  const sizing = size;
  const imgSrc = src == null ? null : {uri: src};
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Image
        source={imgSrc}
        style={{
          backgroundColor: Theme.orange,
          height: sizing,
          width: sizing,
          borderRadius: 500,
        }}
      />
    </View>
  );
};

export default AvatarImageCircle;

const styles = StyleSheet.create({});
