import React from 'react';
import {Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar, View} from 'react-native';
import IconText from '../IconText';

const City = () => {
  const {container, image, CityName,
    CountryName, population, riseSetWarapper, rowLayout} = styles;
  return (
    <SafeAreaView style = {container}>
      <ImageBackground
        source={require('../../../assets/riyadh-2197496_1280.jpg')}
        style={image}
        resizeMode='cover'
      >
        <Text style={[CountryName]}>Saudi Arabia</Text>
        <Text style={[CityName]}>Riyadh</Text>
        <View style={[population, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'white'}
            bodyText={'13,750,000'} />
        </View>
        <View style={[riseSetWarapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'06:40am'}
            size={45} />

          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'05:22pm'}
            size={45} />
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
    justifyContent: 'space-around',
    marginTop: 30,
  },
  TextSet: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default City;
