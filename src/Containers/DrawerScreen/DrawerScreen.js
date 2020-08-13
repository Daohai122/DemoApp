import React, { useState, useEffect } from "react";
import { NavHeader } from "../../Components/Header";
import styles from "./DrawerStyle";
import {
    SafeAreaView,
    Text,
    StatusBar,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";

  function DrawerScreen() {
      return(
        <View style={styles.Container}>
            <NavHeader/>
            <Text>DrawerScreen</Text>
        </View>
      )
  }

  export default DrawerScreen;