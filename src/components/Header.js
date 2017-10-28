import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// functional component presents static data and cannot handle fetching data
// add "console.log('something')" or "debugger" to Debug JS Remotely
// props pass data between parent and child components
const Header = (props) => {
  const { viewStyle, textStyle, subTextStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={textStyle}>
          {props.headerText}
        </Text>
      </TouchableOpacity>
      <Text style={subTextStyle}>
        {props.subHeaderText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    marginBottom: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTextStyle: {
    fontSize: 18
  }
};

export default Header;
