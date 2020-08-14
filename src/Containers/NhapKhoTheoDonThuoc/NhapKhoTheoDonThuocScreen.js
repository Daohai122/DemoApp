import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "../../Components/Button";
import { Colors, UtillSize } from "../../Themes";
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Icon } from 'native-base';

function NhapKhoTheoDonThuocScreen({ navigation }) {
    let dataThuoc = [
        {
            name: 'Micotil 300',
            code: 'MCT300',
            quantity: 200,
            image: require('../../Assets/Images/thuoc0.jpg'),
            barcode: '123445'
        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc.jpeg'),
            barcode: '123445'
        },
        {
            name: 'Danotryl one',
            code: 'DANT',
            quantity: 200,
            image: require('../../Assets/Images/thuoc1.jpeg'),
            barcode: '123445'
        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc1.jpeg'),
            barcode: '123445'
        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc0.jpg'),
            barcode: '123445'
        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc0.jpg'),
            barcode: '123445'
        }
    ]
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftFunction={() => navigation.goBack()}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Nhập kho cho đơn MA577689GB"}
            />
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.ItemContent}>
                        <Text>Người ký nhận:</Text>
                        <Text style={styles.textContent}>Mai Chí Thọ</Text>
                    </View>
                    <View style={styles.ItemContent}>
                        <Text>Ngày nhập kho:</Text>
                        <TouchableOpacity style={{ padding: 10, marginVertical: 10, borderColor: Colors.mainColor, borderWidth: 0.5, borderRadius: 6 }} onPress={showDatePicker}>
                            <Text style={{ color: Colors.ColorNhat }}>Chọn Ngày</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 15, backgroundColor: '#eaeaea', }}>
                        <Text style={{ fontSize: UtillSize.titleFontSize, color: Colors.mainColor }}>Các sản phẩm thuốc</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                    <List>
                        {dataThuoc.map((item, i) => {
                            return (
                                <ListItem avatar key={i}>
                                    <Left>
                                        <Thumbnail source={item.image} style={{ width: 40, height: 40 }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.name}</Text>
                                        <Text note>{item.code} | {item.barcode}</Text>
                                    </Body>
                                    <Right>
                                        <Text>{item.quantity}</Text>
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                    </View>
                </ScrollView>
                <View style={{marginVertical:15}}>
                    <Button title="Đồng ý" onPress={() => navigation.navigate('HomeScreen')}/>
                </View>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    ItemContent: {
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.mainColor
    },
    textContent: {
        fontSize: UtillSize.titleFontSize,
        color: Colors.mainColor,
        marginTop: 5
    },
    wrapListItem: {
        padding: 10
    }
})

export default NhapKhoTheoDonThuocScreen;
