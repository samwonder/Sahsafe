
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Share,
    Alert
} from 'react-native';
import * as AppConstant from "@constants";
import CustomButton from '../../components/CustomButton';
import CurveButtonIconandText from '../../components/curveButtonIconandText';
import { images } from '../../assets/images/index'
import Pdf from 'react-native-pdf';
var RNFS = require('react-native-fs');
import { WebView } from 'react-native-webview';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";

class FilePreview extends Component {

    loaderFunction(state) {
        this.props.toggleLoader(state)
    }

    handleIcons(extension) {
        let image = "";
        if (extension === 'xlsx') {
            return images.xlIcon;
        } else if (extension === 'csv') {
            return images.docIcon;
        } else if (extension === 'pdf') {
            return images.pdfIcon;
        } else if (extension === 'jpg' || extension === 'png') {
            return images.imageIcon;
        }
        // docIcon,
        // xlIcon,
        // imageIcon

    }

    fileDownload() {
        // if (jobId !== -1) {
        //   this.setState({ output: 'A download is already in progress' });
        // }

        const progress = data => {
            const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
            const text = `Progress ${percentage}%`;
            //this.setState({ output: text });
            console.log("File download------------------ ", text)
        };

        const begin = res => {
            //this.setState({ output: 'Download has begun' });
            console.log("File download------------------ Download has begun")
        };

        const progressDivider = 1;
        let shareUrl = this.props.url;
        if (this.props.extension === "pdf") {
            shareUrl = this.props.url.uri;
        }
        // this.setState({ imagePath: { uri: '' } });

        // Random file name needed to force refresh...
        const downloadDest = `${RNFS.DownloadDirectoryPath}/${((Math.random() * 1000) | 0)}.` + this.props.extension;

        const ret = RNFS.downloadFile({ fromUrl: shareUrl, toFile: downloadDest, begin, progress, background: false, progressDivider });

        //  jobId = ret.jobId;

        ret.promise.then(res => {
            // this.setState({ output: JSON.stringify(res) });
            //this.setState({ imagePath: { uri: 'file://' + downloadDest } });
            console.log("output -----------", JSON.stringify(res), downloadDest)
            Alert.alert(
                "Message",
                "File download successfully on location " + downloadDest,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: () => console.log("Ok Pressed")
                    }
                ]
            );
            //  jobId = -1;
        }).catch(err => {
            this.showError(err)

            //  jobId = -1;
        });
    }

    async fileShare() {
        try {
            let shareUrl = this.props.url;
            if (this.props.extension === "pdf") {
                shareUrl = this.props.url.uri;
            }
            const result = await Share.share({
                title: "Share",
                message: "Please check this Url " + shareUrl,
                url: shareUrl
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    previewDocumentByType(extension) {
        if (extension === "pdf") {
            return <Pdf
                source={this.props.url}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
        } else if (extension === 'jpg' || extension === 'png') {
            return <WebView
                source={{
                    uri: this.props.url
                }}
                style={{ margin: 5, borderColor: '#DEDEDE', borderWidth: 1, }}
                onLoadStart={() => this.loaderFunction(true)}
                onLoadEnd={() => this.loaderFunction(false)}
                bounces={true}
                useWebKit={true}
                scrollEnabled={true}
                onShouldStartLoadWithRequest={this.checkLoadRequest}
                injectedJavaScript={`document.getElementsByTagName("pdf")[0].controlsList="nodownload";`}

            />
        } else if (extension === 'xlsx' || extension === 'csv') {
            return <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5 }}>
                <Image
                    style={{ height: '25%', width: '25%' }}
                    source={this.handleIcons(extension)}
                />
            </View>
        }
    }

    checkLoadRequest() {
        return false
    }

    render() {
        return (
            <View style={{ height: '92.5%', width: '100%', borderColor: '#DEDEDE', borderWidth: 1, backgroundColor: 'white', position: 'absolute', left: 0, right: 0, bottom: 40, top: 40 }}>
                <View style={{ height: 40, backgroundColor: 'white', borderColor: '#DEDEDE', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', fontSize: 15, fontFamily: AppConstant.Fonts.roboto_medium, alignSelf: 'center', marginLeft: 10 }}>{'Document'}</Text>
                    <CustomButton
                        buttonTitle={'X'}
                        onPressButton={() => this.props.hidePreview()}
                        buttonStyle={{ color: 'white', height: 45, width: 45, justifyContent: 'center', }}
                    />
                </View>
                <View style={styles.containerDoc}>
                    {this.previewDocumentByType(this.props.extension)}
                </View>
                <View style={{ height: 60, width: "100%", backgroundColor: 'white', borderColor: '#DEDEDE', borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>
                    <CurveButtonIconandText
                        headerText={'Download'}
                        onPressButton={() => this.fileDownload()}
                        buttonStyle={{ height: 45, width: '47%', borderRadius: 5, backgroundColor: 'rgb(241,111,8)', justifyContent: 'center', alignItems: 'center', }}
                        titleFontColor={'white'}
                        imageStyle={{ height: 25, width: 25 }}
                        imageName={images.download}
                    />
                    <CurveButtonIconandText
                        headerText={'Share File'}
                        onPressButton={() => this.fileShare()}
                        buttonStyle={{ height: 45, width: '47%', borderRadius: 5, backgroundColor: 'rgb(52,48,106)', justifyContent: 'center', alignItems: 'center', }}
                        titleFontColor={'white'}
                        imageStyle={{ height: 25, width: 25 }}
                        imageName={images.whatsapp}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        marginVertical: 5,
        fontSize: 18,
        fontFamily: AppConstant.Fonts.roboto_bold
        // height: 44,
    },
    pdf: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    containerDoc: {
        flex: 1,
        margin: 0
        // justifyContent: 'flex-start',
        //  alignItems: 'center',
        // marginTop: 25,
    },
});

const mapDispatchToProps = dispatch => ({
    toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(FilePreview);
