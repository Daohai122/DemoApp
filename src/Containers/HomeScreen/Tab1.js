import React, { useEffect, useState } from "react";
import { Colors, UtillSize, Images } from "../../Themes";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { stringsLanguage } from "../../Language";
import { DataShare } from "../DataShare";
import { useIsFocused } from "@react-navigation/native";
function Tab1({ navigation }) {
  const isFocused = useIsFocused();
  const listMenu = [
    {
      icon: Images.ImageOrderRequest,
      name: stringsLanguage.de_ngi_don_thuoc,
      func: () => {
        navigation.navigate("RequestPrescription");
      },
      permission: "Farmer",
    },
    {
      icon: Images.ImageRequestList,
      name: stringsLanguage.danh_sach_de_nghi,
      func: () => {
        navigation.navigate("DsDeNghiScreen");
      },
      permission: "Farmer, Manager",
    },
    {
      icon: Images.ImageDelivery,
      name: stringsLanguage.hang_cho_ve_kho,
      func: () => {
        navigation.navigate("DsChoNhanHangScreen");
      },
      permission: "Farmer, Manager",
    },
    {
      icon: Images.ImageNewProduct,
      name: stringsLanguage.nhap_kho,
      func: () => {
        navigation.navigate("NhapKhoTheoDonThuocScreen");
      },
      permission: "Farmer",
    },
    {
      icon: Images.ImageExportStock,
      name: stringsLanguage.xuat_kho,
      func: () => {
        navigation.navigate("TaoPhieuXuatKhoScreen");
      },
      permission: "Farmer",
    },
    {
      icon: Images.ImageOrder,
      name: stringsLanguage.phieu_nhap_xuat,
      func: () => {
        navigation.navigate("DsPhieuNhapXuatKhoScreen");
      },
      permission: "Farmer, Manager",
    },
    {
      icon: Images.ImageReportCard,
      name: stringsLanguage.the_kho,
      func: () => {
        navigation.navigate("TheKhoScreen");
      },
      permission: "Farmer, Manager",
    },
    {
      icon: Images.ImageWareHouse,
      name: stringsLanguage.ton_kho,
      func: () => {
        navigation.navigate("TonKhoScreen");
      },
      permission: "Farmer, Manager",
    },
    {
      icon: Images.ImageBusinessReport,
      name: stringsLanguage.bao_cao,
      func: () => {
        navigation.navigate("BaoCaoScreen");
      },
      permission: "Farmer, Manager",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={Images.ImageFarmer}
            style={{
              width: 45,
              height: 45,
              borderRadius: 45,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: UtillSize.titleFontSize,
              }}
            >
              Mai Chi Tho
            </Text>
            <Text style={{ color: Colors.mainColor }}>Nông trại Hậu Giang</Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {listMenu.map((item, i) => {
              if (item.permission.indexOf(DataShare.permission) !== -1) {
                return (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.itemMenu,
                      (i + 1) % 3 == 0 ? { marginRight: 0 } : {},
                    ]}
                    onPress={() => item.func()}
                  >
                    <View style={styles.WrapIcon}>
                      <Image source={item.icon} style={styles.imageIcon} />
                    </View>
                    <Text style={styles.ItemText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    width: "30%",
    paddingHorizontal: 3,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#d4d4d4",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginRight: "5%",
    marginTop: 15,
  },
  ItemIcon: {
    color: Colors.mainColor,
  },
  ItemText: {
    fontSize: UtillSize.smallFontSize,
    color: Colors.ColorNhat,
    textAlign: "center",
    textAlignVertical: "center",
  },
  WrapIcon: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: { width: 40, height: 40 },
});

export default Tab1;
