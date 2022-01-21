import * as React from 'react'

import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import * as AppConstant from "@constants"
import { images } from '../assets/images/index'
import { launchCamera } from 'react-native-image-picker';
var RNFS = require('react-native-fs');

const ImageCaptureScreen = (props) => {
 
  const [result, setResult] = useState(null);
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          try {
            const result = await launchCamera({
              mediaType: "photo",
            });
            if (result && result.assets && result.assets.length > 0) {
              let fileData = result.assets[0];
              let data = {
                fileCopyUri: fileData.uri,
                name: fileData.fileName,
                size: fileData.fileSize,
                type: fileData.type,
                uri: fileData.uri
              }
              console.log('result-------------------', data)
              props.handleSuccessUpload(data)
            }
          } catch (e) {
            console.log("error--------------",e)
            props.handleError(e)
          }
        }}
      >
        <View style={{alignItems:"center",flexDirection:'row',paddingHorizontal: 15}}>
          <Image
            style={{ height: 25, width: 25 }}
            source={images.camera}/>
          <Text style={{ fontSize: 18, color: 'black',marginLeft:10, fontFamily: AppConstant.Fonts.roboto_medium }}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ImageCaptureScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: 'center',
    justifyContent: 'center',
  },
})