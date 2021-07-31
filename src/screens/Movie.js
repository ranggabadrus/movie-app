import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Dimens} from '../utilities/Dimens';
import {Fonts} from '../utilities/Fonts';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from '../utilities/Theme';
import {DummyData} from './../utilities/DummyData';

import ButtonCircleIcon from '../components/ButtonCircleIcon';
import EditText from '../components/EditText';
import ItemSlidersCircle from '../components/ItemSliderCircle';
import ItemSliders from '../components/ItemSliders';
import SimpleButtonArray from '../components/SimpleButtonArray';
import StarRating from '../components/StarRating';

const movieArray = DummyData.dummyMovieDataArrayed;
console.log('movie Array', movieArray);

const Movie = ({navigation, route}) => {
  const movieData = route.params;
  console.log(movieData);
  const windowDimension = Dimensions.get('window');
  const width = windowDimension.width;
  const height = windowDimension.height;

  const animationDuration = 1000;

  const [starsCount, setStarsCount] = useState(0);
  const [isCommentApear, setIsCommentApear] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(height)).current;
  const translateZ = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    console.log('triggered rating: ', starsCount);
  }, [starsCount]);

  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleHeartPress = () => {
    !isCommentApear
      ? Animated.stagger(1000, [
          Animated.parallel([
            Animated.timing(opacity, {
              toValue: !isCommentApear ? 1 : 0,
              duration: animationDuration,
              useNativeDriver: true,
            }),
            Animated.timing(translateZ, {
              toValue: !isCommentApear ? 1 : -1,
              duration: animationDuration,
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(translateY, {
            toValue: !isCommentApear ? height / 2 - 40 : height,
            duration: animationDuration,
            useNativeDriver: true,
          }),
        ]).start()
      : Animated.stagger(1000, [
          Animated.timing(translateY, {
            toValue: !isCommentApear ? height / 2 - 40 : height,
            duration: animationDuration,
            useNativeDriver: true,
          }),
          Animated.parallel([
            Animated.timing(opacity, {
              toValue: !isCommentApear ? 1 : 0,
              duration: animationDuration,
              useNativeDriver: true,
            }),
            Animated.timing(translateZ, {
              toValue: !isCommentApear ? 1 : -1,
              duration: animationDuration,
              useNativeDriver: true,
            }),
          ]),
        ]).start();
    setIsCommentApear(!isCommentApear);
  };

  const handleSubmitReview = () => {
    handleHeartPress();
  };

  return (
    <View>
      <ImageBackground
        style={{width, height}}
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
          <Animated.View
            style={{
              position: 'absolute',
              zIndex: translateZ,
              opacity: opacity,
            }}>
            <ImageBackground
              style={{
                width,
                height,
                backgroundColor: Theme.purpledarkesta90,
              }}>
              {
                /////////OVERLAY!!! NO MODAL
              }
              <Animated.View style={{transform: [{translateY: translateY}]}}>
                <ImageBackground
                  style={{
                    height: height / 1.5,
                    backgroundColor: Theme.light,
                    borderRadius: 20,
                    padding: 20,
                  }}>
                  <Text
                    style={[
                      GlobalStyle.textTitle,
                      {color: Theme.purpledark, fontFamily: Fonts.bold},
                    ]}>
                    Write your review
                  </Text>
                  <View style={{height: 10}} />
                  <View>
                    <StarRating
                      onRatePress={rating => {
                        setStarsCount(rating);
                      }}
                    />
                    <View style={{height: 10}} />
                  </View>
                  <EditText
                    title={'Review Title'}
                    disablePlaceholder
                    textColor={Theme.purpledark}
                    borderColor={Theme.purpledark}
                  />

                  <EditText
                    title={'Review Content'}
                    disablePlaceholder
                    textColor={Theme.purpledark}
                    borderColor={Theme.purpledark}
                    lines={5}
                    isScrollable
                    align={'top'}
                  />
                  <View style={{width: '100%', flexDirection: 'row-reverse'}}>
                    <ButtonCircleIcon
                      iconName={'checkmark-circle-outline'}
                      backgroundColor={null}
                      iconColor={Theme.purpledark}
                      onPress={() => handleSubmitReview()}
                    />
                    <ButtonCircleIcon
                      iconName={'close-outline'}
                      backgroundColor={null}
                      iconColor={Theme.purpledark}
                      onPress={() => handleHeartPress()}
                    />
                  </View>
                </ImageBackground>
              </Animated.View>
            </ImageBackground>
          </Animated.View>
          <ScrollView>
            <ButtonCircleIcon
              iconName={'chevron-back-outline'}
              backgroundColor={null}
              onPress={() => handleBackPress()}
            />
            <View
              style={{
                width,
                height: height / 3,
                // backgroundColor: 'white',
              }}
            />

            <View>
              {
                //HEADERS
              }
              <View style={{marginHorizontal: Dimens.globalPaddingHorizontal}}>
                <Text style={[GlobalStyle.textTitleHero, {}]}>
                  {movieData.title}
                </Text>
                <Text style={GlobalStyle.textTitleHeroSub}>
                  {movieData.releaseYear}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: Dimens.globalPaddingHorizontal,
                }}>
                <View
                  style={{
                    flex: 5,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <SimpleButtonArray
                    data={movieData.categories}
                    orientation={'row'}
                    style={{marginVertical: 5, marginTop: 10}}
                    width={'100%'}
                  />
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[GlobalStyle.textTitleHero, {color: Theme.yellow}]}>
                    {movieData.avgRating}
                  </Text>
                  <ButtonCircleIcon
                    backgroundColor={null}
                    iconSize={30}
                    iconName={'heart'}
                    onPress={() => handleHeartPress()}
                  />
                </View>
              </View>
              <View style={{padding: Dimens.globalPaddingHorizontal}}>
                <View
                  style={{
                    height: 0,
                    width: '100%',
                    borderColor: Theme.light,
                    borderTopWidth: 1,
                  }}
                />
              </View>
              <View style={{paddingHorizontal: Dimens.globalPaddingHorizontal}}>
                <Text style={[GlobalStyle.textTitle, {marginVertical: 5}]}>
                  Synopsis
                </Text>
                <Text style={GlobalStyle.textCardH2}>
                  {'      ' + movieData.synopsis}
                </Text>
                <View style={{marginVertical: 10}} />
                <Text style={[GlobalStyle.textTitle, {marginVertical: 5}]}>
                  Movie Info
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[GlobalStyle.textCardH2, {fontFamily: Fonts.bold}]}>
                    Director:{' '}
                  </Text>
                  <Text style={GlobalStyle.textCardH2}>
                    {movieData.director}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[GlobalStyle.textCardH2, {fontFamily: Fonts.bold}]}>
                    Release Date:{' '}
                  </Text>
                  <Text style={GlobalStyle.textCardH2}>
                    {movieData.releaseDate}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[GlobalStyle.textCardH2, {fontFamily: Fonts.bold}]}>
                    Budget:{' '}
                  </Text>
                  <Text style={GlobalStyle.textCardH2}>
                    USD {movieData.budget}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[GlobalStyle.textCardH2, {fontFamily: Fonts.bold}]}>
                    Featured OST:{' '}
                  </Text>
                  <Text style={GlobalStyle.textCardH2}>
                    {movieData.featuredSong}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 0,
                  //   width: '100%',
                  borderColor: Theme.light,
                  borderTopWidth: 1,
                  marginVertical: 20,
                  marginHorizontal: Dimens.globalPaddingHorizontal,
                }}
              />
              <Text
                style={[
                  GlobalStyle.textTitle,
                  {
                    marginVertical: 5,
                    paddingHorizontal: Dimens.globalPaddingHorizontal,
                  },
                ]}>
                Movies casts
              </Text>
              <ItemSlidersCircle data={movieArray} />
              {
                //TODO update ItemSlidersCircle
              }
              <View
                style={{
                  height: 0,
                  //   width: '100%',
                  borderColor: Theme.light,
                  borderTopWidth: 1,
                  marginVertical: 20,
                  marginHorizontal: Dimens.globalPaddingHorizontal,
                }}
              />
              <Text
                style={[
                  GlobalStyle.textTitle,
                  {
                    marginVertical: 5,
                    paddingHorizontal: Dimens.globalPaddingHorizontal,
                  },
                ]}>
                Movies like this
              </Text>
              <ItemSliders data={movieArray} />

              <View
                style={{
                  height: 0,
                  //   width: '100%',
                  borderColor: Theme.light,
                  borderTopWidth: 1,
                  marginVertical: 20,
                  marginHorizontal: Dimens.globalPaddingHorizontal,
                }}
              />
              <Text
                style={[
                  GlobalStyle.textTitle,
                  {
                    marginVertical: 5,
                    paddingHorizontal: Dimens.globalPaddingHorizontal,
                  },
                ]}>
                This Movie Review
              </Text>

              <View style={{marginVertical: 10, height: 100}} />
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
