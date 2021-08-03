import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Fonts} from './../utilities/Fonts';
import {Theme} from './../utilities/Theme';
import {imageDimens} from './../utilities/Dimens';
import {useDispatch, useSelector} from 'react-redux';

const TAG = 'Screen: SplashScreen// ';
const windowDimension = Dimensions.get('window');
const width = windowDimension.width;
const height = windowDimension.height;
const logoDimension = imageDimens(width, 80);

// console.log(imageDim);
// const IMAGE_SIZE = width * 0.7;
const SplashScreen = ({navigation}) => {
  const [userTokenFound, setUserTokenFound] = useState(false);
  const [userLoaded, setUserLoaded] = useState();
  const [movieDataLoaded, setMovieDataLoaded] = useState([]);

  const dispatch = useDispatch();
  const dummyUser = {
    name: 'Isumi Karina',
    email: 'cemungudh.isumi@gmail.gg',
    username: 'isumicaem',
    token:
      'asddddddddddddddddddddddddddddasaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111112333333333333333344444444444444445555555555',
  };
  const dummyMovieArray = [
    {title: 'The Extraordinary'},
    {title: 'Most Wanted Police'},
  ];

  const userData = useSelector(state => state.user.userData);
  console.log('userData: ', userData);

  const userFlow = () => {
    // console.log('userFlow');
    userData.userToken != null
      ? navigation.navigate('Dashboard')
      : navigation.navigate('Login');
  };

  const handleUserFlow = () => {
    userTokenFound
      ? setTimeout(() => {
          setUserLoaded(dummyUser);
          setTimeout(() => {
            setMovieDataLoaded(dummyMovieArray);
          }, 4000);
        }, 2000)
      : setTimeout(() => {
          navigation.navigate('Login');
        }, 4000);
  };

  useEffect(() => {
    userFlow();
  }, []);

  const handleLoadingText = () => {
    return !userLoaded
      ? 'getting your data'
      : movieDataLoaded.length < 1
      ? 'getting movie libraries'
      : 'all data ready';
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
          <View style={styles.textContainer}>
            <Text style={styles.loadingText}>{handleLoadingText()}</Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

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
    top: height / 8,
    //   justifyContent: 'center',
    // backgroundColor: 'red',
    //   left:-width/4,
    //   margin: 20,
  },
  textContainer: {
    height: height * 0.8,
    justifyContent: 'flex-end',
  },
  loadingText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'center',
    // top:300,
  },
});
