import React, {
  useCallback,
  useState,
  useEffect,
  forwardRef,
  useRef,
} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {useIsDrawerOpen} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import {Theme} from './../utilities/Theme';
import {Fonts} from './../utilities/Fonts';
import Button from './Button';
import GlobalStyle from '../utilities/GlobalStyle';
import {logoutUser} from '../utilities/UserManager';
// import  from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
const ICON_SIZE = 30;
const ITEM_HEIGHT = ICON_SIZE * 2;

const DATASET = [
  {text: 'Dashboard', icon: 'bookmark'},
  {text: 'Camps', icon: 'bonfire'},
  {text: 'Adventure', icon: 'walk'},
  {text: 'Market', icon: 'cash'},
  {text: 'Arena', icon: 'skull'},
  {text: 'Guild Bar', icon: 'beer'},
  {text: 'Hospital', icon: 'bandage'},
  {text: 'Achievments', icon: 'medal'},
  {text: 'Dungeon', icon: 'layers'},
  {text: 'Logout', icon: 'finger-print'},
];

const Iconion = ({icon, color}) => {
  return <Icon name={`${icon}-outline`} color={color} size={ICON_SIZE} />;
};

const Item = ({icon, color, text, showText = true}) => {
  return (
    <View style={styles.itemContainer}>
      {showText ? (
        <Text style={[styles.itemText, {color}]}>{text}</Text>
      ) : (
        <View></View>
      )}
      <Iconion icon={icon} color={color} />
    </View>
  );
};

const Lists = forwardRef(
  ({color, showText, style, onScroll, onItemIndexChange, index}, ref) => {
    return (
      <Animated.FlatList
        ref={ref}
        data={DATASET}
        style={style}
        bounces={false}
        scrollEnabled={!showText}
        scrollEventThrottle={16}
        onScroll={onScroll}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        keyExtractor={item => `${item.text}-${item.icon}`}
        contentContainerStyle={{
          paddingVertical: showText ? 0 : height / 2 - ITEM_HEIGHT / 2,
          paddingHorizontal: 40,
        }}
        renderItem={({item, index}) => {
          return <Item {...item} color={color} showText={showText} />;
        }}
        onMomentumScrollEnd={ev => {
          const newIndex = Math.round(
            ev.nativeEvent.contentOffset.y / ITEM_HEIGHT,
          );
          if (onItemIndexChange) {
            onItemIndexChange(newIndex);
          }
        }}
      />
    );
  },
);
const ConnectWithText = () => {
  return (
    <View
      style={{
        // position: 'absolute',
        bottom: height / 2 - ITEM_HEIGHT * 3.5,
        width: '75%',
        paddingHorizontal: 14,
        justifyContent: 'flex-end',
      }}>
      <Text style={[GlobalStyle.textTitleHero2, {color: Theme.yellow}]}>
        Lets go to...
      </Text>
    </View>
  );
};

const ScrollableMenu = props => {
  const [index, setIndex] = useState(0);
  const onConnectPress = React.useCallback(() => {
    // console.log(props);
    // console.log('menu selected: ', DATASET[index]);
    const direction = DATASET[index].text;
    const navDirection = props.state.routeNames[index];
    console.log('direction: ', direction);
    console.log('navDirection: ', navDirection);
    console.log(props);
    if (direction === 'Logout') {
      logoutUser();
    }
    props.navigation.navigate(navDirection);
  }, [index]);
  const yellowRef = useRef();
  const darkenRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );
  const onItemIndexChange = useCallback(setIndex, []);
  useEffect(() => {
    scrollY.addListener(value => {
      if (darkenRef?.current) {
        darkenRef.current.scrollToOffset({
          offset: value.value,
          animated: false,
        });
      }
    });
  }, []);

  const isDrawerOpen = useIsDrawerOpen();

  const handleIconClick = () => {
    console.log('drawer is open: ', isDrawerOpen);
  };

  return (
    <View style={styles.viewContainer}>
      <ConnectWithText />
      <Lists
        ref={yellowRef}
        color={Theme.yellow}
        showText={false}
        style={[StyleSheet.absoluteFillObject, {height}]}
        onScroll={onScroll}
        onItemIndexChange={onItemIndexChange}
      />
      <Lists
        ref={darkenRef}
        color={Theme.darker}
        showText
        style={{
          position: 'absolute',
          backgroundColor: Theme.yellow,
          width: '100%',
          //   width,
          height: ITEM_HEIGHT,
          top: height / 2 - ITEM_HEIGHT / 2,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: height / 2 + ITEM_HEIGHT / 2,
          paddingHorizontal: 14,
        }}>
        <View
          style={{
            height: ITEM_HEIGHT * 2,
            width: 4,
            backgroundColor: Theme.yellow,
          }}
        />
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 12,
            backgroundColor: Theme.yellow,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            text={'Go!'}
            backColor={Theme.yellow}
            onPress={() => onConnectPress()}
          />
        </View>
      </View>
    </View>
  );
};

export default ScrollableMenu;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: Theme.darker,
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 24,
    height: ITEM_HEIGHT,
  },
  itemText: {
    fontFamily: Fonts.bold,
    fontSize: 20,
  },
});
