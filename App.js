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
    dt_text: '2024-01-07 18:00:00',
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
 * Represents an item in the list.
 * @param {object} props - props
 * @return {View} - Item
 */

const Item = (props) => {
// eslint-disable-next-line react/prop-types
  const {dt_text, min, max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'black'} />
      <Text styles={styles.date}>{dt_text}</Text>
      <Text styles={styles.temp}>{min}</Text>
      <Text styles={styles.temp}>{max}</Text>
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
  const renderItem = ({item}) => {
    return (
      <Item
        condition={item.Weather[0].main}
        dt_text={item.dt_text}
        min={item.main.temp_min}
        temp_max={item.main.temp_max}
      />);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Up Coming Weather</Text>
      <ImageBackground
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
  },
});

export default App;


