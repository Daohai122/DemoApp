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
import ScanBarcodeScreen from "../Containers/RequestPrescription/ScanBarcodeScreen";



import DsDeNghiScreen from "../Containers/DsDeNghiScreen/DsDeNghiScreen";

import DsChoNhanHangScreen from "../Containers/DsChoNhanHang/DsChoNhanHangScreen";
import ChiTietPhieuChoScreen from "../Containers/DsChoNhanHang/ChiTietPhieuChoScreen";

import NhapKhoTheoDonThuocScreen from "../Containers/NhapKhoTheoDonThuoc/NhapKhoTheoDonThuocScreen";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHome() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />} initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  )
}
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
        <Stack.Screen name="HomeScreen" component={DrawerHome} />
        <Stack.Screen name="RequestPrescription" component={RequestPrescription} />
        <Stack.Screen name="DsDeNghiScreen" component={DsDeNghiScreen} />
        <Stack.Screen name="DsChoNhanHangScreen" component={DsChoNhanHangScreen} />
        <Stack.Screen name="ChiTietPhieuChoScreen" component={ChiTietPhieuChoScreen} />
        <Stack.Screen name="NhapKhoTheoDonThuocScreen" component={NhapKhoTheoDonThuocScreen} />
        <Stack.Screen name="DsSanPhamScreen" component={DsSanPhamDaChonScreen} />
        <Stack.Screen name="ScanBarcodeScreen" component={ScanBarcodeScreen} />

        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
