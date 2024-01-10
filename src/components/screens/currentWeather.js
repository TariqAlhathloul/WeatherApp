import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const currentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Current Weather</Text>
        <Feather name="sun" size={80} color="black"/>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 5</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.description}>Its Perfect T-Shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    backgroundColor: 'plum',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
  },
  temp: {
    fontSize: 48,
    color: 'black',
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    fontSize: 20,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  description: {
    fontSize: 20,
    color: 'black',
  },
  bodyWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
} );

export default currentWeather;
