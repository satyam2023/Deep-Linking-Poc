import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { StringConstant } from '../libs/StringContant';

interface IHomeScreen {
  handleInAppDeepLinking: () => void;
}

const HomeScreen = ({handleInAppDeepLinking}: IHomeScreen) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleInAppDeepLinking}
        style={styles.btn}>
        <Text>{StringConstant.IN_APP_LINKING}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 10,
    backgroundColor: '#1A8A8A60',
    padding: 20,
  },
});
