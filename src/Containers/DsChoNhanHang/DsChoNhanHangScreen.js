import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";
import { Tab, Tabs, ScrollableTab, Icon } from 'native-base';
import { Colors, UtillSize } from "../../Themes";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

function DsChoNhanHangScreen({ navigation }) {
    const RenderList = () => {
        let Content = [];
        for (let i = 0; i < 10; i++) {

            Content.push(<TouchableOpacity style={styles.ItemList} key={i}>
                <View>
            <Text style={styles.ItemTitle}>Phiếu {Math.round(Math.random()* 10000000000)}</Text>
                    <Text style={styles.ItemDes}>30/03/2020</Text>
                </View>
                <Icon name='arrow-forward' type="Ionicons" style={styles.ItemIcon} />
            </TouchableOpacity>)
        }
        return Content;

    }
    return (
        <View style={{ flex: 1 }}>
            <NavHeader />
            <Header
                leftFunction={() => navigation.navigate("HomeScreen")}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Danh sách phiếu chờ nhận hàng"}
                NoNavHeader
            />
            <View style={{ flex: 1 }}>
                <ScrollView>
                {RenderList()}

                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    ItemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "#d4d4d4",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        marginVertical: 5,
        marginHorizontal: 10
    },
    ItemTitle: {
        color: Colors.mainColor,
        fontSize: UtillSize.titleFontSize
    },
    ItemDes: {
        color: Colors.ColorNhat,
        marginTop: 5
    },
    ItemIcon: {
        fontSize: 25,
        color: Colors.mainColor
    }
})

export default DsChoNhanHangScreen;
