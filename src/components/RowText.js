import React from 'react';
import {Text, View} from 'react-native';


const RowText = (props) => {
  // eslint-disable-next-line react/prop-types
  const {containerStyles, messageOne,
    // eslint-disable-next-line react/prop-types
    messageTwo, messageOneStyle,
    // eslint-disable-next-line react/prop-types
    messageTwoStyle} = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};


export default RowText;
