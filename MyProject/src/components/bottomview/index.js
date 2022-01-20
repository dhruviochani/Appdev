import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function BottomView() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>MORI</Text>
      <StatusBar style="auto" />
      <Image
         source={{
           uri: 'https://lh3.googleusercontent.com/Tmmu0qSppYGA09wYQi2mIMWd4cFCPmqC5rUw5HbJtohlP98IJcyOhNsxer6CJJ5Y'
         }}
         style={{width:150,height:150}}
         />
         <TextInput style={styles.text1} placeholder='00:00:00:00'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'red'
  },
  text1: {
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    textAlign: 'center'
  }
});