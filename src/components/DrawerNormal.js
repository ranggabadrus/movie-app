import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import GlobalStyle from '../utilities/GlobalStyle';

import AvatarImageCircle from './AvatarImageCircle';
import Button from './Button';
import {Theme} from '../utilities/Theme';
import {Fonts} from './../utilities/Fonts';
import {logoutUser} from '../utilities/UserManager';

// const Drawer = createDrawerNavigator();

const DrawerNormal = props => {
  const focusedRoute = props.state.routeNames[props.state.index];
  const focusedRoute2 = props;
  console.log(focusedRoute2);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: Theme.darker,
        },
      ]}>
      <View style={GlobalStyle.drawerNormHeader}>
        <View style={{flexDirection: 'row'}}>
          <AvatarImageCircle />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text style={[GlobalStyle.textCardH1, styles.text]}>
              Lassie Frenzie
            </Text>
            <Text style={[GlobalStyle.textCardH2, styles.text]}>
              The Blacksmith
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList
            {...props}
            labelStyle={[styles.drawerItem]}
            activeBackgroundColor={Theme.light}
            activeTintColor={Theme.darker}
            inactiveTintColor={Theme.light}
          />
        </DrawerContentScrollView>
      </View>
      <View>
        <Button
          text={'Logout'}
          backColor={Theme.orange}
          isFull
          onPress={() => {
            handleLogout();
          }}
        />
      </View>
    </View>
  );
};

export default DrawerNormal;

const styles = StyleSheet.create({
  drawerItem: {
    // color: Theme.light,
    fontFamily: Fonts.bold,
  },

  text: {
    color: Theme.light,
  },
});
