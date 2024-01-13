import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const IconText = (props) => {
  // eslint-disable-next-line react/prop-types
  const {iconName, iconeColor, bodyText} = props;
  return (
    <View>
      <MaterialCommunityIcons
        name={iconName} size={50} color={iconeColor} />
      <Text style={styles.TextTheme}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextTheme: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default IconText;
