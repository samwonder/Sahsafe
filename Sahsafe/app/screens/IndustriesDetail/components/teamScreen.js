import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, StatusBar, Image } from 'react-native';
import { images } from '../../../assets/images/index'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    position: 'Owner',
    title: 'First Item',
    status: 'Active'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    position: 'Client',
    title: 'Second Item',
    status: 'Active'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    position: 'Member',
    title: 'Third Item',
    status: 'Pending'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    position: 'Staff',
    title: 'Fourth Item',
    status: 'Pending'
  },
];
const makeRandomColor = (myStr) => {
  // var myStr = "John P White";
  var matches = myStr.match(/\b(\w)/g);
  console.log(matches.join(''));
  return matches.join('');
}
const Item = ({ title, status, position }) => (
  <View style={styles.item}>
    <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', marginTop: 6, borderRadius: 18, backgroundColor: `hsla(${Math.random() * 360}, 100%, 50%, 1)` }}>
      <Text style={{ fontSize: 16, color: 'white' }}>{makeRandomColor(title)}</Text>
    </View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
      <View style={{ marginLeft: 10, justifyContent: 'center' }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{position}</Text>
      </View>
      <View style={{ marginLeft: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '40%', }}>
        <View style={{ flexDirection: 'row', flex: 1, }}>
          <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'red', margin: 5 }} />
          <Text style={styles.title}>{status}</Text>
        </View>
        <Image
          style={{ height: 25, width: 25, margin: 10 }}
          source={images.dotsIcon}
        />
        {/* <Text style={styles.subTitle}>{position}</Text> */}
      </View>
    </View>
  </View>
);


const InfoScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} status={item.status} position={item.position} />
  );
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: 50,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5


    // backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 14,
    color: '#7D7D7D'
  },
});
export default InfoScreen;