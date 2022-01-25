import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, StatusBar, Image } from 'react-native';
import { images } from '../../../assets/images/index'
import * as AppConstant from "@constants";

const makeRandomColor = (myStr) => {
  // var myStr = "John P White";
  var matches = myStr.match(/\b(\w)/g);
  console.log(matches.join(''));
  return matches.join('');
}
const makeRandomColorBG = (text) => {
  var matches = text && text.match(/\b(\w)/g);
  switch (matches && matches[0].toUpperCase()) {
    case 'A':
      return '#FF8400';
    case 'B':
      return '#FC575D';
    case 'C':
      return '#CE4F8B';
    case 'D':
      return '#875899';
    case 'E':
      return '#465682';
    case 'F':
      return '#2F4858';
    case 'G':
      return '#956846';
    case 'H':
      return '#005247';
    case 'I':
      return '#005247';
    case 'J':
      return '#534439';
    case 'K':
      return '#008A23';
    case 'L':
      return '#650000';
    case 'M':
      return '#006E5F';
    case 'N':
      return '#C35257';
    case 'O':
      return '#534439';
    case 'P':
      return '#008E73';
    case 'Q':
      return '#402E32';
    case 'R':
      return '#653D1E';
    case 'S':
      return '#892100';
    case 'T':
      return '#FF890C';
    case 'U':
      return '#AC4100';
    case 'V':
      return '#567EA2';
    case 'W':
      return '#3B4856';
    case 'X':
      return '#0085A1';
    case 'Y':
      return '#334B48';
    case 'Z':
      return '#456E91';
    default:
      return '#1E4888';
      break;
  }
}
const Item = (item) => (
  <View style={styles.item}>
    <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', marginTop: 6, borderRadius: 18, backgroundColor: makeRandomColorBG(item.name) }}>
      <Text style={{ fontSize: 16, color: 'white' ,fontFamily:AppConstant.Fonts.roboto_medium}}>
        {makeRandomColor(item.item.name).slice(0, 2)}
        </Text>
    </View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
      <View style={{ marginLeft: 10, justifyContent: 'center' }}>
        <Text style={styles.title}>{item.item.name}</Text>
        <Text style={styles.subTitle}>{item.item.access_type}</Text>
      </View>
      <View style={{ marginLeft: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '40%', }}>
        <View style={{ flexDirection: 'row', flex: 1, }}>
          <View style={[{ height: 10, width: 10, borderRadius: 5, margin: 5 },item.item.status === 'Active'? {backgroundColor: '#3BB54A'}: {backgroundColor: 'red'}]} />
          <Text style={styles.title}>{item.item.status}</Text>
        </View>
        <Image
          style={{ height: 25, width: 25, margin: 10 }}
          source={images.dotsIcon}
        />
      </View>
    </View>
  </View>
);


const TeamScreen = (props) => {
  const renderItem = ({ item }) => (
    <Item item={item}/>
  );
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
      <FlatList
      showsHorizontalScrollIndicator={Boolean(false)}
        data={props.sahspaceAllUsers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 50,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  title: {
    fontSize: 16,
    fontFamily:AppConstant.Fonts.roboto_medium
  },
  subTitle: {
    fontSize: 14,
    color: '#7D7D7D',
    fontFamily:AppConstant.Fonts.roboto_regular
  },
});
export default TeamScreen;