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
      <View style={{ marginHorizontal: 10, marginTop:10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={Images.ImageFarmer} style={{ width: 45, height: 45, borderRadius: 45, marginRight: 10 }} />
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: UtillSize.titleFontSize }}>Mai Chi Tho</Text>
            <Text style={{ color: Colors.mainColor }}>Nông trại Hậu Giang</Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('RequestPrescription')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageOrderRequest} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Tạo đề nghị đơn thuốc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('DsDeNghiScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageBusinessReport} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Danh Sách đề nghị</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('NhapKhoTheoDonThuocScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageNewProduct} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Nhập kho</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('TheKhoScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageReportCard} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Thẻ kho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('DsChoNhanHangScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageBusinessReport} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Danh sách chờ nhận hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('DsPhieuNhapXuatKhoScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageOrder} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Phiếu nhập, xuất kho</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('TaoPhieuXuatKhoScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageExportStock} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Tạo phiếu xuất kho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('TonKhoScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageWareHouse} style={styles.imageIcon} />
              </View>
              <Text style={styles.ItemText}>Tồn Kho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('BaoCaoScreen')}>
              <View style={styles.WrapIcon}>
                <Image source={Images.ImageBusinessReport} style={styles.imageIcon} />
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
    width: '30%',
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
    fontSize: UtillSize.smallFontSize,
    color: Colors.ColorNhat,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  WrapIcon: {
    height: 40,
    alignItems: 'center',
    justifyContent: "center",
  },
  imageIcon: { width: 40, height: 40 }
})

export default Tab1;
