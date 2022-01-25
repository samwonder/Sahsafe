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
import FilePreview from '../FilePreview';

class DocumentTypeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sahspaceUser: props.route.params && props.route.params.sahspaceUser,
      selectedYear: props.route.params && props.route.params.selectedYear,
      selectedMonth: props.route.params && props.route.params.selectedMonth,
      isPreview: false,
      url: '',
      extension: "",
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
  }
  navigationToDocumentList(index) {
  // this.state.sahspaceUser
  //this.props.navigation.navigate('Month', {sahspaceUser: this.state.sahspaceUser, selectedYear: this.props.getSahspaceYear[index]})


  }

  showPreview(item, index) {
    let source = item.full_path
    if (item.extension === "pdf") {
      source = { uri: item.full_path, cache: false };
    } 
    this.setState({
      isPreview: true,
      url: source,
      extension: item.extension
    }, console.log('==========', this.state.url, item.extension))
  }

  hidePreview() {
    this.setState({
      isPreview: false,
      url: '',
      extension:""
    })
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
          <TouchableOpacity onPress={() => this.showPreview(item, index)}>
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
                  <Text numberOfLines={2} style={styles.item}>{item.doc_name}</Text>
                  <View style={{ flexDirection: 'row',width: '45%',marginTop:10 }}>
                    <Text numberOfLines={2} style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_bold }}>{item.user_name}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}/>
                    <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_regular }}>{moment(item.created_at).format('DD MMM YYYY')}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}/>
                    <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_regular }}>{moment(item.created_at).format('HH.mm A')}</Text>
                  </View>
                </View>
                <View style={{ width: '10%' }} >
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => console.log("Dots are clicked")}>
                    <Image
                      style={{ height: 25, width: 25 }}
                      source={images.dotsIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              </View>
              </TouchableOpacity>
        }
        />
        {this.state.isPreview &&
          <FilePreview extension={this.state.extension} url={this.state.url} hidePreview={() => this.hidePreview()} />
        }
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