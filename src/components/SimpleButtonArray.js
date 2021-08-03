import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../utilities/Fonts';
import {Theme} from '../utilities/Theme';

const SimpleButtonArray = ({
  data = [],
  onItemPress = e => {
    console.log(
      'please override onItemPress in this SimpleCategorySliderButton // clicked: ',
      e,
    );
  },
  orientation = 'column',
  style,
  width="100%",
  disableButton =false,
}) => {
  const latestMovie = data;
  // console.log(latestMovie);
  return (
    <View style={{flexDirection: orientation, width, flexWrap: 'wrap'}}>
      {latestMovie.map((e, i) => {
        return (
          <View key={i}>
            <TouchableOpacity disabled={disableButton} onPress={() => onItemPress(e)}>
              <Text
                style={[
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    borderWidth: 1,
                    borderColor: Theme.light,
                    borderRadius: 30,
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: Fonts.medium,
                    color: Theme.light,
                    marginRight: 10,
                    marginVertical: 2,
                  },
                  {...style},
                ]}>
                {e}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default SimpleButtonArray;

const styles = StyleSheet.create({});
