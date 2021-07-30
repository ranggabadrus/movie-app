import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import EditText from '../components/EditText';
import {Theme} from '../utilities/Theme';
import ButtonCircleIcon from './../components/ButtonCircleIcon';
import {Fonts} from './../utilities/Fonts';
import {DummyData} from './../utilities/DummyData';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import PosterImage from '../components/PosterImage';

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

const Search = props => {
  const [search, setSearch] = useState('');
  const [movieSearched, setMovieSearched] = useState([]);

  useEffect(() => {
    if (search.length >= 1) {
      let foundMovies = moviesArrayDummy.filter(
        movie => movie.title.toLowerCase().search(search.toLowerCase()) >= 0,
      );
      console.log('search result: ', foundMovies);
      setMovieSearched(foundMovies);
    }
    console.log('use Effect triggered');
  }, [search]);

  const handleBackPress = () => {
    props.navigation.goBack();
  };

  const handleSearchPress = () => {};

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
      {movieSearched <= 0 ? (
        <Text>No Movie Found</Text>
      ) : (
        <FlatList
          data={movieSearched}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <View>
                <View style={{flexDirection: 'row'}}>
                    <PosterImage small resolution={0.5}/>
                  <Text>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
