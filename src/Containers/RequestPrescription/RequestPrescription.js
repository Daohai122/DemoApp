import React, { useState, useEffect, Component } from "react";
// import styles from "./DrawerStyle";
import { NavHeader, Header } from "../../Components/Header";
import { Text, View, TouchableHighlight } from "react-native";
import { Item, Input, Label, Icon } from "native-base";
import { Button } from "../../Components/Button";
import { SelectComponent } from "../../Components/Select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HomeScreen from "../HomeScreen/HomeScreen";
import styles from "../../Components/Header/HeaderStyle";
import { Colors } from "../../Themes";

class RequestPrescription extends Component {
  constructor(props) {
    super(props);
    console.log("dddddda", this.props.tab);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header
          leftFunction={() => this.props.navigation.navigate("HomeScreen")}
          IconLeft={
            this.props.tab ? null : { name: "arrow-back", type: "Ionicons" }
          }
          title={"Yêu cầu đơn thuốc"}
          NoNavHeader={this.props.tab ?? false}
        />
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView extraScrollHeight={50}>
            <View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>Tên trang trại</Label>
                  <Input value={"Nông trại Hậu Giang"} />
                </Item>
              </View>
            </View>
            <View
              style={{
                paddingVertical: 20,
                alignItems: "center",
                backgroundColor: "#eaeaea",
              }}
            >
              <Text>Thông tin đàn động vật</Text>
            </View>
            <View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>Mô tả</Label>
                  <Input />
                </Item>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>Số lượng</Label>
                  <Input />
                </Item>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>Tuổi</Label>
                  <Input />
                </Item>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>Mô tả bệnh</Label>
                  <Input />
                </Item>
              </View>
            </View>
            {/* <View style={{ paddingVertical: 20, alignItems: 'center', backgroundColor: '#eaeaea', }}>
                        <Text>SICK ANIMAL INFORMATION</Text>
                    </View> */}
            <View style={{ marginVertical: 20 }}>
              <Button
                title="Tiếp"
                onPress={() =>
                  this.props.navigation.navigate("DsSanPhamScreen")
                }
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

export default RequestPrescription;
