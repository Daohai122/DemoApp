import React, { useEffect, useState } from "react";
import { NavHeader, Header } from "../../Components/Header";

import { View, Text, TouchableHighlight, Image } from "react-native";
import { stringsLanguage } from "../../Language";
function Tab4({ navigation }) {
  const [language, setLanguage] = useState(stringsLanguage.getLanguage());
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftFunction={() => this.props.navigation.navigate("HomeScreen")}
        IconLeft={{ name: "arrow-back", type: "Ionicons" }}
        title={"Thông tin Cá nhân"}
        NoNavHeader={false}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "center",
        }}
      >
        <TouchableHighlight
          style={{ opacity: language == "vn" ? 1 : 0.5 }}
          underlayColor="#fff"
          onPress={() => {
            stringsLanguage.setLanguage("vn");
            setLanguage("vn");
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../Assets/Images/iconvn.png")}
              style={{
                width: 24.2,
                height: 16,
                alignSelf: "center",
                marginRight: 9,
              }}
            />
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: 30,
              }}
            >
              Tiếng Việt
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ opacity: language == "en" ? 1 : 0.5 }}
          underlayColor="#fff"
          onPress={() => {
            stringsLanguage.setLanguage("en");
            setLanguage("en");
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 40 }}>
            <Image
              source={require("../../Assets/Images/iconen.png")}
              style={{
                width: 24.2,
                height: 16,
                alignSelf: "center",
                marginRight: 9,
              }}
            />
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: 30,
              }}
            >
              English
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 20, paddingTop: 20 }}>
          <Image
            source={{
              uri:
                "https://img.icons8.com/ios-filled/50/000000/logout-rounded-up.png",
            }}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
              marginRight: 9,
            }}
          />
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              lineHeight: 30,
            }}
          >
            Logout
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
export default Tab4;
