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
import Slider from '../components/Slider';
import AvatarImageCircle from '../components/AvatarImageCircle';
import MovieReviewCard from '../components/MovieReviewCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  subscribeMovie,
  unsubscribeMovie,
  addBookmark,
  deleteBookmark,
} from '../redux/action/movieAction';

const movieArray = DummyData.dummyMovieDataArrayed;
const movieReview = DummyData.dummyReviewData.review;
// console.log('movie Array', movieArray);
console.log('movie review', movieReview);

const user = {userID: 'user-Karina99'};

const Movie = ({navigation, route}) => {
  const dispatch = useDispatch();
  const movieData = route.params;
  // console.log(movieData);
  const windowDimension = Dimensions.get('window');
  const width = windowDimension.width;
  const height = windowDimension.height;

  const animationDuration = 750;

  const [starsCount, setStarsCount] = useState(0);
  const [isCommentApear, setIsCommentApear] = useState(false);
  const [userSubscribed, setUserSubscribed] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const bookmarkMovie = useSelector(state => state.movie.bookmarkMovie);

  useEffect(() => {
    let a = bookmarkMovie.find(foo => foo._id === movieData._id);
    console.log('aa ', a);
    if (a) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  }, [bookmarkMovie]);

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(height)).current;
  const translateZ = useRef(new Animated.Value(-1)).current;

  const subsData = useSelector(state => state.movie.userSubscribedMovie);

  useEffect(() => {
    if (subsData != null) {
      const userIndex = subsData.findIndex(item => item.userID == user.userID);
      console.log('found user subs data in index: ', userIndex);
      if (userIndex >= 0) {
        const userSubsData = subsData[userIndex];
        console.log('user subs data: ', userSubsData);
        const thisMovieIndex = userSubsData.subscribedMovie.findIndex(
          item => item._id == movieData._id,
        );
        console.log('movie data found in user data in index: ', thisMovieIndex);
        if (thisMovieIndex >= 0) {
          console.log('movie subscribed');
          setUserSubscribed(true);
        } else {
          setUserSubscribed(false);
          console.log('movie not subscribed');
        }
      } else {
        setUserSubscribed(false);
      }
    } else {
      setUserSubscribed(false);
    }
  }, [subsData]);

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

  const handleMoviePress = selectedMovie => {
    navigation.push('MovieDetails', selectedMovie);
  };

  const handleBookmarkPress = () => {
    // userSubscribed
    // ? dispatch(unsubscribeMovie({userID: user.userID, movie: movieData}))
    // : dispatch(subscribeMovie({userID: user.userID, movie: movieData}));

    if (bookmark) {
      dispatch(deleteBookmark(movieData));
    } else {
      dispatch(addBookmark(movieData));
    }

    return;

    if (userSubscribed) {
      dispatch(unsubscribeMovie({userID: user.userID, movie: movieData}));
      setUserSubscribed(false);
    } else {
      dispatch(subscribeMovie({userID: user.userID, movie: movieData}));
      setUserSubscribed(true);
    }
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: height / 10,
              }}>
              <ButtonCircleIcon
                iconName={'chevron-back-outline'}
                backgroundColor={null}
                onPress={() => handleBackPress()}
              />
              <ButtonCircleIcon
                iconName={bookmark ? 'bookmark' : 'bookmark-outline'}
                backgroundColor={null}
                iconSize={35}
                onPress={() => handleBookmarkPress()}
              />
            </View>
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
              <ItemSliders
                data={movieArray}
                onItemPress={item => {
                  handleMoviePress(item);
                }}
              />

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
                    marginBottom: 20,
                  },
                ]}>
                This Movie Review
              </Text>
              <View>
                {
                  ////////////////////////////////////////////////EXPERIMENTAL
                }
                <Slider
                  data={movieReview}
                  snapInterval={width}
                  SetView={data => {
                    // console.log('indx', index);
                    return (
                      <MovieReviewCard
                        {...data}
                        width={width - Dimens.globalPaddingHorizontal * 2}
                      />
                    );
                  }}
                />
              </View>

              <View style={{marginVertical: 10, height: height / 20}} />
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
