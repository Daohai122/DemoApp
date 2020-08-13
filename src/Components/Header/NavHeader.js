import React from "react";
import styles from "./HeaderStyle";
import { View, StatusBar} from "react-native";
export default function NavHeader(Props) {
    return (        
        <View style={[styles.navBar, Props.style??{}]}>
            <StatusBar barStyle="light-content" />
        </View>
    )
}
