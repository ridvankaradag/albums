// Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    viewStyle:{
        backgroundColor: '#7d5fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 2},
        elevation: 4, //?
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
 }
};

// Make exportable
export default Header;