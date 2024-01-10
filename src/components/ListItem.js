/* eslint-disable camelcase */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


/**
 * Represents an item in the list.
 * @param {object} props - props
 * @return {View} - Item
 */

const ListItem = (props) => {
// eslint-disable-next-line react/prop-types, camelcase, no-unused-vars
  const {dt_text, min, max, condition} = props;
  const {item, date, temp} = styles;
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'black'} />
      <Text styles={date}>{dt_text}</Text>
      <Text styles={temp}>{min}</Text>
      <Text styles={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
});

export default ListItem;
