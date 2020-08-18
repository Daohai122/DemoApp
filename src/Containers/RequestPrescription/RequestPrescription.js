import React, { useState, useEffect, Component } from "react";
// import styles from "./DrawerStyle";
import {  Header } from "../../Components/Header";
import { Text, View } from "react-native";
import { Item, Input, Label } from "native-base";
import { Button } from "../../Components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { stringsLanguage } from "../../Language";


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
          title={stringsLanguage.yeu_cau_don_thuoc}
          NoNavHeader={this.props.tab ?? false}
        />
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView extraScrollHeight={50}>
            <View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>{stringsLanguage.ten_trang_trai}</Label>
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
              <Text>{stringsLanguage.thong_tin_dan_dong_vat}</Text>
            </View>
            <View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>{stringsLanguage.mo_ta}</Label>
                  <Input />
                </Item>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>{stringsLanguage.so_luong}</Label>
                  <Input />
                </Item>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Item floatingLabel>
                  <Label>{stringsLanguage.tuoi}</Label>
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
                title={stringsLanguage.tiep}
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
