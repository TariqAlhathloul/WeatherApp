/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import City from './src/components/screens/City';
import CurrentWeather from './src/components/screens/CurrentWeather';

const App = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
