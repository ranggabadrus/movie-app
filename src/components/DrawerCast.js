import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from '../utilities/Theme';
import Button from './Button';
import CharacterCard from './CharacterCard';

// const DrawerCast = ({navigation, routes, selectedRoute}) => {
const DrawerCast = props => {
  // const routeName = props.state.routes;
  // console.log('routes: ', routeName);
  return (
    <View style={GlobalStyle.drawerContainer}>
      <View style={GlobalStyle.drawerHeaderContainer}>
        <CharacterCard />
      </View>
      <View style={GlobalStyle.drawerContentContainer}>
        <View>
          {/* {routeName.map((e, i) => {
            <View key={i}>
              <Button iconEnabled text={e.name} backColor={'red'} />;
            </View>;
          })} */}
          <Button iconEnabled text={'Dashboard'}  />
          <Button iconEnabled text={'Market'}  />
          <Button iconEnabled text={'Notification'}  />
        </View>
      </View>
      <View>
        <Button backColor={'tomato'} text={'Log Out'} />
      </View>
    </View>
  );
};

export default DrawerCast;

const styles = StyleSheet.create({});
