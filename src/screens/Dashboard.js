import React from 'react';
import {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Theme} from './../utilities/Theme';
import {Fonts} from './../utilities/Fonts';
import GlobalStyle from '../utilities/GlobalStyle';
import {DummyData} from './../utilities/DummyData';

import ButtonCircleIcon from '../components/ButtonCircleIcon';
import PosterImage from '../components/PosterImage';
import {useState} from 'react';

const Dashboard = ({navigation}) => {
  const TAG = 'Screen: Dashboard// ';

  const windowDimension = Dimensions.get('window');
  const width = windowDimension.width;
  const height = windowDimension.height;

  const defaultGenre = 'All';

  const latestMovie = DummyData.dummyMovieData;
  const movieArray = DummyData.dummyMovieDataArrayed;
  const movieGenreArray = [defaultGenre, ...DummyData.dummyMovieCategories];

  const [selectedGenre, setSelectedGenre] = useState(defaultGenre);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);
    // navigation.openDrawer()
  }, []);

  const handleGenrePress = genre => {
    console.log('genre: ', genre);
    setSelectedGenre(genre);
  };

  const handleMoviePress = movie => {
    console.log('movie pressed: ', movie.title);
  };

  return (
    <View>
      <ImageBackground
        style={{width, height}}
        source={require('../assets/res/bgimage.png')}>
        <LinearGradient
          style={{width, height: height}}
          colors={[
            Theme.purpledarkesta15,
            //   Theme.purpledarka15,
            Theme.purpledarkest,
            Theme.purpledarkest,
            Theme.purpledarkest,
          ]}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <ButtonCircleIcon
                iconName={'menu-outline'}
                backgroundColor={null}
              />
              <ButtonCircleIcon
                iconName={'search-outline'}
                backgroundColor={null}
                iconSize={35}
              />
            </View>
            <View
              style={{
                height: 200,
                width,
                // backgroundColor: 'skyblue',
                flexDirection: 'row',
                paddingHorizontal: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  flex: 3,
                  //   backgroundColor: 'red',
                  flexDirection: 'column-reverse',
                }}>
                <View
                  style={{
                    // flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                    // backgroundColor:'green'
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.bold,
                      color: Theme.light,
                      fontSize: 30,
                      width: '100%',
                    }}>
                    {latestMovie.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.medium,
                      color: Theme.light,
                      fontSize: 20,
                      width: '100%',
                    }}>
                    {latestMovie.releaseYear}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                  }}>
                  {latestMovie.categories.map((e, i) => {
                    return (
                      <View key={i}>
                        <TouchableOpacity onPress={() => handleGenrePress(e)}>
                          <Text
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 2,
                              borderWidth: 1,
                              borderColor: Theme.light,
                              borderRadius: 30,
                              textAlign: 'center',
                              fontSize: 14,
                              fontFamily: Fonts.medium,
                              color: Theme.light,
                              marginHorizontal: 2,
                              marginVertical: 2,
                            }}>
                            {e}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
                <Text
                  style={{
                    fontFamily: Fonts.bold,
                    color: Theme.light,
                    fontSize: 18,
                    width: '100%',
                  }}>
                  Latest Movie
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  //    backgroundColor: 'blue'
                }}>
                <PosterImage
                  pressable
                  onPress={() => handleMoviePress(latestMovie)}
                />
              </View>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <View
                style={[
                  GlobalStyle.separator,
                  {marginVertical: 20},
                  {alignSelf: 'center'},
                ]}
              />
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text
                style={{
                  fontFamily: Fonts.bold,
                  color: Theme.light,
                  fontSize: 18,
                  width: '100%',
                }}>
                Hot Movies
              </Text>
            </View>
            <View>
              <FlatList
                data={movieArray}
                keyExtractor={item => item._id}
                horizontal={true}
                renderItem={({item}) => {
                  //   console.log('item: ', item);
                  return (
                    <View
                      key={item.id}
                      style={{
                        width: 100,
                        marginLeft: 16,
                        marginVertical: 10,
                        alignItems: 'center',
                      }}>
                      <PosterImage
                        small
                        pressable
                        onPress={() => handleMoviePress(item)}
                      />
                      <Text
                        style={{
                          fontFamily: Fonts.bold,
                          color: Theme.light,
                          fontSize: 14,
                          width: '110%',
                          textAlign: 'center',
                          marginTop: 5,
                          //   backgroundColor: 'red',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                // keyExtractor={item => item.id}
              />
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text
                style={{
                  fontFamily: Fonts.bold,
                  color: Theme.light,
                  fontSize: 18,
                  width: '100%',
                }}>
                By Genre
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <FlatList
                data={movieGenreArray}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  const isSelectedGenre = item == selectedGenre;

                  return (
                    <View style={{marginHorizontal: 5}}>
                      <TouchableOpacity
                        onPress={() => handleGenrePress(item)}
                        disabled={isSelectedGenre}>
                        <Text
                          style={[
                            {
                              paddingHorizontal: 10,
                              paddingVertical: 2,

                              borderRadius: 30,
                              textAlign: 'center',
                              fontSize: 14,
                              fontFamily: Fonts.medium,
                              marginHorizontal: 2,
                              marginVertical: 2,
                            },
                            isSelectedGenre
                              ? {
                                  // borderWidth: 1,
                                  // borderColor: Theme.light,
                                  backgroundColor: Theme.light,
                                  color: Theme.purpledarkest,
                                }
                              : {
                                  borderWidth: 1,
                                  borderColor: Theme.light,
                                  color: Theme.light,
                                },
                          ]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{marginBottom: 100, marginTop: 20}}>
              <FlatList
                data={movieArray}
                keyExtractor={item => item._id}
                nestedScrollEnabled
                horizontal
                // scrollEnabled={false}
                renderItem={({item}) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        width: 100,
                        marginHorizontal: 10,
                        marginVertical: 10,
                        alignItems: 'center',
                      }}>
                      <PosterImage
                        small
                        pressable
                        onPress={() => handleMoviePress(item)}
                      />
                      <Text
                        style={{
                          fontFamily: Fonts.bold,
                          color: Theme.light,
                          fontSize: 14,
                          width: '110%',
                          textAlign: 'center',
                          marginTop: 5,
                          //   backgroundColor: 'red',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
