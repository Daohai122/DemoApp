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
  TouchableHighlight,
  TextInput,
  Dimensions
} from "react-native";
import Modal from "react-native-modal";

import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
  Body,
  Icon,
} from "native-base";
import { Calculator } from "react-native-calculator";
const WidthScreen = Dimensions.get("screen").width;

function ChiTietPhieuChoScreen({ navigation }) {
  const [isvisibleQuantity, setVisibleQuantity] = useState(false);
  const [isvisible, setVisible] = useState(false);
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
        <View>
          <View style={{ paddingVertical: 15 }}>
            <Button
              title="Nhập hàng"
              onPress={() => setVisibleQuantity(false)}
            />
          </View>
        </View>
      </View>
      <Modal isVisible={isvisibleQuantity}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ paddingVertical: 25 }}>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={dataThuoc[0].image}
                  style={{ width: 40, height: 40 }}
                />
              </Left>
              <Body>
                <Text>{dataThuoc[0].name}</Text>
                <Text note>
                  {dataThuoc[0].code} | {dataThuoc[0].barcode}
                </Text>
              </Body>
              <Right>
                <Text>Tồn kho: <Text style={{ color: 'red', fontWeight: 'bold', fontSize: UtillSize.titleFontSize }}>100 lọ</Text></Text>
              </Right>
            </ListItem>
          </View>
          <Calculator style={{ flex: 1 }} />
          <View style={{ paddingVertical: 15 }}>
            <Button title="Đồng ý" onPress={() => setVisibleQuantity(false)} />
          </View>
        </View>
      </Modal>
      <Modal isVisible={isvisible}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={styles.wrapSearch}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            <TouchableHighlight
              style={styles.IconSearch}
              onPress={() => {
                setVisible(false);
                navigation.navigate("ScanBarcodeScreen");
              }}
            >
              <Icon
                name="barcode"
                style={{ color: Colors.ColorNhat, fontSize: 25 }}
              />
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1 }}>
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
                      <Text>{item.quantity}</Text>
                      <Text note>Lọ | Trong kho</Text>
                    </Right>
                  </ListItem>
                );
              })}
            </List>
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Button title="Đồng ý" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
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
