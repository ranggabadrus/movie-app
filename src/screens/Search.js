import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import EditText from '../components/EditText';
import {Theme} from '../utilities/Theme';
import ButtonCircleIcon from './../components/ButtonCircleIcon';
import {Fonts} from './../utilities/Fonts';
import {DummyData, getMovieTitleAndID} from './../utilities/DummyData';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import PosterImage from '../components/PosterImage';
import GlobalStyle from '../utilities/GlobalStyle';
import {store} from './../redux/store';

const EditTextSearch = ({value, onChangeText}) => {
  return (
    <View
      style={{
        width: '60%',
        //   height: 30,
        borderColor: Theme.light,
        borderBottomWidth: 1,
        //   borderWidth: 1,
      }}>
      <TextInput
        style={{
          color: Theme.light,
          fontFamily: Fonts.medium,
          letterSpacing: 1.2,
          paddingVertical: 2,
        }}
        value={value}
        onChangeText={t => onChangeText(t)}
      />
    </View>
  );
};

const moviesArrayDummy = DummyData.dummyMovieDataArrayed;
console.log('movies array dummy: ', moviesArrayDummy);
const movieTitleIDArray = getMovieTitleAndID();
console.log('movies title-id array: ', movieTitleIDArray);

const Search = props => {
  const [search, setSearch] = useState('');
  const [movieSearched, setMovieSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const DROPDOWN_ITEM_HEIGHT = 20;

  const getSearchedMovie = () => {
    if (search.length >= 1) {
      setIsLoading(true);
      let foundMovies = moviesArrayDummy.filter(
        movie => movie.title.toLowerCase().search(search.toLowerCase()) >= 0,
      );
      console.log('search result: ', foundMovies);
      setMovieSearched(foundMovies);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    } else {
      setMovieSearched([]);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    }
  };

  useEffect(() => {
    getSearchedMovie();
    // const time = setTimeout(() => {
    //   getSearchedMovie();
    //   setIsLoading(false);
    //   console.log('use Effect triggered');
    // }, 2000);
    // return()=>{
    //   clearTimeout(time)
    // }
  }, [search]);

  const handleBackPress = () => {
    props.navigation.goBack();
  };

  const handleSearchPress = () => {
    Keyboard.dismiss();
    getSearchedMovie();
  };

  const handleMoviePress = movie => {
    props.navigation.navigate('MovieDetails', movie);
  };

  return (
    <View style={{flex: 1, backgroundColor: Theme.purpledark}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 4,
        }}>
        <ButtonCircleIcon
          iconName={'chevron-back-outline'}
          backgroundColor={null}
          onPress={() => handleBackPress()}
        />
        <EditTextSearch value={search} onChangeText={t => setSearch(t)} />
        <ButtonCircleIcon
          iconName={'search-outline'}
          backgroundColor={null}
          //   iconSize={35}
          onPress={() => handleSearchPress()}
        />
      </View>
      <View>
        {/* {movieSearched <= 0 ? (
        <View>
        <Text>No Movie Found</Text>
        </View>
        ) : (
          <View style={{}}>
          <View
          style={{
            backgroundColor: Theme.light,
            width: '80%',
            alignSelf: 'center',
            paddingHorizontal: 15,
            maxHeight: DROPDOWN_ITEM_HEIGHT * 6,
          }}>
          <FlatList
          data={movieSearched}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <View style={{backgroundColor: 'gold'}}>
              <TouchableOpacity>
              <Text
              style={{
                marginVertical: 10,
                fontFamily: Fonts.medium,
                color: Theme.purpledarkest,
                          height: DROPDOWN_ITEM_HEIGHT,
                        }}>
                        {item.title}
                        </Text>
                        </TouchableOpacity>
                        </View>
                        );
                      }}
                      />
                      </View>
                      </View>
                    )} */}
      </View>
      {movieSearched <= 0 ? (
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Text style={[GlobalStyle.textTitle]}>No Movie Found</Text>
        </View>
      ) : (
        <View style={{width: '90%', alignSelf: 'center'}}>
          <FlatList
            data={movieSearched}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <TouchableOpacity onPress={() => handleMoviePress(item)}>
                    <View style={{flexDirection: 'row', width: '90%'}}>
                      <View style={{alignSelf: 'flex-end'}}>
                        <PosterImage small resolution={0.5} />
                      </View>
                      <View
                        style={{
                          flexDirection: 'column-reverse',
                          width: '90%',
                          marginLeft: 10,
                          alignSelf: 'flex-end',
                        }}>
                        <Text
                          style={[
                            GlobalStyle.textTitle,
                            {
                              fontFamily: Fonts.bold,
                              fontSize: 18,
                              width: '90%',
                            },
                          ]}>
                          {item.title}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          {item.categories.map((e, i) => {
                            return (
                              <View key={i}>
                                <Text
                                  style={[
                                    GlobalStyle.textTitle,
                                    {
                                      fontFamily: Fonts.medium,
                                      fontSize: 14,
                                      marginRight: 10,
                                    },
                                  ]}>
                                  {e}
                                </Text>
                              </View>
                            );
                          })}
                        </View>
                        <Text
                          style={[
                            GlobalStyle.textTitle,
                            {fontFamily: Fonts.bold, fontSize: 14},
                          ]}>
                          {item.releaseYear}
                        </Text>
                        <Text
                          style={[
                            GlobalStyle.textTitle,
                            {
                              fontFamily: Fonts.bold,
                              fontSize: 20,
                              color: Theme.yellow,
                              // backgroundColor:'red'
                            },
                          ]}>
                          {item.avgRating}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
