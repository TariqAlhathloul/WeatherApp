/* eslint-disable react/prop-types */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const IconText = (props) => {
  const {iconName, iconColor, bodyText} = props;
  const {container, TextTheme} = styles;
  return (
    <View style={container}>
      <Feather
        name={iconName}
        size={50}
        color={iconColor} />
      <Text style={TextTheme}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  TextTheme: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default IconText;
