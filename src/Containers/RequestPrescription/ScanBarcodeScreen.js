import React, {useEffect, useState} from 'react';
import { NavHeader, Header } from "../../Components/Header";
import { RNCamera } from 'react-native-camera';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
request(PERMISSIONS.IOS.CAMERA).then((result) => {

});

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

function ScanBarcodeScreen({ navigation }) {
  return ( 
    <View style={{flex:1}}>
        <Header
                leftFunction={() => navigation.goBack()}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Quét Barcode"}
            />
        <View style={{flex: 1}}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        //   androidRecordAudioPermissionOptions={{
        //     title: 'Permission to use audio recording',
        //     message: 'We need your permission to use your audio',
        //     buttonPositive: 'Ok',
        //     buttonNegative: 'Cancel',
        //   }}
        //   onGoogleVisionBarcodesDetected={({ barcodes }) => {
        //     console.log(barcodes);
        //   }}
        />
        </View>
    </View>
  ); 
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default ScanBarcodeScreen;
