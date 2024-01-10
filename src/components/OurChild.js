import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const OurChild = (props) => {
  // eslint-disable-next-line react/prop-types
  const {message} = props;
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.crate({
  container: {
    flex: 1,
    height: 200,
    width: 200,
    backgroundColor: 'red',
  },
});
export default OurChild;
