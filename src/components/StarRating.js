import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonCircleIcon from './ButtonCircleIcon';
import {Theme} from './../utilities/Theme';
import {useState} from 'react';

const StarRating = ({
  onRatePress = number => {
    console.log(
      'please override onRatePress in StarRating// rating feedback:',
      number,
    );
  },
  defaultNumber = 0,
}) => {
  const [starRating, setStarRating] = useState(defaultNumber);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <ButtonCircleIcon
        iconName={starRating >= 1 ? 'star' : 'star-outline'}
        backgroundColor={null}
        iconColor={Theme.purpledark}
        iconSize={30}
        onPress={() => {
          setStarRating(1);
          onRatePress(1);
        }}
      />
      <ButtonCircleIcon
        iconName={starRating >= 2 ? 'star' : 'star-outline'}
        backgroundColor={null}
        iconColor={Theme.purpledark}
        iconSize={30}
        onPress={() => {
          setStarRating(2);
          onRatePress(2);
        }}
      />
      <ButtonCircleIcon
        iconName={starRating >= 3 ? 'star' : 'star-outline'}
        backgroundColor={null}
        iconColor={Theme.purpledark}
        iconSize={30}
        onPress={() => {
          setStarRating(3);
          onRatePress(3);
        }}
      />
      <ButtonCircleIcon
        iconName={starRating >= 4 ? 'star' : 'star-outline'}
        backgroundColor={null}
        iconColor={Theme.purpledark}
        iconSize={30}
        onPress={() => {
          setStarRating(4);
          onRatePress(4);
        }}
      />
      <ButtonCircleIcon
        iconName={starRating >= 5 ? 'star' : 'star-outline'}
        backgroundColor={null}
        iconColor={Theme.purpledark}
        iconSize={30}
        onPress={() => {
          setStarRating(5);
          onRatePress(5);
        }}
      />
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({});
