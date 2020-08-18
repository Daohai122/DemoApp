import React, { useState } from "react";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";

function DsDeNghiScreen({ navigation }) {
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
    const arrVat = [
      "Đàn lợn nái 1 tuổi",
      "Đàn lợn bị bệnh",
      "Đàn lợn kém ăn",
      "Gà",
      "Bò",
      "Trâu",
      "Rắn",
      "Dế",
      "Ếch",
      "Tôm",
    ];
    let Content = [];
    for (let i = 0; i < 10; i++) {
      Content.push(
        <TouchableOpacity
          style={styles.ItemList}
          key={i}
          onPress={() => navigation.navigate("ChiTietDeNghiScreen")}
        >
          <View>
            <Text style={styles.ItemTitle}>
              [RP000{i}] Đề nghị cho {arrVat[i]}
            </Text>
            <Text style={styles.ItemDes}>
              {" "}
              Số lượng: {Math.round(Math.random() * 100)}
            </Text>
            <Text style={styles.ItemDes}> Ngày: 30/03/2020</Text>
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
        title={"Danh sách đề nghị"}
        NoNavHeader
      />
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="Chưa duyệt">
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                padding: 10,
                marginVertical: 10,
                borderColor: Colors.mainColor,
                borderWidth: 0.5,
                borderRadius: 6,
              }}
              onPress={showDatePicker}
            >
              <Text style={{ color: Colors.ColorNhat }}>Chọn Ngày</Text>
            </TouchableOpacity>
            <ScrollView>{RenderList()}</ScrollView>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </Tab>
        <Tab heading="Đã duyệt">
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                padding: 10,
                marginVertical: 10,
                borderColor: Colors.mainColor,
                borderWidth: 0.5,
                borderRadius: 6,
              }}
              onPress={showDatePicker}
            >
              <Text style={{ color: Colors.ColorNhat }}>Chọn Ngày</Text>
            </TouchableOpacity>
            <ScrollView>{RenderList()}</ScrollView>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </Tab>
        <Tab heading="Đã có toa thuốc">
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                padding: 10,
                marginVertical: 10,
                borderColor: Colors.mainColor,
                borderWidth: 0.5,
                borderRadius: 6,
              }}
              onPress={showDatePicker}
            >
              <Text style={{ color: Colors.ColorNhat }}>Chọn Ngày</Text>
            </TouchableOpacity>
            <ScrollView>{RenderList()}</ScrollView>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </Tab>
        <Tab heading="Đã nhập kho">
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                padding: 10,
                marginVertical: 10,
                borderColor: Colors.mainColor,
                borderWidth: 0.5,
                borderRadius: 6,
              }}
              onPress={showDatePicker}
            >
              <Text style={{ color: Colors.ColorNhat }}>Chọn Ngày</Text>
            </TouchableOpacity>
            <ScrollView>{RenderList()}</ScrollView>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </Tab>
      </Tabs>
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

export default DsDeNghiScreen;
