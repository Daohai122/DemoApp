import React, { useState, useEffect } from "react";
// import styles from "./DrawerStyle";
import { NavHeader, Header } from "../../Components/Header";
import {
    Text,
    View
} from "react-native";
import { Item, Input, Label } from 'native-base';
import { Button } from "../../Components/Button";
import { SelectComponent } from "../../Components/Select";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HomeScreen from "../HomeScreen/HomeScreen";


function RequestPrescription({ navigation }) {
    const getSelectData =(da) => {
        console.log('ok', da)
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                leftFunction={() => navigation.navigate("HomeScreen")}
                IconLeft={{ name: "arrow-back", type: "Ionicons" }}
                title={"Request for prescription"}
            />
            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView extraScrollHeight={50}>
                    <View style={{ paddingVertical: 20, alignItems: 'center', backgroundColor: '#eaeaea', }}>
                        <Text>FARM OWNER INFORMATION</Text>
                    </View>
                    <View>
                        <SelectComponent title="Name farm" label='select' getSelectData={(da) => getSelectData(da)} data={[{id:'1', label:'Farm Tek'},{id:'2', label:'Farm Mushroom'}]}/>

                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Name Farm</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Address</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Phone</Label>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 20, alignItems: 'center', backgroundColor: '#eaeaea', }}>
                        <Text>SICK ANIMAL INFORMATION</Text>
                    </View>
                    <View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Animal description</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Amount</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Age</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Species</Label>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <View>
                        <Button title='Next' onPress={() => navigation.navigate('HomeScreen')}/>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}

export default RequestPrescription;