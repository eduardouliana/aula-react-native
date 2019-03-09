import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CameraScreen extends Component {
    //configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
        title: 'Página da Camera'
    });

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela para Camera</Text>
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