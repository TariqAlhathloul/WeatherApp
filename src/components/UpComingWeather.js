import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
const UpComingWeather = () => {
  return (
    <SafeAreaView styles = {styles.container}>
      <Text>UpComingWeather</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UpComingWeather;