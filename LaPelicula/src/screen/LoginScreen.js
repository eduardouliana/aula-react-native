import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { LPButton } from '../component/LPButton';

export default class LoginScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({ navigation }) => ({
        title: 'Página de Login',
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'white'
    });

    constructor(props) {
        super(props);
        this.state = {};

        this.telaSobre = this.telaSobre.bind(this);
        this.sair = this.sair.bind(this);
    }
    //navega para tela Sobre
    telaSobre() {
        this.props.navigation.navigate('Sobre');
    }

    sair() {
        BackHandler.exitApp();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tela de Login</Text>
                <LPButton titulo="Sobre" onPress={() => { this.telaSobre() }} />
                <LPButton titulo="Sair" onPress={() => { this.sair() }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});