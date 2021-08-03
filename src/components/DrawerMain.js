import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from './../utilities/Theme';
import AvatarImageCircle from './AvatarImageCircle';
import Button from './Button';

const DrawerMain = props => {
  const focusedState = props.state;
  //   console.log('focusedState', focusedState);
  const routeNames = focusedState.routeNames;
  const navigation = props.navigation;
  //   console.log('route names: ', routeNames);
  //   console.log('navigation: ', navigation.isFocused());
  // console.log('state: ', props);

  const dummyUserData = {
    userFullName: 'Isumi Karina',
    userUsername: 'isumicaem',
  };
  const userData = props.userData == null ? dummyUserData : props.userData;

  const focusIndex = focusedState.index;
  //   console.log('focusIndex: ', focusIndex);

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: Theme.purpledark,
        },
      ]}>
      <View
        style={[
          GlobalStyle.drawerNormHeader,
          //   {backgroundColor: Theme.purplelight},
        ]}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <AvatarImageCircle borderWidth={2} borderColor={Theme.yellow} />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text style={[GlobalStyle.textCardH1, styles.textFullName]}>
              {userData.userFullName}
            </Text>
            <Text style={[GlobalStyle.textCardH2, styles.textUsername]}>
              @{userData.userUsername}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          //   backgroundColor: 'gold'
        }}>
        {/* <DrawerContentScrollView {...props}> 
          <DrawerItemList
            {...props}
            labelStyle={[styles.drawerItem]}
            activeBackgroundColor={Theme.yellow}
            activeTintColor={Theme.purpledark}
            inactiveTintColor={Theme.light}
            itemStyle={{}}
          />
        </DrawerContentScrollView> */}
        <View
          style={{
            height: 0,
            width: 200,
            borderWidth: 1,
            borderColor: Theme.light,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            paddingVertical: 20,
            // flex:1,
            // justifyContent:'center',
            // alignItems:'center'
          }}>
          {routeNames.map((e, i) => {
            const handleButtonPress = name => {
              navigation.navigate(name);
            };
            const isFocused = i === focusIndex;
            return (
              <View key={i} style={{marginVertical: 4}}>
                <Button
                  text={e}
                  isFull
                  isBold
                  onPress={() => handleButtonPress(e)}
                  buttonColor={isFocused ? Theme.yellow : null}
                  textColor={isFocused ? Theme.purpledark : Theme.light}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={{margin: 20}}>
        <Button
          text={'Logout'}
          buttonColor={null}
          //   buttonColor={Theme.yellow}
          textColor={Theme.purplelight}
          isFull
          iconEnabled
          iconName={'log-out-outline'}
          onPress={() => {
            console.log('LOGOUT COY!');
            //TODO handle logout

            // handleLogout();
          }}
        />
      </View>
    </View>
  );
};

export default DrawerMain;

const styles = StyleSheet.create({
  textFullName: {
    color: Theme.yellow,
    textAlign: 'center',
  },
  textUsername: {
    color: Theme.light,
    textAlign: 'center',
  },
  textName3: {
    color: Theme.yellow,
  },
  textName4: {
    color: Theme.yellow,
  },
});
