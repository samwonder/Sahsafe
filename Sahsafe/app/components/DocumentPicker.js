import * as React from 'react'

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
import { useEffect, useState } from 'react'
import * as Services from "@services";

const DocumentPickerScreen = (props) => {
  console.log("🚀 ~ file: DocumentPi========== ~ props", props)
  //   const [result, setResult] = React.useState<Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null>()
  const [result, setResult] = useState(null);
  //   useEffect(() => {
  //     console.log(JSON.stringify(result, null, 2))
  //   }, [result])

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
           // setResult([pickerResult])
            // let result = await Services.DocumentServices.uploadDocuementApi(pickerResult);
            console.log("API result",result.data)
          } catch (e) {
            props.handleError(e)
          }
        }}
      >
        <Text style={{fontSize: 18, color: 'white', fontWeight: '500'}}>+ Share File</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DocumentPickerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})