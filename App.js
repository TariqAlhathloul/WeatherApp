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
  Image} from 'react-native';
import CurrentWeather from './src/components/currentWeather';
import UpComingWeather from './src/components/UpComingWeather';
import {Feather} from '@expo/vector-icons';

/**
 * Represents an array of weather data.
 * @type {Array}
 */

const DATA = [
  {
    dt_text: '2024-01-03 12:00:00',
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
    },
    Weather: [
      {
        main: 'Rain',
      },
    ],
  },

  {
    dt_text: '2024-01-03 12:00:00',
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
    },
    Weather: [
      {
        main: 'Snow',
      },
    ],
  },
];

/**
 * Represents an item in the list.
 * @param {object} props - props
 * @return {View} - Item
 */

const Item = (props) => {
// eslint-disable-next-line react/prop-types
  const {dt_text, temp_min, temp_max, condition, main} = props;
  return (
    <View>
      <Feather name={'sun'} size={'50'} color={'white'}/>
      <Text styles={styles.date}>{dt_text}</Text>
      <Text styles={styles.temp}>{temp_min}</Text>
      <Text styles={styles.temp}>{temp_max}</Text>
    </View>
  );
};
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
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const renderItem = () => {
    return (
      <Item
        condition={Item.Weather[0].main}
        dt_text={dt_text}
        temp_min={temp_min}
        temp_max={temp_max}
      />);
  };

  return (
    <SafeAreaView style={styles.SafeContainer}>
      <Text>Up Coming Weather</Text>
      <Image
        source={require('./assets/up-comingWeatherBacground.jpg')}
        style={styles.image}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_text}
        ListEmptyComponent={EmptyList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'plum',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'plum',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignContent: 'center',
    borderWidth: 5,
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
  date: {
    fontSize: 15,
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;


