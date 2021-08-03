import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import PosterImage from '../components/PosterImage';
import {Dimens} from '../utilities/Dimens';
import {Fonts} from '../utilities/Fonts';
import GlobalStyle from '../utilities/GlobalStyle';
import {Theme} from '../utilities/Theme';
import AvatarImage from './../components/AvatarImage';
import {DummyData} from './../utilities/DummyData';

const userReview = DummyData.dummyReviewData.review;
const windowDimension = Dimensions.get('window');
const width = windowDimension.width;
const height = windowDimension.height;

const ProfileHeader = ({navigation}) => {
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: Dimens.globalPaddingHorizontal,
            paddingTop: Dimens.globalPaddingHorizontal,
          }}>
          {
            //////////////////////This is a container View
          }
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}>
            <Button
              text={'Edit Profile'}
              buttonColor={null}
              fontSize={12}
              textColor={Theme.light}
              style={{
                borderWidth: 1,
                borderColor: Theme.light,
                paddingHorizontal: 20,
                paddingVertical: 5,
              }}
              isWithRadius
              onPress={() => handleEditProfile()}
            />
          </View>
          <View style={{height: height / 3}}>
            {
              ////top spacers
            }
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor:'gold'
            }}>
            <View
              style={{
                //   width:'80%',
                flex: 1,
                justifyContent: 'flex-end',
                //   backgroundColor:'gold'
              }}>
              <Text style={[GlobalStyle.textTitle, {paddingRight: 10}]}>
                Isumi Karina
              </Text>
              <Text style={[GlobalStyle.textCardH2, {paddingRight: 10}]}>
                @isumicaem
              </Text>
            </View>
            <AvatarImage size={100} />
            {
              //TODO change user image avatar
            }
          </View>
          <View
            style={{
              width: '100%',
              borderTopColor: Theme.light,
              borderTopWidth: 1,
              marginVertical: 10,
            }}
          />
          <Text
            style={[
              GlobalStyle.textCardH2,
              {fontFamily: Fonts.bold, marginBottom: 10},
            ]}>
            My Review
          </Text>
          {
            ///////////////////////////////// end of container view
          }
        </View>
      </ScrollView>
    </View>
  );
};

const Profile = ({navigation}) => {
  return (
    <View>
      {/* <ProfileHeader navigation={navigation} /> */}
      <ImageBackground
        style={{height, width}}
        source={require('../assets/res/bgimage.png')}>
        <LinearGradient
          style={{width, height}}
          colors={[
            Theme.purpledarka15,
            // Theme.purpledarka15,
            // Theme.purpledarkest,
            Theme.purpledarkest,
            Theme.purpledarkest,
          ]}>
          <FlatList
            data={userReview}
            keyExtractor={item => item.reviewId}
            ListHeaderComponent={() => {
              return <ProfileHeader navigation={navigation} />;
            }}
            ListFooterComponent={() => {
              return <View style={{height: height / 12}} />;
            }}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    marginHorizontal: Dimens.globalPaddingHorizontal,
                    marginVertical: 5,
                    flex: 1,
                    // backgroundColor: 'white',
                    flexDirection: 'row',
                  }}>
                  <PosterImage small />
                  <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={[GlobalStyle.textTitle, {fontFamily:Fonts.bold}]}>
                      {item.movieTitle}
                    </Text>
                    <Text style={[GlobalStyle.textCardH2, {fontFamily:Fonts.bold}]}>
                      "{item.title}"
                    </Text>
                    <Text style={[GlobalStyle.textCardH3, {}]}>
                      {item.content}
                    </Text>
                    <Text
                      style={[
                        GlobalStyle.textTitle,
                        {
                          fontFamily: Fonts.bold,
                          color: Theme.yellow,
                          alignSelf: 'flex-end',
                        },
                      ]}>
                      {item.rating} star
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
