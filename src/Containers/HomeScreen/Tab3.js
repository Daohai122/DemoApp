import React, {useEffect, useState} from 'react';
import { NavHeader, Header } from "../../Components/Header";

import {
  View,
  Text,
} from 'react-native';

function Tab1({ navigation }) {
  return ( 
    <View style={{flex:1}}>
        <NavHeader/>
        <Text>1</Text>
    </View>
  ); 
};

export default Tab1;
