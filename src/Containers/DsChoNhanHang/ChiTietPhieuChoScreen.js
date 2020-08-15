import React, { useEffect, useState } from "react";
import { NavHeader, Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Colors, UtillSize } from "../../Themes";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
  Body,
  Icon,
} from "native-base";

function ChiTietPhieuChoScreen({ navigation }) {
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
      <Header
        leftFunction={() => navigation.goBack()}
        IconLeft={{ name: "arrow-back", type: "Ionicons" }}
        title={"Chi tiết phiếu giao nhận"}
      />
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          <View style={{ marginBottom: 20 }}>
            <View style={styles.ItemContent}>
              <Text>Số Phiếu:</Text>
              <Text style={styles.textContent}>RP0001 </Text>
            </View>
            <View style={styles.ItemContent}>
              <Text>Người yêu cầu:</Text>
              <Text style={styles.textContent}>Mai Chi Tho</Text>
            </View>
            <View style={styles.ItemContent}>
              <Text>Trang trại:</Text>
              <Text style={styles.textContent}>Trang Trại Hậu Giang</Text>
            </View>
            <View style={styles.ItemContent}>
              <Text>Bác sĩ kê đơn:</Text>
              <Text style={styles.textContent}>Trần Minh Tú</Text>
            </View>
            <View style={{ flex: 1 }}>
              <ScrollView>
                <List>
                  {dataThuoc.map((item, i) => {
                    return (
                      <ListItem
                        avatar
                        key={i}
                        onPress={() => {
                          setVisible(false);
                          setTimeout(() => {
                            setVisibleQuantity(true);
                          }, 500);
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
                          <Text>{item.quantity} Lọ</Text>
                        </Right>
                      </ListItem>
                    );
                  })}
                </List>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View
          style={{ position: "absolute", bottom: 15, alignContent: "center" }}
        >
          <View style={{ paddingVertical: 15 }}>
            <Button
              title="Nhập hàng"
              onPress={() => setVisibleQuantity(false)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemContent: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.mainColor,
  },
  textContent: {
    fontSize: UtillSize.titleFontSize,
    color: Colors.mainColor,
    marginTop: 5,
  },
});

export default ChiTietPhieuChoScreen;
