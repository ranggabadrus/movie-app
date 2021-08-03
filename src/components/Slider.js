import React, {useEffect, useRef} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Slider = ({
  data,
  SetView = item => {
    // console.log('item#',item.index,': ', item.item);
    return null;
  },
  vertical = false,
  disableScrollIndicator = false,
  snapInterval = 0,
}) => {
  return (
    <FlatList
      data={data}

      keyExtractor={(item, index) => index.toString()}
      horizontal={!vertical}
      snapToInterval={!vertical ? snapInterval : 0}
      showsHorizontalScrollIndicator={disableScrollIndicator}
      showsVerticalScrollIndicator={disableScrollIndicator}
      bounces={false}
      renderItem={e => {
        return (
            <SetView {...e} />
        );
      }}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({});
