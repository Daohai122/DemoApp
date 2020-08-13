import React, {useEffect, useState} from 'react';
import styles from "./SplashScreenStyle";
import { Images } from "../../Themes";
import { StackActions } from '@react-navigation/native';
import mushroom from "../../Api/CallApi";
import {
  StatusBar,
  View,
  ImageBackground
} from 'react-native';

function SplashScreen({ navigation }) {
  const checkTrangThai = async() => {
    let result = await mushroom.$auth.statusAsync();
    if(result.result.status =='guest') {
      navigation.dispatch(
        StackActions.replace('LoginScreen')
      );
    } else {
      navigation.dispatch(
        StackActions.replace('LoginScreen')
      );
    }
  }
  useEffect(() => {
    checkTrangThai()
  });
  return ( 
    <View style={styles.Container}>
      <ImageBackground source={Images.ImageBackground} style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
      </ImageBackground>
    </View>
  ); 
};

export default SplashScreen;
