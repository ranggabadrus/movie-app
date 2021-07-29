import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts } from './../utilities/Fonts';

const SplashScreen = () => {
    return (
        <View>
            <Text style={{fontFamily: Fonts.black, fontSize:100}}>Brown Fox Jump Along the River and stumbled</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
