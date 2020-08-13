import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Containers/SplashScreen/SplashScreen";
import HomeScreen from "../Redux/Containers/HomeContainer";
import LoginScreen from "../Redux/Containers/LoginContainer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../Containers/DrawerScreen/DrawerScreen";
import RequestPrescription from "../Containers/RequestPrescription/RequestPrescription";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHome() {
  return (
  <Drawer.Navigator drawerContent={() => <DrawerContent />}   initialRouteName="HomeScreen">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
