import * as React from 'react'

import { StyleSheet, View, Text, Button } from 'react-native'
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
import { useEffect } from 'react'

const DocumentPickerScreen = (props) => {
console.log("🚀 ~ file: DocumentPi========== ~ props", props, DocumentPicker)
//   const [result, setResult] = React.useState<Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null>()

//   useEffect(() => {
//     console.log(JSON.stringify(result, null, 2))
//   }, [result])

  return (
    <View style={styles.container}>
      <Button
        title="open picker for single file selection"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            })
            setResult([pickerResult])
          } catch (e) {
            props.handleError(e)
          }
        }}
      />
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