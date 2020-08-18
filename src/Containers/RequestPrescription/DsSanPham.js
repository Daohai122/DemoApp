import React, { useEffect, useState } from "react";
import { NavHeader, Header as HeaderBar } from "../../Components/Header";
import Modal from "react-native-modal";
import { Button } from "../../Components/Button";
import { stringsLanguage } from "../../Language";

import {
  View,
  // Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Images, Colors, UtillSize } from "../../Themes";
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Item,
  Icon,
} from "native-base";
import { Calculator } from "react-native-calculator";

const WidthScreen = Dimensions.get("screen").width;
function DsSanPham({ navigation }) {
  const [isvisible, setVisible] = useState(false);
  const [isvisibleQuantity, setVisibleQuantity] = useState(false);

  let dataThuoc = [
    {
      name: "Micotil 300",
      code: "MCT300",
      quantity: 100,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 300,
      image: require("../../Assets/Images/thuoc.jpeg"),
      barcode: "123445",
    },
    {
      name: "Danotryl one",
      code: "DANT",
      quantity: 30,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 100,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 50,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 60,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Micotil 300",
      code: "MCT300",
      quantity: 20,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 500,
      image: require("../../Assets/Images/thuoc.jpeg"),
      barcode: "123445",
    },
    {
      name: "Danotryl one",
      code: "DANT",
      quantity: 200,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Micotil 300",
      code: "MCT300",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc.jpeg"),
      barcode: "123445",
    },
    {
      name: "Danotryl one",
      code: "DANT",
      quantity: 200,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View>
        <HeaderBar
          leftFunction={() => navigation.goBack()}
          IconLeft={{ name: "arrow-back", type: "Ionicons" }}
          title={stringsLanguage.san_pham}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
          backgroundColor: "#fff",
          shadowColor: "#d4d4d4",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0,
          },
        }}
      >
        <View style={styles.IconSearch}>
          <Icon
            name="search"
            style={{ color: Colors.ColorNhat, fontSize: 25 }}
          />
        </View>
        <TextInput
          style={{ height: 40, width: WidthScreen - 120 }}
          placeholder="Tìm Kiếm"
          placeholderTextColor={Colors.ColorNhat}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <List style={{ backgroundColor: "#fff" }}>
            {dataThuoc.map((item, i) => {
              return (
                <ListItem
                  avatar
                  key={i}
                  onPress={() => {
                    navigation.navigate("TheKho2Screen");
                  }}
                >
                  <Left>
                    <Thumbnail
                      source={item.image}
                      style={{ width: 40, height: 40 }}
                    />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>
                      {item.code} | {item.barcode}
                    </Text>
                  </Body>
                  <Right>
                    <Text>{item.quantity}</Text>
                    <Text note>{stringsLanguage.lo}</Text>
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </ScrollView>
      </View>
      <View style={{ position: "absolute", top: 15, right: 20 }}>
        <TouchableHighlight
          style={styles.IconSearch}
          onPress={() => {
            navigation.navigate("ScanBarcodeScreen");
          }}
        >
          <Icon
            name="barcode"
            style={{ color: Colors.backgroundColor, fontSize: 45 }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  IconSearch: {
    width: 40,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapSearch: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "#fff",
    shadowColor: "#d4d4d4",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});

export default DsSanPham;
