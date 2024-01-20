/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
// eslint-disable-next-line max-len
import {View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
  ImageBackground} from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';
import OurChild from './src/components/OurChild';
import {Feather} from '@expo/vector-icons';
import ListItem from './src/components/ListItem';
/**
 * Represents an array of weather data.
 * @type {Array}
 */

const DATA = [
  {
    dt_text: '2024-01-03 12:00:00',
    main: {
      temp_max: 296.31,
      temp_min: 290.2,
    },
    Weather: [
      {
        main: 'Rain',
      }
    ]
  },

  {
    dt_text: '2024-01-03 15:00:00',
    main: {
      temp_max: 160.31,
      temp_min: 150.2,
    },
    Weather: [
      {
        main: 'Snow',
      }
    ]
  },
  {
    dt_text: '2024-01-11 18:00:00',
    main: {
      temp_max: 200.31,
      temp_min: 199.2,
    },
    Weather: [
      {
        main: 'Clear',
      }
    ]
  },
];

/**
 * Represents the app.
 * @return {View} - App
 */
const EmptyList = () => {
  return (
    <View>
      <Text>No Data</Text>
    </View>
  );
};
/**
 * Represents the app.
 * @return {View} - App
 */
const UpComingWeather = () => {
  // eslint-disable-next-line no-unused-vars
  const renderItem = ({item}) => {
    return (
      <ListItem
        condition={item.Weather[0].main}
        dt_text={item.dt_text}
        min={item.main.temp_min}
        temp_max={item.main.temp_max}
      />);
  };
  const {container, image} = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('./assets/up-comingWeatherBacground.jpg')}
        style={image}
        resizeMode='cover'
      >
        <Text>Up Coming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
          ListEmptyComponent={EmptyList}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default UpComingWeather;


