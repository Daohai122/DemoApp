import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Containers/SplashScreen/SplashScreen";
import HomeScreen from "../Redux/Containers/HomeContainer";
import LoginScreen from "../Redux/Containers/LoginContainer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../Containers/DrawerScreen/DrawerScreen";

import RequestPrescription from "../Containers/RequestPrescription/RequestPrescription";
import DsSanPhamDaChonScreen from "../Containers/RequestPrescription/DsSanPhamDaChonScreen";
import DsSanPham from "../Containers/RequestPrescription/DsSanPham";
import ScanBarcodeScreen from "../Containers/RequestPrescription/ScanBarcodeScreen";

import TaoPhieuXuatKhoScreen from "../Containers/TaoPhieuXuatKho/TaoPhieuXuatKhoScreen";
import DsPhieuNhapXuatKhoScreen from "../Containers/DsPhieuNhapXuatKho/DsPhieuNhapXuatKhoScreen";

import BaoCaoScreen from "../Containers/BaoCao/BaoCaoScreen";

import DsDeNghiScreen from "../Containers/DsDeNghiScreen/DsDeNghiScreen";
import ChiTietDeNghiScreen from "../Containers/DsDeNghiScreen/ChiTietDeNghiScreen";

import DsChoNhanHangScreen from "../Containers/DsChoNhanHang/DsChoNhanHangScreen";
import ChiTietPhieuChoScreen from "../Containers/DsChoNhanHang/ChiTietPhieuChoScreen";

import NhapKhoTheoDonThuocScreen from "../Containers/NhapKhoTheoDonThuoc/NhapKhoTheoDonThuocScreen";
import TonKhoScreen from "../Containers/TonKho/TonKhoScreen";

import TheKhoScreen from "../Containers/TheKho/TheKhoScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplasScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplasScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RequestPrescription"
          component={RequestPrescription}
        />
        <Stack.Screen name="DsDeNghiScreen" component={DsDeNghiScreen} />
        <Stack.Screen
          name="DsChoNhanHangScreen"
          component={DsChoNhanHangScreen}
        />
        <Stack.Screen
          name="ChiTietPhieuChoScreen"
          component={ChiTietPhieuChoScreen}
        />
        <Stack.Screen
          name="ChiTietDeNghiScreen"
          component={ChiTietDeNghiScreen}
        />
        <Stack.Screen
          name="NhapKhoTheoDonThuocScreen"
          component={NhapKhoTheoDonThuocScreen}
        />
        <Stack.Screen
          name="DsSanPhamScreen"
          component={DsSanPhamDaChonScreen}
        />
        <Stack.Screen name="ScanBarcodeScreen" component={ScanBarcodeScreen} />
        <Stack.Screen
          name="TaoPhieuXuatKhoScreen"
          component={TaoPhieuXuatKhoScreen}
        />
        <Stack.Screen
          name="DsPhieuNhapXuatKhoScreen"
          component={DsPhieuNhapXuatKhoScreen}
        />
        <Stack.Screen name="BaoCaoScreen" component={BaoCaoScreen} />
        <Stack.Screen name="TonKhoScreen" component={TonKhoScreen} />
        <Stack.Screen name="TheKhoScreen" component={DsSanPham} />
        <Stack.Screen name="TheKho2Screen" component={TheKhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
