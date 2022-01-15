import React, { Component } from 'react';
import {
  AppRegistry, FlatList,
  StyleSheet, Image, View, Alert, TouchableOpacity,Text
} from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images/index';
import CustomText from '../../components/CustomText';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import EmptyScreen from '../../components/EmptyScreen'
import * as AppConstant from "@constants"
import moment from 'moment'
import * as Common from "@common";

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
      "year": this.props.getSahspaceYear[0].year,
      "month": this.state.selectedMonth.month,
      "send": 1
    }
    console.log("🚀 ~ file: ----===DocumentTypeScreen=== ~ data", data, this.state.sahspaceUser.sahspace_unique_id)
    await this.props.getSpaceUploadedDocList(data);
    console.log("🚀 ~ file: ----====-----====--------", this.props.spaceUploadedDocList.length)
    Common.BackPress(() => {
      this.popBack()
    });
  }
  navigationToDocumentList(index) {
  // this.state.sahspaceUser
  //this.props.navigation.navigate('Month', {sahspaceUser: this.state.sahspaceUser, selectedYear: this.props.getSahspaceYear[index]})


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
        data={this.props.spaceUploadedDocList}
         // numColumns={3}
          ListEmptyComponent={<EmptyScreen />}
          renderItem={({ item, index }) =>
          //   <View style={{ width: '30%', height: 120, margin: '1%' }}>
          //     {console.log("items-----------------",item)}
          //   <TouchableOpacity
          //     onPress={() => this.navigationToDocumentList(index)}
          //     style={{ height: 80, backgroundColor: '#F4F8FF', margin: '1%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          //     <Image
          //       style={{ height: 70, width: 70 }}
          //       source={images.folderIcon}
          //     />
          //   </TouchableOpacity>
          //   <CustomText
          //     textStyle={{ fontSize: 14, color: 'black', fontFamily:AppConstant.Fonts.roboto_medium, textAlign: 'center' }}
          //     text={"Year"} />
          // </View>
          <View style={{ height: 110, margin: 5, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5 }}>
              <View style={{ flexDirection: 'row', height: 110 }}>
                <View style={{ width: '25%' }} >
                  <View style={{ flex: 1, backgroundColor: '#FFE6E2', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5 }}>
                    <Image
                      style={{ height: 40, width: 50 }}
                      source={images.pdfIcon}
                    />
                  </View>
                </View>
                <View style={{ width: '65%', justifyContent: 'center' }}>
                  <Text style={styles.item}>{item.doc_name}</Text>
                  <View style={{ flexDirection: 'row',width: '45%', }}>
                    <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_bold }}>{item.user_name}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}/>
                    <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_regular }}>{moment(item.created_at).format('DD MMM YYYY')}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}/>
                    <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_regular }}>{moment(item.created_at).format('HH.mm A')}</Text>
                  </View>
                </View>
                <View style={{ width: '10%' }} >
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.onDeleteFile()}>
                    <Image
                      style={{ height: 25, width: 25 }}
                      source={images.dotsIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
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
    fontSize: 18,
    fontFamily:AppConstant.Fonts.roboto_bold
  },
})  

const mapStateToProps = state => ({
  mobileNumber: state.common.mobileNumber,
  userDetail: state.common.submitOTPResponse,
  getSahspaceYear: state.landing.getSahspaceYear,
  spaceUploadedDocList: state.landing.getSpaceUploadedDocList
});
const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getSpaceUploadedDocList: state => dispatch(Actions.getSpaceUploadedDocList(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentTypeScreen);