import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SobreScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
        title: 'Página de Lista de Filmes'
    });

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de Sobre</Text>    
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});