import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Colors, UtillSize } from "../../Themes";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

function ChiTietPhieuChoScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftFunction={() => navigation.goBack()}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Chi tiết phiếu giao nhận"}
            />
            <View style={{flex:1, backgroundColor:'#fff'}}>
                <ScrollView>
                <View style={{marginBottom: 20}}>
                    <View style={styles.ItemContent}>
                        <Text>Mã Phiếu:</Text>
                        <Text style={styles.textContent}>Mai Chi Tho</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Họ tên:</Text>
                        <Text style={styles.textContent}>Mai Chi Tho</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Địa chỉ:</Text>
                        <Text style={styles.textContent}>Toà nhà RealHome ngõ 219 Trung Kính, Hà Nội</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Điện thoại:</Text>
                        <Text style={styles.textContent}>0943611060</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Sản phẩm</Text>
                        <Text style={styles.textContent}>Thuốc trị ốm</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Số lượng sử dụng: </Text>
                        <Text style={styles.textContent}>200</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Số lượng thừa: </Text>
                        <Text style={styles.textContent}>300</Text>
                    </View>
                </View>
                <Button title='Thực hiện nhập kho' onPress={() => console.log('ok')}/>
                </ScrollView>
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    ItemContent: {
        padding:10, 
        borderBottomWidth:0.5, 
        borderColor: Colors.mainColor
    },
    textContent: {
        fontSize: UtillSize.titleFontSize, 
        color: Colors.mainColor, 
        marginTop:5
    }
})

export default ChiTietPhieuChoScreen;
