import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../utilities/Fonts';
import {Theme} from '../utilities/Theme';
import AvatarImageCircle from './AvatarImageCircle';
import PosterImage from './PosterImage';

const ItemSlidersCircle = ({
  data,
  onItemPress = e => {
    console.log(
      'please override onItemPress in ItemSliders// itemPressed feedback: ',
      e,
    );
  },
  vertical = false,
}) => {
  // console.log('data received: ', data);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      horizontal={!vertical}
      bounces={false}
      renderItem={({item}) => {
        //   console.log('item: ', item);
        return (
          <View
            key={item.id}
            style={{
              width: 100,
              marginLeft: 16,
              marginVertical: 10,
              alignItems: 'center',
            }}>
            {/* <PosterImage small pressable onPress={() => onItemPress(item)} /> */}
            <AvatarImageCircle />
            <Text
              style={{
                fontFamily: Fonts.bold,
                color: Theme.light,
                fontSize: 14,
                width: '110%',
                textAlign: 'center',
                marginTop: 5,
                //   backgroundColor: 'red',
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

export default ItemSlidersCircle;

const styles = StyleSheet.create({});
