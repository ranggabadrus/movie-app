import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {useSelector} from 'react-redux';

const windowDimension = Dimensions.get('window');
const width = windowDimension.width;
const height = windowDimension.height;

const BookmarkedMovie = () => {
  const bookmarkMovie = useSelector(state => state.movie.bookmarkMovie);

  if (bookmarkMovie.length == 0) {
    return <Text>No movie bookmarked!</Text>;
  }

  return (
    <View>
      {bookmarkMovie.map(foo => (
        <View key={foo._id}>
          <Text>{foo.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default BookmarkedMovie;

const styles = StyleSheet.create({});
