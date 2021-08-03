import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Components Library
import Icon from 'react-native-vector-icons/Ionicons';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Redux
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

//Custom Libraries
import {Theme} from './src/utilities/Theme';

//screen import
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
import Search from './src/screens/Search';
import EditProfile from './src/screens/EditProfile';
import BookmarkedMovie from './src/screens/BookmarkedMovie';
import AvatarImageCircle from './src/components/AvatarImageCircle';
import AdminDashboard from './src/screens/AdminDashboard';

const TAG = 'GLOBAL - APP///>>> ';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultScreen = 'SplashScreen'; ////////////////////////////Default: 'SplashScreen'
const defaultTabScreen = 'Dashboard'; ////////////////////////////Default: 'Dashboard'

const Apps = () => {
  ///////////////////////Routing Settings////////////////////////////////
  const DashboardTabRoute = () => {
    return (
      <Tab.Navigator
        initialRouteName={defaultTabScreen}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          activeTintColor: Theme.yellow,
          activeBackgroundColor: Theme.purpledarkest,
          inactiveTintColor: Theme.light,
          inactiveBackgroundColor: Theme.purpledarkest,
        }}
        screenOptions={({route}) => ({
          // tabBarIcon: ()=>{
          //   return(
          //     <Icon name={'home'}/>
          //   )
          // }
          tabBarIcon: ({focused, color, size}) => {
            let iconsName = 'home-outline';
            if (route.name == 'Bookmark') {
              iconsName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name == 'Dashboard') {
              iconsName = focused ? 'play' : 'play-outline';
            } else if (route.name == 'Profile') {
              return (
                <AvatarImageCircle
                  size={size}
                  borderColor={color}
                  borderWidth={focused ? 2 : 0}
                />
              );
            }
            return <Icon name={iconsName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Bookmark" component={BookmarkedMovie} />
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
        drawerContentOptions={
          {
            // activeTintColor: '#000000',
            // itemStyle: {marginVertical: 30},
          }
        }
        // openByDefault={true}
      >
        <Drawer.Screen name="Dashboard" component={DashboardTabRoute} />
        <Drawer.Screen name="Admin Dashboard" component={AdminDashboard} />
        <Drawer.Screen name="Bookmark" component={BookmarkedMovie} />
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
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Apps />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});
