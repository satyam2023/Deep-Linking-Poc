import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../views/HomeScreen';

const HomeScreenViewModel = () => {
  const setting_url = 'demo://Setting';
  const handleInAppDeepLinking = async () => {
    try {
      await Linking.openURL(setting_url);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <HomeScreen
      {...{
        handleInAppDeepLinking,
      }}
    />
  );
};

export default HomeScreenViewModel;

const styles = StyleSheet.create({});
