//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Provider} from 'mobx-react';
import store from './src/store';

import Counter from './src/components/Counter';
import Person from './src/components/Person';
import Users from './src/components/Users';

// create a component
class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <View style={styles.container}>
          <Users />
        </View>
      </Provider>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;

