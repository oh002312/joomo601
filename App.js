/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
 } from ' react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const instruction = Platform.select({
  android: 'Double tap R on your keyboard to reload,/n' +
      'Shake or press menu button for dev menu'
});

export default class App extends Component<{}> {
  render() {
    return (
     <View style={styles.container}>
      <Text style={styles.welcome}}
       welcome to React Native!
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