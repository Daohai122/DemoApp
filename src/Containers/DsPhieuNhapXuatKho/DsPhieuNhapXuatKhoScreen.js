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
} from "react-native";

function DsPhieuNhapXuatKhoScreen({ navigation }) {
  const RenderList = () => {
    let Content = [];
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

    for (let i = 0; i < 5; i++) {
      Content.push(
        <TouchableOpacity
          onPress={() => navigation.navigate("ChiTietPhieuChoScreen")}
          style={styles.ItemList}
          key={i}
        >
          {/* <View>
            <Text style={styles.ItemTitle}>Phiếu {item.orderNo}</Text>
            <Text style={styles.ItemDes}>Ngày: {item.date}</Text>
            <Text style={styles.ItemDes}>Người: {item.person}</Text>
            <Text style={styles.ItemDes}>Lý do: {item.description}</Text>
          </View> */}
          <Icon name="arrow-forward" type="Ionicons" style={styles.ItemIcon} />
        </TouchableOpacity>
      );
    }
    return Content;
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
      <View style={{ flex: 1 }}>
        <ScrollView>{RenderList()}</ScrollView>
      </View>
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
});

export default DsPhieuNhapXuatKhoScreen;
