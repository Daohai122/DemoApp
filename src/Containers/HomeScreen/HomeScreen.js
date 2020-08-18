import React, { Component } from "react";
import {
  SafeAreaView,

  View,
  StyleSheet,
} from "react-native";
import { NavHeader } from "../../Components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../../Themes";
import TabIcon from "../../Components/TabIcon/TabIcon";
import Tab1 from "./Tab1";
import TonKhoScreen from "../TonKho/TonKhoScreen";
import Tab4 from "./Tab4";
import Tab2 from "./Tab2";

const Tab = createBottomTabNavigator();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTabActive: 0,
      configTab: [
        {
          screen: "Tab1",
          type: "cho_ky",
          icon: {
            nameIcon: "home",
            typeIcon: "Octicons",
            title: "Home",
            number: null,
          },
        },
        {
          screen: "Tab2",
          type: "tu_choi",
          icon: {
            nameIcon: "notifications-outline",
            typeIcon: "Ionicons",
            title: "Thông báo",
            number: 13,
          },
        },
        {
          screen: "Tab3",
          type: "da_ky",
          icon: {
            nameIcon: "checklist",
            typeIcon: "Octicons",
            title: "Tồn kho",
            number: null,
          },
        },
        {
          screen: "Profile",
          type: "toi_tao",
          icon: {
            nameIcon: "user-tie",
            typeIcon: "FontAwesome5",
            title: "Profile",
            number: null,
          },
        },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <StatusBar barStyle="light-content" /> */}
        <NavHeader />
        <SafeAreaView style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                const configTabIcon = this.state.configTab.find(
                  (e) => e.screen == route.name
                );
                return (
                  <TabIcon
                    content={{
                      nameIcon: configTabIcon.icon.nameIcon,
                      typeIcon: configTabIcon.icon.typeIcon,
                      title: configTabIcon.icon.title,
                      number: configTabIcon.icon.number,
                      isActive: focused,
                    }}
                  />
                );
              },
            })}
            tabBarOptions={{
              showLabel: false,
              style: { height: 70 },
            }}
          >
            <Tab.Screen name="Tab1" component={Tab1} />
            <Tab.Screen name="Tab2" component={Tab2} initialParams={{ tab: true }} />
            <Tab.Screen name="Tab3" component={TonKhoScreen} initialParams={{ tab: true }} />
            {/* <Tab.Screen name="Tab3">
              {(props) => <TonKhoScreen {...props} tab={true} />}
            </Tab.Screen> */}
            <Tab.Screen name="Profile" component={Tab4} />
          </Tab.Navigator>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#fff",
    shadowColor: Colors.mainColor,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  tabItem: {
    backgroundColor: "#fff",
  },
});
export default HomeScreen;
