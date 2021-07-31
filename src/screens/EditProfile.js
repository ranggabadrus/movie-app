import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AvatarImageCircle from '../components/AvatarImageCircle';
import Button from '../components/Button';
import ButtonCircleIcon from '../components/ButtonCircleIcon';
import {Dimens} from '../utilities/Dimens';
import {Fonts} from '../utilities/Fonts';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from '../utilities/Theme';
import AvatarImage from './../components/AvatarImage';

const EditProfile = ({navigation}) => {
  const windowDimension = Dimensions.get('window');
  const width = windowDimension.width;
  const height = windowDimension.height;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ImageBackground
        style={{height, width}}
        source={require('../assets/res/bgimage.png')}>
        <LinearGradient
          style={{width, height}}
          colors={[
            Theme.purpledarka15,
            // Theme.purpledarka15,
            // Theme.purpledarkest,
            Theme.purpledarkest,
            Theme.purpledarkest,
          ]}>
          <ScrollView>
              <ButtonCircleIcon
                  iconName={'chevron-back-outline'}
                  backgroundColor={null}
                  onPress={() => handleBackPress()}
                />
            <View
              style={{
                paddingHorizontal: Dimens.globalPaddingHorizontal,
                // paddingTop: Dimens.globalPaddingHorizontal,
              }}>
              {
                //////////////////////This is a container View
              }
              <View
                style={{
                  //   flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                }}>
                {/* <Button
                  text={'Edit Profile'}
                  buttonColor={null}
                  fontSize={12}
                  textColor={Theme.light}
                  style={{
                    borderWidth: 1,
                    borderColor: Theme.light,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                  }}
                  isWithRadius
                /> */}
                
              </View>
              <View style={{height: height / 5,alignItems:'center',justifyContent:'flex-end'}}>
                {
                  ////top spacers
                }
                <AvatarImageCircle/>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  //   backgroundColor:'gold'
                }}>
                <View
                  style={{
                    //   width:'80%',
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems:'center'
                    //   backgroundColor:'gold'
                  }}>
                  <Text style={[GlobalStyle.textTitle, {paddingRight: 10}]}>
                    Isumi Karina
                  </Text>
                  <Text style={[GlobalStyle.textCardH2, {paddingRight: 10}]}>
                    @isumicaem
                  </Text>
                </View>
                {/* <View style={{width:100,height:100}}/> */}
                {/* <AvatarImage size={100} /> */}
                {
                  //TODO change user image avatar
                }
              </View>
              <View
                style={{
                  width: '100%',
                  borderTopColor: Theme.light,
                  borderTopWidth: 1,
                  marginVertical: 10,
                }}
              />
              <Text
                style={[
                  GlobalStyle.textCardH2,
                  {fontFamily: Fonts.bold, marginBottom: 10},
                ]}>
                Edit My Profile
              </Text>
              {
                ///////////////////////////////// end of container view
              }
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
