import React, { Component } from 'react';
import {
  AppRegistry, FlatList,
  StyleSheet, Image, View, Alert, TouchableOpacity
} from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images/index';
import CustomText from '../../components/CustomText';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import EmptyScreen from '../../components/EmptyScreen'

class DocumentTypeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sahspaceUser: props.route.params && props.route.params.sahspaceUser,
      selectedYear: props.route.params && props.route.params.selectedYear,
      selectedMonth: props.route.params && props.route.params.selectedMonth,
    }
  }
  async componentDidMount() {
      let data = {
        "sahspace_unique_id": this.state.sahspaceUser.sahspace_unique_id,
        "document_type_id": 1,
        "year": this.props.getSahspaceYear.year,
        "month": this.props.selectedMonth,
        "send" : 1
}
      console.log("🚀 ~ file: ----====== ~ data", data)
    // await this.props.getSpaceUploadedDocList(this.state.sahspaceUser.sahspace_unique_id);
    console.log("🚀 ~ file: ----====-----====--------", this.props.getSahspaceYear)

  }
  navigationToDocumentList(index) {
  // this.state.sahspaceUser
  this.props.navigation.navigate('Month', {sahspaceUser: this.state.sahspaceUser, selectedYear: this.props.getSahspaceYear[index]})


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
        showsHorizontalScrollIndicator={false}
          data={[]}
          numColumns={3}
          ListEmptyComponent={<EmptyScreen />}
          renderItem={({ item, index }) =>
          <View style={{ width: '30%', height: 110, margin: '1%', }}>
            <TouchableOpacity
              onPress={() => this.navigationToDocumentList(index)}
              style={{ height: 80, backgroundColor: '#F4F8FF', margin: '1%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 70, width: 70 }}
                source={images.folderIcon}
              />
            </TouchableOpacity>
            <CustomText
              textStyle={{ fontSize: 14, color: 'black', fontWeight: '600', textAlign: 'center' }}
              text={item.year} />
          </View>
        }
        />
      </View>
    );
  }
}

// export default DocumentTypeScreen 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  getSahspaceYear: state.landing.getSahspaceYear,
});
const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getSpaceUploadedDocList: state => dispatch(Actions.getSpaceUploadedDocList(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentTypeScreen);