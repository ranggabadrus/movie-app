import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Dimens} from '../utilities/Dimens';
import GlobalStyle from '../utilities/GlobalStyle';
import {Fonts} from '../utilities/Fonts';
import {Theme} from '../utilities/Theme';

import AvatarImageCircle from '../components/AvatarImageCircle';
import Button from '../components/Button';
import ButtonCircleIcon from '../components/ButtonCircleIcon';
import EditText from '../components/EditText';
import AvatarImage from './../components/AvatarImage';
import EditTextV2 from './../components/EditTextV2';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function pickImage() {
  ImagePicker.showImagePicker(options, response => {
    // console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {
        uri: response.uri,
        type: response.type,
        data: response.data,
        name: response.fileName,
      };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      // setRawImage(source); //state
      // setImage(response.uri); //state
    }
  });
}

const EditProfile = ({navigation}) => {
  const windowDimension = Dimensions.get('window');
  const width = windowDimension.width;
  const height = windowDimension.height;

  const [userData, setUserData] = useState({
    userFullName: 'Isumi Karina',
    userUsername: 'isumicaem',
  });
  const [userFullName, setUserFullName] = useState('');
  const [username, setUsername] = useState('');

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
            Theme.purpledarkest,
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
                }}></View>
              <View
                style={{
                  height: height / 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {
                  ////top spacers
                }
                <AvatarImageCircle size={120} />
                {
                  //TODO change user image avatar
                }
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    //   width:'80%',
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Text style={[GlobalStyle.textTitle, {paddingRight: 10}]}>
                    Isumi Karina
                  </Text>
                  <Text style={[GlobalStyle.textCardH2, {paddingRight: 10}]}>
                    @isumicaem
                  </Text>
                </View>
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
            <View
              style={{
                paddingHorizontal: Dimens.globalPaddingHorizontal,
                paddingTop: 10,
              }}>
              <EditTextV2
                backgroundColor={Theme.purpledarkest}
                title={'Full Name'}
                textColor={Theme.light}
                borderColor={Theme.light}
                placeholder={'testplace'}
                style={{marginBottom: 10}}
                onChangeText={t => setUserFullName(t)}
                isError
              />

              <EditTextV2
                backgroundColor={Theme.purpledarkest}
                title={'Username'}
                textColor={Theme.light}
                borderColor={Theme.light}
                placeholder={'testplace'}
                style={{marginBottom: 10}}
                onChangeText={t => setUsername(t)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row-reverse',
                paddingHorizontal: Dimens.globalPaddingHorizontal,
                marginTop: 10,
              }}>
              <Button
                isBold
                backgroundColor={Theme.yellow}
                textColor={Theme.purpledarkest}
                text={'Submit'}
                buttonColor={Theme.light}
                radius={10}
                isWithRadius
                style={{paddingHorizontal: 30}}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
