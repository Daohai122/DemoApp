import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";
import { Colors, UtillSize } from "../../Themes";
import { Icon } from "native-base";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet

} from 'react-native';

function TheKhoScreen({ navigation }) {
    const RenderList = () => {
        // const arrVat = ['Mèo', 'Chó', 'Lợn', 'Gà', 'Bò', 'Trâu', 'Rắn', 'Dế', 'Ếch', 'Tôm']
        let Content = [];
        for (let i = 0; i < 10; i++) {

            Content.push(<TouchableOpacity style={styles.ItemList} key={i}>
                <View>
            <Text style={styles.ItemTitle}> Thẻ kho</Text>
                    {/* <Text style={styles.ItemDes}> Số lượng: {Math.round(Math.random() * 100)}</Text> */}
                    <Text style={styles.ItemDes}>Ngày lập {Math.round(Math.random() * 29 + 1)}/03/2020</Text>
                </View>
                <Icon name='arrow-forward' type="Ionicons" style={styles.ItemIcon} />
            </TouchableOpacity>)
        }
        return Content;

    }
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftFunction={() => navigation.navigate('HomeScreen')}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Thẻ kho"}
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
export default TheKhoScreen;
