import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.principal}>
        {/*Header */}
        <View style={styles.header}>
          <Text style={styles.texto}>Cabeçalho</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.textoBody}>Eduardo</Text>
        </View>

        {/*Footer */}
        <View style={styles.footer}>
          <Text style={styles.texto}>Rodapé</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: 'grey',
    flex: 1
  },
  header: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
    color: 'white'
  },
  body: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  footer: {
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBody: {
    fontSize: 80,
    color: 'yellow'    
  }
});