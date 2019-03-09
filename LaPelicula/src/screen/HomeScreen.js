import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LPButton } from '../component/LPButton';

export default class HomeScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({ navigation }) => ({
        title: 'Página Principal'
    });

    constructor(props) {
        super(props);
        this.state = {};

        this.telaLogin = this.telaLogin.bind(this);

    }
    //navega para tela de login
    telaLogin() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tela Principal</Text>
                <LPButton titulo="Login" onPress={() => { this.telaLogin() }} />
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