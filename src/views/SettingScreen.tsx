import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StringConstant} from '../libs/StringContant';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{StringConstant.SETTING_SCREEN}</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
