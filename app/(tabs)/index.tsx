import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("https://reactnative.dev/movies.json");
  const [webData, setWebData] = useState("");
  const request = new XMLHttpRequest();

  function _handlePressButtonAsync() {
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success: ' + request.responseText);
        setWebData('Status: ' + request.status + ' ' + request.statusText + ' ' + request.responseText);
      } else {
        console.log('error: ' + request.responseText);
        setWebData('Error: ' + request.status + ' ' + request.statusText + ' ' + request.responseText);
      }
    }
    request.open("GET", text);
    request.send();
  }

  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text}></TextInput>
        <Button title="Click me" onPress={() => _handlePressButtonAsync()} />
      </View>
      <Text> {webData} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    justifyContent: 'center'
  }
});
