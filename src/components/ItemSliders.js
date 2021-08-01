import React, { useRef } from 'react';
import { useState } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../utilities/Fonts';
import {Theme} from '../utilities/Theme';
import PosterImage from './PosterImage';

const ItemSliders = ({
  data,
  onItemPress = e => {
    console.log(
      'please override onItemPress in ItemSliders// itemPressed feedback: ',
      e,
    );
  },
  vertical = false,
  itemWidth = 100,
  itemSpacing = 16,
  isSnap = false,
}) => {
  // console.log('data received: ', data);
  return (
    <FlatList
    data={data}
    keyExtractor={item => item._id}
    horizontal={!vertical}
    bounces={false}
    renderItem={({item,index}) => {
        //   console.log('item: ', item);
        return (
          <View
            key={item.id}
            style={{
              width: itemWidth,
              marginLeft: itemSpacing,
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <PosterImage small pressable onPress={() => onItemPress(item)} />
            <Text
              style={{
                fontFamily: Fonts.bold,
                color: Theme.light,
                fontSize: 14,
                width: '110%',
                textAlign: 'center',
                marginTop: 5,
              }}>
              {item.title}
            </Text>
          </View>
        );
      }}
      // keyExtractor={item => item.id}
    />
  );
};

export default ItemSliders;

const styles = StyleSheet.create({});
