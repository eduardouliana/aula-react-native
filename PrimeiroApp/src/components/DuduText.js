import React, { Component } from 'react';
import { Text } from 'react-native'

export default class DuduText extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>Olá {this.props.name} {this.props.lastName}</Text>
        );
    }
}