// Import Libraries
import React from 'react';
import { Text } from 'react-native';

// Make Component
const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}>Albums</Text>;
};

const styles = {
 textStyle: {
     fontSize: 20
 }
};

// Make exportable
export default Header;