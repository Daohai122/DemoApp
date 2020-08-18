import React, { useEffect, useState } from "react";
import { NavHeader, Header } from "../../Components/Header";
import { Colors, UtillSize } from "../../Themes";
import { Icon, Left, Body, ListItem, Text, Right, List } from "native-base";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
function TheKhoScreen({ navigation }) {
  const WidthScreen = Dimensions.get("screen").width;
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

  const RenderList = () => {
    return dataTheKho.map((item, i) => {
      return (
        <ListItem noBorder={true}>
          <Icon
            style={[
              styles.ItemIcon,
              { alignSelf: "flex-start" },
              item.type == 2 ? { color: "green" } : { color: "red" },
            ]}
            name={item.icon.name}
            type={item.icon.type}
          />
          <Body>
            <Text>{item.billName}</Text>
            <Text note>
              {item.type == 2 ? "Ngày xuất" : "Ngày nhập"}: {item.date}
            </Text>
            <Text note> Người ký: {item.signer}</Text>
          </Body>
          <Right style={{ alignSelf: "flex-start" }}>
            <Text
              style={item.type == 2 ? { color: "green" } : { color: "red" }}
            >
              {item.type == 2 ? "-" : "+"} {item.quantity}
            </Text>
          </Right>
        </ListItem>
      );
    });
  };
  let dataTheKho = [
    {
      billName: "PXK-0000001",
      type: 1, // nhập
      signer: "Nguyễn Văn A",
      date: "20/8/2020",
      icon: { name: "arrow-up", type: "Entypo" },
      quantity: 100,
    },
    {
      billName: "PNK-0000002",
      type: 2, // xuất
      signer: "Nguyễn Văn A",
      date: "23/8/2020",
      icon: { name: "arrow-down", type: "Entypo" },
      quantity: 102,
    },
    {
      billName: "PXK-0000001",
      type: 1, // nhập
      signer: "Nguyễn Văn A",
      date: "20/8/2020",
      icon: { name: "arrow-up", type: "Entypo" },
      quantity: 100,
    },
    {
      billName: "PNK-0000002",
      type: 2, // xuất
      signer: "Nguyễn Văn A",
      date: "23/8/2020",
      icon: { name: "arrow-down", type: "Entypo" },
      quantity: 102,
    },
    {
      billName: "PXK-0000001",
      type: 1, // nhập
      signer: "Nguyễn Văn A",
      date: "20/8/2020",
      icon: { name: "arrow-up", type: "Entypo" },
      quantity: 100,
    },
    {
      billName: "PNK-0000002",
      type: 2, // xuất
      signer: "Nguyễn Văn A",
      date: "23/8/2020",
      icon: { name: "arrow-down", type: "Entypo" },
      quantity: 102,
    },
    {
      billName: "PXK-0000001",
      type: 1, // nhập
      signer: "Nguyễn Văn A",
      date: "20/8/2020",
      icon: { name: "arrow-up", type: "Entypo" },
      quantity: 100,
    },
    {
      billName: "PNK-0000002",
      type: 2, // xuất
      signer: "Nguyễn Văn A",
      date: "23/8/2020",
      icon: { name: "arrow-down", type: "Entypo" },
      quantity: 102,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftFunction={() => navigation.goBack()}
        IconLeft={{ name: "arrow-back", type: "Ionicons" }}
        title={"Micotil 300"}
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
      <View style={styles.wrapDateFilter}>
        <View style={{ width: "50%", height: 60 }}>
          <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
            <Text style={{ color: Colors.ColorNhat }}>Từ ngày</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "50%", height: 60 }}>
          <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
            <Text style={{ color: Colors.ColorNhat }}>Đến ngày</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView style={styles.listItem}>
          <List>{RenderList()}</List>
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
  ItemList: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  ItemTitle: {
    color: Colors.mainColor,
    fontSize: UtillSize.titleFontSize,
  },
  ItemDes: {
    color: Colors.ColorNhat,
    marginTop: 5,
  },
  ItemIcon: {
    margin: 0,
    margin: 0,
    fontSize: 25,
    color: Colors.mainColor,
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
  wrapDateFilter: {
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
  IconSearch: {
    width: 40,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  datePicker: {
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.mainColor,
    borderWidth: 0.5,
    borderRadius: 6,
    flex: 1,
    flexDirection: "row",
    height: 35,
  },
  listItem: {
    backgroundColor: "white",
  },
});
export default TheKhoScreen;
