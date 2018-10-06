import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world! This is my first app!</Text>
        <Text>I have no idea what these "text" labels are but they seem to print things</Text>
        <Text>I suppose thats a start</Text>
        <Text>Yikes, apparently apostrophes arent allowed here</Text>
        <Text>And line spillage is a little wonky</Text>
        <Text>But its OK. Baby steps. (why is Baby colored??)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
