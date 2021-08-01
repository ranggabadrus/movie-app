import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimens} from '../utilities/Dimens';
import AvatarImageCircle from './AvatarImageCircle';
import { DummyData } from './../utilities/DummyData';
import GlobalStyle from '../utilities/GlobalStyle';
import { Fonts } from './../utilities/Fonts';
import { Theme } from '../utilities/Theme';

const MovieReviewCard = ({item, index, width}) => {
  const user = DummyData.dummyUserData[index]
  return (
    <View
      style={{
        // backgroundColor: 'gold',
        width: width,
        marginHorizontal: Dimens.globalPaddingHorizontal,
      }}>
      <View style={{flexDirection: 'row'}}>
        <AvatarImageCircle size={50}/>
        <View style={{flex:1,justifyContent:'center',marginStart:5}}>
          <Text style={[GlobalStyle.textCardH2,{fontFamily:Fonts.bold, fontSize:14}]}>{user.userFullName}</Text>
          <Text style={[GlobalStyle.textCardH2,{fontFamily:Fonts.medium, fontSize:12}]}>@{user.userName}</Text>
        </View>
        <Text style={[GlobalStyle.textCardH1,{fontFamily:Fonts.bold, fontSize:24,color:Theme.yellow, alignSelf:'center'}]}>
          {item.rating} star
        </Text>
      </View>
      <Text style={[GlobalStyle.textCardH1,{fontFamily:Fonts.bold,textAlign:'center',marginTop:10}]}>"{item.title}"</Text>
      <Text style={[GlobalStyle.textCardH2,{textAlign:'center',marginTop:10}]}>{item.content}</Text>
    </View>
  );
};

export default MovieReviewCard;

const styles = StyleSheet.create({});
