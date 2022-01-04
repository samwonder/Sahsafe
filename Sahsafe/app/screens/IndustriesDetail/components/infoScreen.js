import React, { useState } from 'react';
import { Text, FlatList, View, Image } from 'react-native';
import CustomText from '../../../components/CustomText';
import { images } from '../../../assets/images/index'
const InfoScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
      <CustomText
        textStyle={{ fontSize: 16, marginLeft: 15, color: 'black', fontWeight: '600' }}
        text={'Client Detail'} />
      <View style={{ backgroundColor: 'white', height: 200, width: '94%', margin: '3%', borderColor: '#E2E2E2', borderWidth: 1, borderRadius: 5 }}>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            textStyle={{ fontSize: 13, marginLeft: 10, color: '#707070', fontWeight: '600' }}
            text={'Name'} />
          <CustomText
            textStyle={{ fontSize: 18, marginLeft: 10, color: '#000000', fontWeight: '600' }}
            text={props.userDetail.name} />
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            textStyle={{ fontSize: 13, marginLeft: 10, color: '#707070', fontWeight: '600' }}
            text={'Contact No.'} />
          <CustomText
            textStyle={{ fontSize: 18, marginLeft: 10, color: '#000000', fontWeight: '600' }}
            text={'+91 ' + props.userDetail.mobile_no} />
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            textStyle={{ fontSize: 13, marginLeft: 10, color: '#707070', fontWeight: '600' }}
            text={'Email'} />
          <CustomText
            textStyle={{ fontSize: 18, marginLeft: 10, color: '#000000', fontWeight: '600' }}
            text={props.userDetail.email} />
        </View>
      </View>
      <View style={{ height: 30, justifyContent: 'center', marginTop: 15 }}>
        <CustomText
          textStyle={{ fontSize: 16, marginLeft: 15, color: 'black', fontWeight: '600' }}
          text={'Document Type Access'} />
      </View>

      <FlatList
      showsHorizontalScrollIndicator={Boolean(false)}
        data={props.userDetail.document_ids}
        renderItem={({ item }) =>
          <View style={{ backgroundColor: 'white', height: 50, width: '94%', marginHorizontal: '3%', }}>
            <View style={{ flex: 1, borderColor: '#E2E2E2', borderWidth: 1, borderRadius: 5, justifyContent: 'space-between', flexDirection: 'row', }}>
              <CustomText
                textStyle={{ fontSize: 16, margin: 15, color: '#000000', fontWeight: '600' }}
                text={'GST'} />
              <Image
                style={{ height: 30, width: 30, margin: 10 }}
                source={images.greenTickIcon}
              />
            </View>
          </View>}
        ItemSeparatorComponent={this.renderSeparator}
      />


    </View>
  );
}

export default InfoScreen;