import React, { useEffect, useState } from "react";
import { NavHeader, Header } from "../../Components/Header";
import { Tab, Tabs, ScrollableTab, Icon } from "native-base";
import { Colors, UtillSize } from "../../Themes";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
function DsPhieuNhapXuatKhoScreen({ navigation }) {
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
  const WidthScreen = Dimensions.get("screen").width;
  let data = [
    {
      orderNo: "RP0001",
      date: "12/03/2020",
      person: "Mai Chí Thọ",
      description: "Nhập kho mua ngoài",
      type: "IN",
    },
    {
      orderNo: "RP0002",
      date: "12/03/2020",
      person: "Trần Minh Tú",
      description: "Xuất kho chữa bệnh",
      type: "OUT",
    },
    {
      orderNo: "RP0003",
      date: "12/03/2020",
      person: "Trần Minh Tú",
      description: "Xuất kho chữa bệnh",
      type: "OUT",
    },
    {
      orderNo: "RP0004",
      date: "12/03/2020",
      person: "Trần Minh Tú",
      description: "Xuất kho chữa bệnh",
      type: "OUT",
    },
  ];
  const RenderList = () => {
    return data.map((item, i) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("ChiTietPhieuChoScreen")}
          style={styles.ItemList}
          key={i}
        >
          <View>
            <Text style={styles.ItemTitle}>Phiếu {item.orderNo}</Text>
            <Text style={styles.ItemDes}>Ngày: {item.date}</Text>
            <Text style={styles.ItemDes}>Người: {item.person}</Text>
            <Text style={styles.ItemDes}>Lý do: {item.description}</Text>
          </View>
          <Icon name="arrow-forward" type="Ionicons" style={styles.ItemIcon} />
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <NavHeader />
      <Header
        leftFunction={() => navigation.navigate("HomeScreen")}
        IconLeft={{ name: "arrow-back", type: "Ionicons" }}
        title={"Phiếu nhập xuất kho"}
        NoNavHeader
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
        <ScrollView>{RenderList()}</ScrollView>
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
});

export default DsPhieuNhapXuatKhoScreen;
