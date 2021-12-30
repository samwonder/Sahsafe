import React, { Component } from 'react';
import {
  AppRegistry, FlatList,
  StyleSheet, Image, View, Alert
} from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images/index';
import CustomText from '../../components/CustomText';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";

class DocumentTypeScreen extends Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };
  //handling onPress action  
  getListViewItem = (item) => {
    Alert.alert(item.key);
  }
  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          showBackButton={Boolean(true)}
          backButtonImage={images.featureSearch}
          backButtonAction={() => this.popBack()}
        />
        <FlatList
          data={[
            { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
            { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
          ]}
          numColumns={3}
          renderItem={({ item }) =>
            <View style={{ width: '30%', height: 110, margin: '1%', }}>
              <View style={{ height: 80, backgroundColor: '#F4F8FF', margin: '1%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={images.folderIcon}
                />
              </View>
              <CustomText
                textStyle={{ fontSize: 14, color: 'black', fontWeight: '600', textAlign: 'center' }}
                text={'Document Type Access'} />
            </View>
          }
        // ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

// export default DocumentTypeScreen 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // margin: 10,
    // fontSize: 18,
    // height: 120,
  },
})  

const mapStateToProps = state => ({
  mobileNumber: state.common.mobileNumber,
  userDetail: state.common.submitOTPResponse,
  sahspaceDetail: state.landing.getSahspaceDetail,
});
const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getSahspacedetail: state => dispatch(Actions.getSahspacedetail(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentTypeScreen);