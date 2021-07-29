import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screen
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import MovieReview from './src/screens/MovieReview';
import Movie from './src/screens/Movie';
import Notification from './src/screens/Notification';
import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';
import DrawerMain from './src/components/DrawerMain';

const TAG = 'GLOBAL - APP///>>> ';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultScreen = 'Dashboard'; ////////////////////////////Change default screen here

const Apps = () => {
  ///////////////////////Routing Settings////////////////////////////////
  const DashboardTabRoute = () => {
    return (
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{keyboardHidesTabBar: true}}>
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  const DashboardDrawerRoute = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerContent={props => <DrawerMain {...props} juancokAsu={true} />}
        drawerContentOptions={{
          // activeTintColor: '#000000',
          // itemStyle: {marginVertical: 30},
        }}
        // openByDefault={true}
      >
        <Drawer.Screen name="Dashboard" component={DashboardTabRoute} />
        <Drawer.Screen name="MyReview" component={MovieReview} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={defaultScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={DashboardDrawerRoute} />
        <Stack.Screen name="MovieDetails" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App = () => {
  return (
    <>
      <Apps />
    </>
  );
};

const styles = StyleSheet.create({});
