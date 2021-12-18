import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';


export default class App extends React.Component {

  state = {

  }


  onSubmit = () => {
    this.props.navigation.navigate('HomeScreen')
  };


  render() {
    return (
      <View style={styles.container}>
        <CustomText
          textStyle={{ fontSize: 22, fontWeight: '600' }}
          text={'Welcome Amul Rangnekar'} />
        <CustomText
          textStyle={{ fontSize: 16, marginTop: 5 }}
          text={'No Space found'} />

        <CustomText
          textStyle={{ fontSize: 16, margin: 5 }}
          text={'Create your First Sahspace Now'} />

        <CustomButton
          buttonTitle={'Create Sahspace'}
          onPressButton={() => this.onSubmit()}
          buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5 }}
          titleFontColor={'white'}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // backgroundColor: '#fff',
    paddingTop: 100
  },
  subContainer: {
    height: '20%',
    // backgroundColor: 'green',
  },
  text: {
    marginBottom: 15,
    fontSize: 30
  }
});