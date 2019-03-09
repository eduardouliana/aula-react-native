import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class FilmeScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
        title: 'Página de Filmes'
    });

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de Filmes</Text>
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