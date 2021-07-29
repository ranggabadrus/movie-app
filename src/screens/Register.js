import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {imageDimens} from '../utilities/Dimens';
import {Fonts} from './../utilities/Fonts';
import {Theme} from './../utilities/Theme';

import EditText from './../components/EditText';
import Button from './../components/Button';
import ButtonCircleIcon from './../components/ButtonCircleIcon';
import AvatarImageCircle from './../components/AvatarImageCircle';

const TAG = 'Screen: Register// ';
const windowDimension = Dimensions.get('window');
const width = windowDimension.width;
const height = windowDimension.height;
const logoDimension = imageDimens(width, 80);

const Register = ({navigation}) => {
  const handleZIndex = -2;
  const handleRegisterButton = () => {};
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ImageBackground
        style={[{width, height}, StyleSheet.absoluteFillObject]}
        source={require('../assets/res/bgimage.png')}>
        <ImageBackground
          style={{
            width,
            height,
            backgroundColor: Theme.purpledarka90,
          }}>
          <View style={styles.logoContainer}>
            {/* <Image
              style={styles.logo}
              source={require('../assets/res/logos.png')}
            /> */}
            <ButtonCircleIcon
              iconName={'chevron-back-outline'}
              backgroundColor={null}
              onPress={() => handleBackButton()}
            />
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                // backgroundColor: 'gold',
                width,
              }}>
              <ButtonCircleIcon
                iconName={'person-circle-outline'}
                backgroundColor={null}
                iconSize={200}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                zIndex: handleZIndex,
                // backgroundColor: 'gold',
                width,
                top: 48,
              }}>
              <AvatarImageCircle size={163} />
            </View>
          </View>
          <View style={styles.editTextContainer}>
            <View style={{paddingHorizontal: 20}}>
              <EditText
                placeholder={'Username'}
                isTitled={false}
                nullifyBG
                borderWidth={null}
                placeholderTextColor={Theme.light}
                underlined
                height={40}
              />
              <EditText
                placeholder={'Full Name'}
                isTitled={false}
                nullifyBG
                borderWidth={null}
                placeholderTextColor={Theme.light}
                underlined
                height={40}
              />
              <EditText
                placeholder={'Email'}
                isTitled={false}
                nullifyBG
                borderWidth={null}
                placeholderTextColor={Theme.light}
                underlined
                height={40}
                keyType={'email'}
              />
              <EditText
                placeholder={'Password'}
                isSecured
                isTitled={false}
                nullifyBG
                borderWidth={null}
                placeholderTextColor={Theme.light}
                underlined
                height={40}
              />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
                padding: 20,
                flexDirection: 'row',
              }}>
              <Button //Button Register
                text={'Register'}
                textColor={Theme.purplelight}
                buttonColor={Theme.light}
                backgroundColor={Theme.yellow}
                isWithRadius
                radius={30}
                textMarginHorizontal={10}
                isBold
                onPress={() => handleRegisterButton()}
              />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  logoContainer: {
    //   width,
    //   height,
    //   position: 'absolute',
    //   justifyContent: 'center',
    //   alignItems:'center',
    //   backgroundColor: 'gold',
    //   top: height / 6,
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'contain',
    ...logoDimension,
    top: height * 0.01,
    //   justifyContent: 'center',
    // backgroundColor: 'red',
    //   left:-width/4,
    //   margin: 20,
  },
  editTextContainer: {
    height: height * 0.72,
    justifyContent: 'flex-end',
  },
  loadingText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
