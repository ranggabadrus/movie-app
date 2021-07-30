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
import ButtonCircleIcon from '../components/ButtonCircleIcon';
import SimpleButtonArray from '../components/SimpleButtonArray';
import {Dimens} from '../utilities/Dimens';
import {Fonts} from '../utilities/Fonts';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from '../utilities/Theme';

const Movie = ({navigation, route}) => {
  const movieData = route.params;
  console.log(movieData);
  const windowDimension = Dimensions.get('window');
  const width = windowDimension.width;
  const height = windowDimension.height;
  return (
    <View>
      <ImageBackground
        style={{width, height}}
        source={require('../assets/res/bgimage.png')}>
        <LinearGradient
          style={{width, height}}
          colors={[
            Theme.purpledarka15,
            Theme.purpledarkest,
            Theme.purpledarkest,
          ]}>
          <ScrollView>
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
                  marginHorizontal:Dimens.globalPaddingHorizontal
                }}
              />
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
