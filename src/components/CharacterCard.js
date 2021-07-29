import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from '../utilities/Theme';
import AvatarImage from './AvatarImage';

const CharacterCard = ({height = 100, borderRadius = 0, image}) => {
  const borderRad = borderRadius;
  //   const contentAlign = alignContent == null ? null : null;

  return (
    <ImageBackground
      style={{
        width: '100%',
        // backgroundColor: Theme.green,
        overflow: 'hidden',
        // padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: borderRad,
          overflow: 'hidden',
          alignItems: 'center',
          backgroundColor: 'red',
          padding: 20,
        }}>
        <View style={{marginRight: 10}}>
          <AvatarImage size={height} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={[GlobalStyle.textCardH1, GlobalStyle.textCardHGlob]}>
            Heallo Ditta
          </Text>
          <Text style={[GlobalStyle.textCardH2, GlobalStyle.textCardHGlob]}>
            Lvl.12
          </Text>
          <Text style={[GlobalStyle.textCardH3, GlobalStyle.textCardHGlob]}>
            The Explorer
          </Text>
          {/* <Text style={GlobalStyle.textCardH4}>Max HP</Text> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default CharacterCard;
