import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import RowText from '../RowText';

const CurrentWeather = () => {
  const {highLow, highLowWrapper, description, bodyWrapper,
    temp, feels, container, wrapper} = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={80} color="black"/>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels Like 5</Text>

        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 5'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}/>


        <RowText
          messageOne={'Its Sunny'}
          messageTwo={'Its Perfect T-Shirt weather'}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={description}
        />
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

export default CurrentWeather;
