import React, { useState, useEffect, Component } from "react";
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


class RequestPrescription extends Component  {
    constructor(props) {
        super(props);
        console.log('dddddda',this.props.tab);

    }
render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                leftFunction={() => this.props.navigation.navigate("HomeScreen")}
                IconLeft={this.props.tab?null:{ name: "arrow-back", type: "Ionicons" }}
                title={"Request for prescription"}
                NoNavHeader={this.props.tab?? false}
            />
            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView extraScrollHeight={50}>
                    <View style={{ paddingVertical: 20, alignItems: 'center', backgroundColor: '#eaeaea', }}>
                        <Text>FARM OWNER INFORMATION</Text>
                    </View>
                    <View>
                        <View style={{ paddingVertical: 5 }}>
                            <Item floatingLabel>
                                <Label>Farm name</Label>
                                <Input value={'Nông trại Hậu Giang'}/>
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
                    {/* <View style={{ paddingVertical: 20, alignItems: 'center', backgroundColor: '#eaeaea', }}>
                        <Text>SICK ANIMAL INFORMATION</Text>
                    </View> */}
                    <View style={{marginVertical: 20,}}>
                        <Button title='Next' onPress={() => this.props.navigation.navigate('DsSanPhamScreen')}/>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}
    
}

export default RequestPrescription;