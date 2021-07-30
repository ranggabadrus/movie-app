import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Movie = ({navigation,route}) => {
  console.log('props: ', route.params);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
