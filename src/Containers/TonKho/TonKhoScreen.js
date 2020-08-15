import React, { useEffect, useState } from "react";
import { NavHeader, Header } from "../../Components/Header";
import { Colors, UtillSize } from "../../Themes";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Dimensions,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Thumbnail, Icon } from "native-base";

function TonKhoScreen(props, { navigation }) {
  const WidthScreen = Dimensions.get("screen").width;

  let dataThuoc = [
    {
      name: "Micotil 300",
      code: "MCT300",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
      value: "3000.000vnd",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc.jpeg"),
      barcode: "123445",
      value: "3500.000vnd",
    },
    {
      name: "Danotryl one",
      code: "DANT",
      quantity: 200,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
      value: "5000.000vnd",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc1.jpeg"),
      barcode: "123445",
      value: "26000.000vnd",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
      value: "1600.000vnd",
    },
    {
      name: "Pulmotil Ac",
      code: "MAG",
      quantity: 200,
      image: require("../../Assets/Images/thuoc0.jpg"),
      barcode: "123445",
      value: "18000.000vnd",
    },
  ];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
        leftFunction={() => this.props.navigation.navigate("HomeScreen")}
        IconLeft={props.tab ? null : { name: "arrow-back", type: "Ionicons" }}
        title={"Hàng hóa trong kho"}
        NoNavHeader={props.tab ?? false}
      />
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
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {dataThuoc.map((item, i) => {
            return (
              <View style={styles.WrapItem} key={i}>
                <View style={{ width: "75%" }}>
                  <View style={{ marginBottom: 5 }}>
                    <Text style={styles.itemTile}>Mã:</Text>
                    <Text style={styles.itemText}>{item.code}</Text>
                  </View>
                  <View>
                    <Text style={styles.itemTile}>Tên:</Text>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                  <View style={{ marginBottom: 5 }}>
                    <Text style={styles.itemTile}>Tồn kho:</Text>
                    <Text style={styles.itemText}>{item.quantity} lọ</Text>
                  </View>
                </View>

                <View>
                  <Thumbnail
                    source={item.image}
                    style={{ width: 80, height: 80 }}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  WrapItem: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#d4d4d4",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginVertical: 5,
    marginHorizontal: 10,
  },
  itemTile: {
    color: Colors.mainColor,
    fontSize: UtillSize.memSizeText,
  },
  itemText: {
    color: Colors.ColorNhat,
  },
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

export default TonKhoScreen;
