import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearState} from '../redux/action/movieAction';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(clearState())}
        style={{height: 100, width: 100, backgroundColor: 'gold'}}>
        <Text style={{color: 'white'}}> clear state</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({});
