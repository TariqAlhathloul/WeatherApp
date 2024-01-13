import React from 'react';
import {Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import IconText from '../IconText';

const City = () => {
  const {container, image, CityName,
    CountryName, population, riseSetWarapper, TextSet} = styles;
  return (
    <SafeAreaView style = {container}>
      <ImageBackground
        source={require('../../../assets/riyadh-2197496_1280.jpg')}
        style={image}
        resizeMode='cover'
      >
        <Text style={[CountryName]}>Saudi Arabia</Text>
        <Text style={[CityName]}>Riyadh</Text>
        <View style={population}>
          <IconText iconeName={'nature-people'}
            size={50} iconeColor={'black'} bodyText={'13,750,000'} />
        </View>
        <View style={riseSetWarapper}>
          <Feather name="sunrise" size={45} color="white" />
          <Text style={TextSet}>06:40am</Text>
          <Feather name="sunset" size={45} color="white" />
          <Text style={TextSet}>05:22pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  CityName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  CountryName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  population: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  populationText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  riseSetWarapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  TextSet: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});


export default City;
