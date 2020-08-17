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

function DsChoNhanHangScreen({ navigation }) {
  const RenderList = () => {
    const arrVat = ["Đàn lợn nái 1 tuổi", "Đàn lợn bị bệnh", "Đàn lợn kém ăn"];
    let Content = [];
    for (let i = 1; i < 4; i++) {
      Content.push(
        <TouchableOpacity
          style={styles.ItemList}
          key={i}
          onPress={() => navigation.navigate("ChiTietPhieuChoScreen")}
        >
          <View>
            <Text style={styles.ItemTitle}>
              [RP000{i}] Đề nghị cho {arrVat[i]}
            </Text>
            <Text style={styles.ItemDes}>
              {" "}
              Số lượng: {Math.round(Math.random() * 100)}
            </Text>
            <Text style={styles.ItemDes}> Ngày yêu cầu: 30/03/2020</Text>
            <Text style={styles.ItemDes}> Ngày kê đơn: 30/03/2020</Text>
            <Text style={styles.ItemDes}> Bác sĩ kê: Trần Minh Tú</Text>
          </View>
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
        title={"Danh sách đơn chờ nhận"}
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

export default DsChoNhanHangScreen;
