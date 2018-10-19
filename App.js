import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = { // a state is an object, used to change stuff around
    colorOn: false, // state variable
    hidden: false,
    btnColor: false,
    // for btn2
    fancy: false,
    text: false
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This text child inherits the text styling! Its red, larger font, and centered</Text>
        <TouchableOpacity onPress={()=>{this.setState({colorOn: !this.state.colorOn, hidden: !this.state.hidden, btnColor: !this.state.btnColor})}}> // toggles colorOn true/false
          <View style={{borderRadius:100, width: 100, height:100, backgroundColor: this.state.btnColor ? 'yellow' : '#ddd'}}>
            <Text>PRESS ME</Text>
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 40, color: this.state.colorOn ? 'green' : 'red'}}>I change color!</Text> // blue if true, else green
        {this.state.hidden && <Text>I appear and disappear :)</Text>} // if hidden is true, this will show

        <TouchableOpacity onPress={()=>{this.setState({fancy: !this.state.fancy, text: !this.state.text})}}>
          <View style={[styles.btn2, {backgroundColor: this.state.fancy ? 'purple' : 'orange'}]}>
            <Text style={{color: this.state.text ? 'white' : 'black'}}>ALSO PRESS ME</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// text field
// press submit button
// to display text down here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  btn2: {
    backgroundColor: 'black',
    padding: 10,
  },
});
