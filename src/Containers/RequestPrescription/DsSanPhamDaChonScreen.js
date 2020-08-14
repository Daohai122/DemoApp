import React, { useEffect, useState } from 'react';
import { NavHeader, Header as HeaderBar } from "../../Components/Header";
import Modal from "react-native-modal";
import { Button } from "../../Components/Button";
import {
    View,
    // Text,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Images, Colors, UtillSize } from "../../Themes";
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Icon } from 'native-base';
import { Calculator } from 'react-native-calculator'


const WidthScreen = Dimensions.get('screen').width;
function DsSanPhamDaChonScreen({ navigation }) {
    const [isvisible, setVisible] = useState(false);
    const [isvisibleQuantity, setVisibleQuantity] = useState(false)

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
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftFunction={() => navigation.goBack()}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Danh Sách sản phẩm đã chọn"}
            />
            <View style={{ flex: 1 }}>
                <ScrollView>
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
                </ScrollView>
                <View style={{marginVertical: 15}}>
                    <Button title='Kết Thúc' onPress={() => navigation.navigate('HomeScreen')}/>
                </View>
            </View>
            <View style={{position:'absolute', bottom:45, right:20}}>
                <TouchableOpacity onPress={() => setVisible(true)} style={{width: 45, height: 45, borderRadius: 45, justifyContent:'center', alignItems:'center',backgroundColor: Colors.mainColor }}>
                    <Icon name="add" style={{ color: '#fff' }} />
                </TouchableOpacity>
            </View>
            <Modal isVisible={isvisibleQuantity}>
                <View style={{flex:1, backgroundColor:'#fff'}}>
                    <Calculator style={{ flex: 1 }} />
                    <View style={{paddingVertical:15}}>
                    <Button title="Đóng" onPress={() => setVisibleQuantity(false)}/>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={isvisible}>
                <View style={{flex:1, backgroundColor:'#fff'}}>
                    <View style={styles.wrapSearch}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={styles.IconSearch}>
                                <Icon name="search" style={{ color: Colors.ColorNhat, fontSize: 25 }} />
                            </View>
                            <TextInput style={{ height: 40, width: WidthScreen - 120 }} placeholder="Tìm Kiếm" placeholderTextColor={Colors.ColorNhat} />
                        </View>
                        <TouchableHighlight style={styles.IconSearch} onPress={() =>  {setVisible(false); navigation.navigate('ScanBarcodeScreen')}}>
                            <Icon name='barcode' style={{ color: Colors.ColorNhat, fontSize: 25 }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1}}>
                    <List>
                        {dataThuoc.map((item, i) => {
                            return (
                                <ListItem avatar key={i} onPress={() =>{
                                    setVisible(false);
                                    setTimeout(() => {
                                        setVisibleQuantity(true);
                                    }, 500);
                                }}>
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
                    <View style={{paddingVertical:15}}>
                    <Button title="Đóng" onPress={() => setVisible(false)}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    IconSearch: {
        width: 40,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: "#fff",
        shadowColor: "#d4d4d4",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
    }
})

export default DsSanPhamDaChonScreen;
