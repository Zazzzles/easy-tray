import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Tray from './src/Tray'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <StatusBar hidden />
        <TouchableOpacity onPress={() => this.refs.tray.show('warn', 'Warning!', 1000)}>
          <Text>Warn!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.refs.tray.show('info', 'Here is some handy info!', 1000)}>
          <Text>Info!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.refs.tray.show('success', 'You did something right!', 1000)}>
          <Text>Success!</Text>
        </TouchableOpacity>
        <Tray
          ref="tray"
          animationDuration={1000}
          backgroundColor={'#5B616A'}
          color={'#FFF'}
        />
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
