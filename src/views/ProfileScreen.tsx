import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { StringConstant } from '../libs/StringContant';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{StringConstant.PROFILE_SCREEN}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
