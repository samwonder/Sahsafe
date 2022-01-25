import React, { useState } from 'react';
import { Text, FlatList, View, Image } from 'react-native';
import CustomText from '../../../components/CustomText';
import { images } from '../../../assets/images/index'
import * as AppConstant from "@constants"
const InfoScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
      <CustomText
        textStyle={{ fontSize: 16, marginLeft: 15, color: 'black', fontFamily:AppConstant.Fonts.roboto_medium }}
        text={'Client Detail'} />
      <View style={{ backgroundColor: 'white', height: 200, width: '94%', margin: '3%', borderColor: '#E2E2E2', borderWidth: 1, borderRadius: 5 }}>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            textStyle={{ fontSize: 13, marginLeft: 10, color: '#707070', fontFamily:AppConstant.Fonts.roboto_medium }}
            text={'Name'} />
          <CustomText
            textStyle={{ fontSize: 18, marginLeft: 10, color: '#000000', fontFamily:AppConstant.Fonts.roboto_medium }}
            text={props.userDetail.name} />
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            textStyle={{ fontSize: 13, marginLeft: 10, color: '#707070', fontFamily:AppConstant.Fonts.roboto_medium }}
            text={'Contact No.'} />
          <CustomText
            textStyle={{ fontSize: 18, marginLeft: 10, color: '#000000', fontFamily:AppConstant.Fonts.roboto_medium }}
            text={'+91 ' + props.userDetail.mobile_no} />
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            textStyle={{ fontSize: 13, marginLeft: 10, color: '#707070', fontFamily:AppConstant.Fonts.roboto_medium }}
            text={'Email'} />
          <CustomText
            textStyle={{ fontSize: 18, marginLeft: 10, color: '#000000', fontFamily:AppConstant.Fonts.roboto_medium }}
            text={props.userDetail.email} />
        </View>
      </View>
      <View style={{ height: 30, justifyContent: 'center', marginTop: 15 }}>
        <CustomText
          textStyle={{ fontSize: 16, marginLeft: 15, color: 'black', fontFamily:AppConstant.Fonts.roboto_medium }}
          text={'Document Type Access'} />
      </View>

      <FlatList
      showsHorizontalScrollIndicator={Boolean(false)}
        data={props.userDetail.document_ids}
        renderItem={({ item }) =>
          <View style={{ backgroundColor: 'white', height: 50, width: '94%', marginHorizontal: '3%', }}>
            <View style={{ flex: 1, borderColor: '#E2E2E2', borderWidth: 1, borderRadius: 5, justifyContent: 'space-between', flexDirection: 'row', }}>
            {console.log("items------------",item)}
              <CustomText
                textStyle={{ fontSize: 16, margin: 15, color: '#000000', fontFamily:AppConstant.Fonts.roboto_medium }}
                text={'GST'} />
              <Image
                style={{ height: 30, width: 30, margin: 10 }}
                source={images.greenTickIcon}
              />
            </View>
          </View>}
        //ItemSeparatorComponent={this.renderSeparator}
      />


    </View>
  );
}

export default InfoScreen;