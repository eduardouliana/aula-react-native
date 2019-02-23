import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Botao extends Component {
    constructor (props) {
        super(props);
        this.state = {};

        this.styles = StyleSheet.create({
            botao: {
                width: 230,
                height: 50,
                borderWidth: parseInt(props.borda),
                borderColor: props.cor,
                borderRadius: 15
            },
            botaoArea: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center' 
            },
            botaoTexto: {
                fontSize: 20,
                fontWeight: 'bold',
                color: props.cor
            }
        })
    }
    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
                <View style={this.styles.botaoArea}>
                    <Text style={this.styles.botaoTexto}>{this.props.texto}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}