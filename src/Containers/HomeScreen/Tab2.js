import React, {useEffect, useState} from 'react';
import { NavHeader, Header } from "../../Components/Header";

import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

function Tab2({ navigation }) {
  return ( 
    <View style={{flex:1}}>
        {/* <NavHeader/> */}
        <TouchableHighlight onPress={() => navigation.navigate('RequestPrescription')}>
          <Text>2</Text>
        </TouchableHighlight>
    </View>
  ); 
};

export default Tab2;
