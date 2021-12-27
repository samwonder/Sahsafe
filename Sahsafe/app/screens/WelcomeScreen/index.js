import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import * as Common from '@common';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: null,
    };
  }

  async componentDidMount() {
    // let userData = await Common.KeyChain.get("userData"); 
    console.log("🚀 ~ file: index.js ~========= ~ submitOTPResponse userData", this.props.OTPResponse)
  }

  async onSubmit() {
    // createSahspace
  let data =  {
      "name": this.props.OTPResponse.name,
        "client_id": 4,
          "document_types": [
            {
              "document_type_id": "1"
            },
            {
              "document_type_id": "2"
            }
          ]
    }
    // this.props.navigation.navigate('HomeScreen');

    try {
      // this.props.saveMobileNumber(phone)
      let result = await Services.UserServices.createSahspace(data);
      console.log("🚀 ~ ========================", result)
      this.props.navigation.navigate('HomeScreen');
      this.props.toggleLoader(false)
    } catch (error) {
      this.props.toggleLoader(false)
    }
  };


  render() {
    const { name, email } = this.props.OTPResponse
    return (
      <View style={styles.container}>
        <CustomText
          textStyle={{ fontSize: 22, fontWeight: '600' }}
          text={`Welcome ${name}`} />
        <CustomText
          textStyle={{ fontSize: 16, marginTop: 5, color: 'black' }}
          text={'No Space found'} />

        <CustomText
          textStyle={{ fontSize: 16, margin: 5, color: 'black' }}
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

const mapStateToProps = state => ({
  OTPResponse: state.common.submitOTPResponse,
});

const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  submitOTPAction: state => dispatch(Actions.submitOTP(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
