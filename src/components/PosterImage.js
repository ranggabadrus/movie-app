import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Theme} from '../utilities/Theme';

const PosterImage = ({
  width = 130,
  height = 200,
  borderRadius = 10,
  style,
  backgroundColor = Theme.yellow,
  pressable = false,
  onPress = () => console.log('please override onPress method on Poster Image'),
  imageSource,
  small = false,
  resolution = 0.7,
}) => {
  const handleImage = imageSource
    ? {uri: imageSource}
    : require('../assets/res/bgimage.png');
  const miniSize = {
    height: height * resolution,
    width: width * resolution,
  };
  const handleSize = small ? miniSize : {height, width};
  return (
    <View
      style={[
        {...handleSize, borderRadius},
        {...style},
        {overflow: 'hidden'},
        // {backgroundColor: 'red'},
      ]}>
      <View style={({...handleSize}, {backgroundColor})}>
        <TouchableOpacity
          disabled={!pressable}
          style={{...handleSize}}
          onPress={() => onPress()}>
          <Image
            style={[StyleSheet.absoluteFillObject, {...handleSize}]}
            source={handleImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PosterImage;

const styles = StyleSheet.create({});
