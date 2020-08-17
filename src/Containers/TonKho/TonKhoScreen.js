import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";
import { Colors, UtillSize } from "../../Themes";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet

} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

function TonKhoScreen({ navigation },props) {
    let dataThuoc = [
        {
            name: 'Micotil 300',
            code: 'MCT300',
            quantity: 200,
            image: require('../../Assets/Images/thuoc0.jpg'),
            barcode: '123445',
            value: '3000.000vnd'
        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc.jpeg'),
            barcode: '123445',
            value: '3500.000vnd'
        },
        {
            name: 'Danotryl one',
            code: 'DANT',
            quantity: 200,
            image: require('../../Assets/Images/thuoc1.jpeg'),
            barcode: '123445',
            value: '5000.000vnd'

        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc1.jpeg'),
            barcode: '123445',
            value: '26000.000vnd'

        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc0.jpg'),
            barcode: '123445',
            value: '1600.000vnd'

        },
        {
            name: 'Pulmotil Ac',
            code: 'MAG',
            quantity: 200,
            image: require('../../Assets/Images/thuoc0.jpg'),
            barcode: '123445',
            value: '18000.000vnd'
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
                leftFunction={() => navigation.navigate("HomeScreen")}
                IconLeft={props.tab?null:{ name: "arrow-back", type: "Ionicons" }}
                title={"Danh sách tồn kho"}
                NoNavHeader={props.tab?? false}
            />
            <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ marginHorizontal: 10, padding: 10, marginVertical: 10, borderColor: Colors.mainColor, borderWidth: 0.5, borderRadius: 6 }} onPress={showDatePicker}>
              <Text style={{ color: Colors.mainColor }}>16/08/2020</Text>
            </TouchableOpacity>
                <ScrollView>
                    {dataThuoc.map((item, i) => {
                        return (
                            <View style={styles.WrapItem} key={i}>
                                <View style={{ width: '50%' }} >
                                    <View style={{ marginBottom: 5 }}>
                                        <Text style={styles.itemTile}>Code:</Text>
                                        <Text style={styles.itemText}>{item.code}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.itemTile}>Tên:</Text>
                                        <Text style={styles.itemText}>{item.name}</Text>
                                    </View>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <View style={{ marginBottom: 5 }}>
                                        <Text style={styles.itemTile}>Số Lượng:</Text>
                                        <Text style={styles.itemText}>{item.quantity}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.itemTile}>Tổng giá trị:</Text>
                                        <Text style={styles.itemText}>{item.value}</Text>
                                    </View>
                                </View>
                            </View>

                        )
                    })}

                </ScrollView>
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
    WrapItem: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
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
    itemTile: {
        color: Colors.mainColor,
        fontSize: UtillSize.memSizeText
    },
    itemText: {
        color: Colors.ColorNhat
    }
})

export default TonKhoScreen;
