import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'


const windowDimension = Dimensions.get('window');
const width = windowDimension.width;
const height = windowDimension.height;

const BookmarkedMovie = () => {
    return (
        <View>
            <ImageBackground style={{...windowDimension,}}>
                
            </ImageBackground>
        </View>
    )
}

export default BookmarkedMovie

const styles = StyleSheet.create({})
