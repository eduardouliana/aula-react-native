import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Botao from './src/components/Botao';

export default class App extends Component {
  constructor(props) {
    super(props);
    //definindo o objeto de stado
    this.state = {
      valorA: '',
      valorB: '',
      soma: ''
    }
    //amarrando a função com o construtor da classe
    this.calcular = this.calcular.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  calcular() {
    let state = this.state;
    state.soma = parseInt(this.state.valorA) + parseInt(this.state.valorB);
    this.setState(state);
  }

  limpar() {
    let state = this.state;
    state.valorA = '';
    state.valorB = '';
    state.soma = '';
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.principal}>
        {/*Header */}
        <View style={styles.header}>
          <Text style={styles.textoHeader}>Calculadora</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyEntrada}>
            <TextInput style={styles.textoInput}
              keyboardType='numeric'
              placeholder='Digite valor 1'
              onChangeText={(valorA) => this.setState({ valorA })}
              value={this.state.valorA}
            >
            </TextInput>
            <TextInput style={styles.textoInput}
              keyboardType='numeric'
              placeholder='Digite valor 2'
              onChangeText={(valorB) => this.setState({ valorB })}
              value={this.state.valorB}
            >
            </TextInput>
          </View>
          <View style={styles.bodyBotoes}>
            {/**Botões customizado */}
            <Botao cor='green' onPress={this.calcular} texto='Calcular' borda='3' />
            <Botao cor='red' onPress={this.limpar} texto='Limpar' borda='3' />
          </View>
          <View style={styles.bodyResultado}>
            <Text style={styles.textoBody}>{this.state.soma}</Text>
          </View>

        </View>

        {/*Footer */}
        <View style={styles.footer}>
          <Text style={styles.textoHeader}>Eduardo Uliana</Text>
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
  textoHeader: {
    fontSize: 20,
    color: 'white'
  },
  body: {
    backgroundColor: 'white',
    flex: 1
  },
  footer: {
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBody: {
    fontSize: 50,
    color: 'green'
  },
  textoInput: {
    borderWidth: 2,
    height: 50,
    borderColor: 'gray'    
  },
  texto: {
    fontSize: 40,
    color: 'blue',

  },
  bodyBotoes: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'

  },
  bodyEntrada: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-around'
  },
  bodyResultado: {
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1

  }
});