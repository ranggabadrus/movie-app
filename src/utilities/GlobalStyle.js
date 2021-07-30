import {StyleSheet} from 'react-native';
import {Fonts} from './Fonts';
import {Theme} from './Theme';

export default StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Theme.light,
  },

  ////////////////////////////////////////////////// EDIT TEXT
  editTextContainer: {
    borderRadius: 10,
    borderColor: Theme.darker,
    marginTop: 15,
  },
  editTextTitle: {
    color: Theme.darker,
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: Fonts.bold,
    flex: 1,
    flexWrap: 'wrap',
    position: 'absolute',
    top: -13,
    paddingHorizontal: 5,
  },
  editTextTextInputContainer: {
    borderRadius: 10,
    borderColor: Theme.darker,
  },
  editTextTextInput: {
    marginHorizontal: 10,
    fontSize: 20,
    color: Theme.darker,
    // fontWeight: '600',
    fontFamily: Fonts.Regular,
  },
  ////////////////////////////////////////////////// BUTTON
  buttonContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    margin: 0,
  },
  ////////////////////////////////////////////////// BUTTON CIRCLE ICON
  buttonCircleContainer: {
    // backgroundColor:'red',
  },
  buttonCircleTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ////////////////////////////////////////////////// DRAWER
  drawerContainer: {
    flex: 1,
    backgroundColor: Theme.darker,
    justifyContent: 'space-between',
  },
  drawerHeaderContainer: {
    // backgroundColor:'red'
  },
  drawerContentContainer: {},

  drawerNormHeader: {
    padding: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'cyan',
  },

  ////////////////////////////////////////////////// CHARACTER CARD

  ////////////////////////////////////////////////// AVATAR IMAGE

  ////////////////////////////////////////////////// ELEMENTS SUCH AS TEXT
  textTitleHero: {
    fontFamily: Fonts.bold,
    color: Theme.light,
    fontSize: 30,
    // width: '100%',
    // backgroundColor:'yellow',
  },
  textTitleHero2: {
    fontFamily: Fonts.bold,
    color: Theme.light,
    fontSize: 20,
    // backgroundColor:'yellow',
  },
  textTitleHeroSub: {
    fontFamily: Fonts.bold,
    color: Theme.light,
    fontSize: 20,
  },
  textCardH1: {fontFamily: Fonts.medium, fontSize: 24, color: Theme.light},
  textCardH2: {fontFamily: Fonts.regular, fontSize: 16, color: Theme.light},
  textCardH3: {fontFamily: Fonts.regular, fontSize: 12, color: Theme.light},
  textCardHGlob: {color: Theme.light},
  textTitle: {
    fontFamily: Fonts.medium,
    color: Theme.light,
    fontSize: 20,
    width: '100%',
  },

  separator: {
    height: 0,
    borderColor: Theme.light,
    borderWidth: 1,
    width: '100%',
  },
});
