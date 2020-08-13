import React, { useEffect, useState } from 'react';
import { NavHeader, Header } from "../../Components/Header";
import { Colors, UtillSize } from "../../Themes";
import { Images } from "../../Themes";
import { Icon } from "native-base";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

function Tab1({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={Images.ImageFarmer} style={{ width: 45, height: 45, borderRadius: 45, marginRight: 10 }} />
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: UtillSize.titleFontSize }}>Mai Chi Tho</Text>
            <Text style={{ color: Colors.mainColor }}>Farmer</Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('RequestPrescription')}>
              <View style={styles.WrapIcon}>
                <Icon name='text-document' type="Entypo" style={[styles.ItemIcon, {fontSize: 25}]} />
              </View>
              <Text style={styles.ItemText}>Tạo đề nghị đơn thuốc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='list' type='Feather' style={styles.ItemIcon} />
              </View>
              <Text style={styles.ItemText}>Danh Sách đề nghị</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='log-out' type="Entypo" style={[styles.ItemIcon, {fontSize: 25}]} />
              </View>
              <Text style={styles.ItemText}>Nhập kho thuốc đã kê</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='page-add' type="Foundation" style={[styles.ItemIcon, {fontSize: 25}]} />
              </View>
              <Text style={styles.ItemText}>Tạo phiếu xuất kho</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='addfile' type="AntDesign" style={[styles.ItemIcon, {fontSize: 25}]} />
              </View>
              <Text style={styles.ItemText}>Tạo phiếu nhập kho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='list-1' type='Fontisto' style={[styles.ItemIcon,{fontSize: 20}]} />
              </View>
              <Text style={styles.ItemText}>Danh Sách nhập kho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='page-export-pdf' type='Foundation' style={[styles.ItemIcon, {fontSize: 25}]} />
              </View>
              <Text style={styles.ItemText}>Phiếu nhập, xuất kho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu}>
              <View style={styles.WrapIcon}>
                <Icon name='book' type='FontAwesome' style={[styles.ItemIcon, {fontSize: 25}]} />
              </View>
              <Text style={styles.ItemText}>Báo cáo tổng hợp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemMenu: {
    width: '22%',
    paddingHorizontal: 3,
    // justifyContent:'center', 
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#d4d4d4",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  ItemIcon: {
    color: Colors.mainColor
  },
  ItemText: {
    fontSize: 10,
    color: Colors.ColorNhat,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  WrapIcon: {
    height: 30,
    alignItems: 'center',
    justifyContent: "center",
  }
})

export default Tab1;
