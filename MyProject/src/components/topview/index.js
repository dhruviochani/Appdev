import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function TopView() {
let text="MEMENTO"
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{text}</Text>
      <StatusBar style="auto" />
      <Image
         source={{
           uri: 'https://lh3.googleusercontent.com/Tmmu0qSppYGA09wYQi2mIMWd4cFCPmqC5rUw5HbJtohlP98IJcyOhNsxer6CJJ5Y'
         }}
         style={{width:150,height:150}}
         />
         <TextInput style={styles.text1,{backgroundColor: 'white'}} placeholder='365:00:00:00' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'red'
  },
  text1: {
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    textAlign: 'center'
  }
});