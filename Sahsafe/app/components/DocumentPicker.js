import * as React from 'react'

import { StyleSheet, View, Text,Image, Button, TouchableOpacity } from 'react-native'
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
import { useEffect, useState } from 'react'
import * as Services from "@services";
import * as AppConstant from "@constants"
import { images } from '../assets/images/index'
const DocumentPickerScreen = (props) => {
  //console.log("🚀 ~ file: DocumentPi========== ~ props", props)
  const [result, setResult] = useState(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="+ Share File"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            })
            console.log('result-------------------', pickerResult)
            props.handleSuccessUpload(pickerResult)
          } catch (e) {
            console.log("error--------------",e)
            props.handleError(e)
          }
        }}
      >
        <View style={{alignItems:"center",flexDirection:'row',paddingHorizontal: 15}}>
          <Image
            style={{ height: 25, width: 25 }}
            source={images.attachment}/>
          <Text style={{ fontSize: 18, color: 'black',marginLeft:10, fontFamily: AppConstant.Fonts.roboto_medium }}>Attachment</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DocumentPickerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})