import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LPButton } from '../component/LPButton';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SobreScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.state = {};

        this.voltarTela = this.voltarTela.bind(this);
        this.telaPrincipal = this.telaPrincipal.bind(this);
    }
    //navega para tela Sobre
    voltarTela() {
        this.props.navigation.goBack();
    }

    telaPrincipal() {
        this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Home'})
                ]
            })
        );
    }
    

    render() {
        return (
            <View style={styles.container}>
                <Text>Tela de Sobre</Text>
                <LPButton titulo="Voltar" onPress={() => { this.voltarTela() }} />
                <LPButton titulo="Tela Principal" onPress={() => { this.telaPrincipal() }} />
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