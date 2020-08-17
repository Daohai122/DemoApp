import React, { useEffect, useState } from "react";
import { NavHeader, Header } from "../../Components/Header";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "../../Components/Button";
import { Colors, UtillSize } from "../../Themes";
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
  Input,
  Label,
} from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Calculator } from "react-native-calculator";

function TaoPhieuXuatKhoScreen({ navigation }) {
  const [isvisibleQuantity, setVisibleQuantity] = useState(false);
  const [isvisible, setVisible] = useState(false);

  let dataThuoc = [
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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + "/" + month + "/" + year; //format: dd-mm-yyyy;
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftFunction={() => navigation.goBack()}
        IconLeft={{ name: "arrow-back", type: "Ionicons" }}
        title={"Xuất kho"}
      />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <View style={{ paddingVertical: 5 }}>
              <Item floatingLabel>
                <Label>Người xuất kho</Label>
                <Input value="Mai Chí Thọ" />
              </Item>
            </View>
          </View>
          <View>
            <View style={{ paddingVertical: 5 }}>
              <Item floatingLabel>
                <Label>Lý do xuất</Label>
                <Input value="Chữa bệnh" />
              </Item>
            </View>
          </View>

          <View style={styles.ItemContent}>
            <Text>Ngày xuất kho:</Text>
            <TouchableOpacity
              style={{
                padding: 10,
                marginVertical: 10,
                borderColor: Colors.mainColor,
                borderWidth: 0.5,
                borderRadius: 6,
              }}
              onPress={showDatePicker}
            >
              <Text style={{ color: Colors.ColorNhat }}>
                {getCurrentDate()}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 15, backgroundColor: "#eaeaea" }}>
            <Text
              style={{
                fontSize: UtillSize.titleFontSize,
                color: Colors.mainColor,
              }}
            >
              Các sản phẩm thuốc
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.success,
                }}
              >
                <Icon name="add" style={{ color: "#fff" }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableHighlight
                style={styles.IconSearch}
                onPress={() => {
                  navigation.navigate("ScanBarcodeScreen");
                }}
              >
                <Icon
                  name="barcode"
                  style={{ color: Colors.backgroundColor, fontSize: 30 }}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <List>
              {dataThuoc.map((item, i) => {
                return (
                  <ListItem
                    avatar
                    key={i}
                    onPress={() => {
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
                      <Text note>Lọ</Text>
                    </Right>
                  </ListItem>
                );
              })}
            </List>
          </View>
        </ScrollView>
        <View style={{ marginVertical: 15 }}>
          <Button
            title="Đồng ý"
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* <Modal isVisible={isvisibleQuantity}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ paddingVertical: 45 }}>
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
              <Text>100 lọ</Text>
            </Right>
          </View>
          <Calculator style={{ flex: 1 }} />
          <View style={{ paddingVertical: 15 }}>
            <Button title="Đồng ý" onPress={() => setVisibleQuantity(false)} />
          </View>
        </View>
      </Modal> */}
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
  wrapListItem: {
    padding: 10,
  },
});

export default TaoPhieuXuatKhoScreen;
