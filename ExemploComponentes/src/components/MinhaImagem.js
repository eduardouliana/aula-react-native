import React, { Component } from 'react';
import { Image } from 'react-native';

export default class MinhaImagem extends Component {
    render() {
        let img = {
            uri: '../'
        }
        return (
            <Image source={require('../img/imgmoto.png')} style={{width: parseInt(this.props.largura), height: parseInt(this.props.altura)}}></Image>
        );
    }
}