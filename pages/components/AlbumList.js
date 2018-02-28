import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    componentWillMount(){
        console.log("Component will mount...");
    }
    render(){
        return (
            <View>
            <Text>Album List!</Text>
            </View>
        );
    }
}



// Make exportable
export default AlbumList;