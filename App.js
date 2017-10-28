import React from 'react';
import { View, Linking } from 'react-native';
import Header from './src/components/Header';
import WorkoutList from './src/components/WorkoutList';

const today = new Date();
const date = today.toDateString();
const url = 'https://www.darebee.com/challenges/100-challenge.html';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header
      headerText={'Albums'}
      subHeaderText={`${date}`}
      onPress={() => Linking.openURL(url)}
    />
    <WorkoutList />
  </View>
);

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const welcome = Platform.select({
  ios: 'Welcome to iPhone simulator',
  android: 'Welcome to Android simulator',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {welcome}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
