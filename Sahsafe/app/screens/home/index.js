/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { images } from '../../assets/images/index'
import CustomButton from '../../components/CustomButton';
import ButtonWithIconAndText from './components/buttonWithIconandText';
import PDFScreen from '../PdfUpload';
export let navigatorObject = null;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topView: true,
      selectedButton: false,
    }
  }

  componentDidMount() {

  }
  sideMenuAction() {
    console.log('===============');
    this.props.navigation.navigate('DrawerOpen');
  }
  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  increaseHeight() {
    this.setState({
      topView: !this.state.topView
    })
  }

  headerButtonAction() {

  }



  selectedButton() {
    this.setState({
      selectedButton: !this.state.selectedButton,
    })
  }

  render() {
    // console.log("🚀 ~ file: index.js ~ line 41 ~ Home ~ render ~ render", images)
    return (
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <View style={{ flex: 2.5 }}>
          <View style={{ flex: 1 }} >
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{ fontSize: 19, justifyContent: 'center', marginTop: 5 }}>{'Hello, Rohit Ghorawat'}</Text>
              <TouchableOpacity 
              style={{ height: 30, width: 70, alignItems: 'flex-end', marginRight: 5 }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={images.featureSearch}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 2, }} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <ButtonWithIconAndText
                buttonTitle={'56'}
                headerText={'Sahspace'}
                onPressButton={() => this.headerButtonAction()}
                buttonStyle={{ height: '80%', width: '47%', margin: '2%', borderRadius: 5, backgroundColor: '#E1EFFE', justifyContent: 'center', alignItems: 'center', }}
                titleFontColor={'#002956'}
                imageStyle={{ height: 25, width: 25 }}
                imageName={images.shareIcon}

              />
              <ButtonWithIconAndText
                buttonTitle={'88'}
                headerText={'Safe Manager'}
                onPressButton={() => this.headerButtonAction()}
                buttonStyle={{ height: '80%', width: '45%', margin: '2%', borderRadius: 5, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', }}
                titleFontColor={'#8E4C00'}
                imageStyle={{ height: 25, width: 25 }}
                imageName={images.featureFolder}
              />
            </View>
            <View style={{ flexDirection: 'row', }}>
              <CustomButton
                buttonTitle={'Recent Received'}
                onPressButton={() => this.selectedButton(this.state.mobileNumber)}
                buttonStyle={[{ color: 'white', height: 45, width: 150, justifyContent: 'center' }, !this.state.selectedButton && { borderBottomColor: 'grey', borderBottomWidth: 3 }]}
                titleFontColor={'black'}
              />
              <CustomButton
                buttonTitle={'Recent Sent'}
                onPressButton={() => this.selectedButton(this.state.mobileNumber)}
                buttonStyle={[{ color: 'white', height: 45, width: 120, justifyContent: 'center', }, this.state.selectedButton && { borderBottomColor: 'grey', borderBottomWidth: 3 }]}
                titleFontColor={'black'}
              />

            </View>
          </View>
        </View>
        <View style={{ flex: 7.5, backgroundColor: '#FFFFFF' }} >
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Dan' },
              { key: 'Dominic' },
              { key: 'Jacksonh' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <View style={{ height: 90, margin: 10, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5 }}>
              <View style={{ flexDirection: 'row', height: 90 }}>
                <View style={{ width: '25%' }} >
                  <View style={{ flex: 1, backgroundColor: '#FFE6E2', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5 }}>
                    <Image
                      style={{ height: 40, width: 50 }}
                      source={images.pdfIcon}
                    />
                  </View>
                </View>
                <View style={{ width: '75%', }} >
                  <Text style={styles.item}>{item.key}</Text>
                  <Text >{item.key}</Text>
                  <View style={{ height: 1, backgroundColor: '#DEDEDE', marginVertical: 5 }}></View>
                  <View style={{ flexDirection: 'row', }}>
                    <Text >{item.key}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}></View>
                    <Text >{item.key}</Text>

                  </View>
                </View>
              </View>
            </View>}
          />
        </View>
        <View style={{ height: this.state.topView ? '100%' : 70, width: '100%', backgroundColor: 'green', position: 'absolute', left: 0, right: 0, bottom: 0, }}>
          {this.state.topView ? <PDFScreen /> : <CustomButton
            buttonTitle={'+ Share File'}
            onPressButton={() => this.increaseHeight(this.state.mobileNumber)}
            buttonStyle={{ color: 'white', height: 45, width: '40%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 25 }}
            titleFontColor={'white'}
          />}

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    marginTop: 10,
    fontSize: 18,
    // height: 44,
  },
});

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  navigation: {},
};

export default Home;
