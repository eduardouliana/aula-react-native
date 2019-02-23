import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';
import MinhaImagem from './src/components/MinhaImagem';
import Botao from './src/components/Botao';


export default class App extends Component {
  constructor(props) {
    super(props);
    //definindo o objeto de stado
    this.state = {
      texto: ''
    }
    //amarrando a função com o construtor da classe
    this.exibirTexto = this.exibirTexto.bind(this);
    this.clicar = this.clicar.bind(this);
  }

  //implementando função clicar
  clicar() {
    alert(this.state.texto)
  }

  exibirTexto(texto) {
    let state = this.state;
    if (texto == ''){
      state.texto = 'Nenhum texto digitado';
    } else {
      state.texto = texto;
    }    

    //IMPORTANTEEEEE
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.principal}>

   
        <MinhaImagem altura='250' largura='250' />

        <Button title='Clique aqui' onPress={this.clicar}></Button>
 
        {/**Botão customizado */}
        <Botao cor='white' onPress={this.clicar} texto='Aqui' borda='3' />

        <TextInput style={styles.textoInput}
          keyboardType='numeric'
          autoFocus='true'
          placeholder='Digite o texto aqui ...'
          onChangeText={(texto) => this.exibirTexto(texto)}>
        </TextInput>
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoInput: {
    borderWidth: 2,
    height: 40, 
    borderColor: 'gray'
  },
  texto: {
    fontSize: 40,
    color: 'blue',

  }
});