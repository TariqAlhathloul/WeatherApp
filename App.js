import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>

      <View style={styles.container}>
        <Text style={styles.text}>Current Weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    backgroundColor: 'plum',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    paddingTop: 50,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  box: {
    padding: 10,
  },
} );

export default App;
