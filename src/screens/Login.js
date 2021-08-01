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

const TAG = 'Screen: Login// ';
const windowDimension = Dimensions.get('window');
const width = windowDimension.width;
const height = windowDimension.height;
const logoDimension = imageDimens(width, 80);

const Login = ({navigation}) => {
  const handleRegisterButton = () => {
    navigation.navigate('Register');
  };
  const handleLoginButton = () => {
    navigation.replace('Dashboard'); ////TODO: change route later
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
            <Image
              style={styles.logo}
              source={require('../assets/res/logos.png')}
            />
          </View>
          <View style={styles.editTextContainer}>
            <View style={{paddingHorizontal: 20}}>
              <EditText
                placeholder={'Email'}
                isTitled={false}
                nullifyBG
                borderWidth={null}
                placeholderTextColor={Theme.light}
                underlined
                height={40}
                keyType={'email'}
                autoCap={null}
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
                buttonColor={null}
                textColor={Theme.light}
                isBold
                textMarginHorizontal={10}
                onPress={() => handleRegisterButton()}
              />
              <Button //Button Login
                text={'Login'}
                textColor={Theme.purplelight}
                buttonColor={Theme.light}
                backgroundColor={Theme.yellow}
                isWithRadius
                radius={30}
                textMarginHorizontal={10}
                isBold
                onPress={() => handleLoginButton()}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                width,
                marginBottom: height / 6,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderColor: Theme.light,
                      borderWidth: 2,
                      height: 0,
                      width: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.bold,
                      color: Theme.light,
                      fontSize: 20,
                      textAlign: 'center',
                      marginBottom: 30,
                      top: 10,
                    }}>
                    or
                  </Text>
                  <View
                    style={{
                      borderColor: Theme.light,
                      borderWidth: 2,
                      height: 0,
                      width: 100,
                    }}
                  />
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <ButtonCircleIcon //Button Facebook
                  iconName={'logo-facebook'}
                  backgroundColor={null}
                  // isBordered
                  // borderColor={Theme.light}
                />
                <ButtonCircleIcon //Button Google
                  iconName={'logo-google'}
                  backgroundColor={null}
                  // isBordered
                  // borderColor={Theme.light}
                />
                <ButtonCircleIcon //Button Linkedin
                  iconName={'logo-linkedin'}
                  backgroundColor={null}
                  // isBordered
                  // borderColor={Theme.light}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
    height: height,
    justifyContent: 'flex-end',
  },
  loadingText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
