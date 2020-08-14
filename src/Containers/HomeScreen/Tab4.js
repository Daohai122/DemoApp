import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";

import {
  View,
  Text,
} from 'react-native';

function Tab4({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftFunction={() => this.props.navigation.navigate("HomeScreen")}
        IconLeft={{ name: "arrow-back", type: "Ionicons" }}
        title={"Thông tin Cá nhân"}
        NoNavHeader={false}
      />
    </View>
  );
};
export default Tab4;
