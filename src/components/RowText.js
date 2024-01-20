import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

cont RowText = () => {

    return (
        <View style={styles.highLowWrapper}>
        <Text style={styles.highLow}>High: 8 </Text>
        <Text style={styles.highLow}>Low: 5</Text>
      </View>
    );
};


const styles = StyleSheet.create({
});
export default RowText;