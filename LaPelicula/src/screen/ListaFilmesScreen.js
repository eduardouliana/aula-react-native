import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SobreScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => {
          if (focused) {
              return (
                  <Image source={require('../img/home_ativo.png')}
                      style={{ width: 26, height: 26 }} />
              );
          } else {
              return (
                  <Image source={require('../img/home_inativo.png')}
                      style={{ width: 26, height: 26 }} />
              );
          }
      }
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