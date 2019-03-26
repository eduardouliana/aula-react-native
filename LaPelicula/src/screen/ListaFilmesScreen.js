
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ImageBackground, Alert } from 'react-native';
import { LPButton } from '../component/LPButton';
import { FlatList } from 'react-native-gesture-handler';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'lapelicula.db' });


//Component de Filmes
class Filmes extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.editarFilme = this.editarFilme.bind(this);
    this.excluirFilme = this.excluirFilme.bind(this);
    this.pressionouFilme = this.pressionouFilme.bind(this);

  }
  pressionouFilme(item) {
    Alert.alert(
      'Selecionado: ' + item.descricao,
      'Oque deseja fazer?',
      [
        {
          text: 'Editar', onPress: () => {
            alert('Editando Filme: ' + item.descricao);
            //this.props.navigation.navigate('Filme', { data: item })
           
          }
        },
        {
          text: 'Excluir', onPress: () => {
            db.transaction(tx => {
              tx.executeSql('DELETE FROM filme WHERE codigo = ?', [item.codigo],
                (tx, res) => { });
            });
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  editarFilme(item) {
    alert(item.descricao);
  }

  excluirFilme(item) {
    Alert.alert(
      'Excluir filme',
      'Deseja realmente excluir o filme: ' + item.descricao,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim', onPress: () => {
            db.transaction(tx => {
              tx.executeSql('DELETE FROM filme WHERE codigo = ?', [item.codigo],
                (tx, res) => { });
            });
          }
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => { this.pressionouFilme(this.props.data) }} underlayColor="blue" >

          <ImageBackground resizeMode="cover" source={{ uri: this.props.data.imagem }} style={{ height: 150 }}>
            <View style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              paddingLeft: 10,
              paddingBottom: 10
            }}>
              <Text style={{ fontSize: 23, color: '#FFFFFF', fontWeight: 'bold' }}>{this.props.data.descricao}</Text>
              <LPButton
                onPress={() => { this.editarFilme(this.props.data) }}
                titulo="Editar"
              />
              <LPButton
                onPress={() => { this.excluirFilme(this.props.data) }}
                titulo="Excluir"
              />
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}



export default class ListaFilmeScreen extends Component {
  //Configurando opções de navegação
  static navigationOptions = ({ navigation }) => ({

    tabBarLabel: 'Lista Filmes',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../img/home_ativo.png')} style={{ width: 26, height: 26 }} />
        );
      } else {
        return (
          <Image source={require('../img/home_inativo.png')} style={{ width: 26, height: 26 }} />
        );
      }
    }

  });

  constructor(props) {
    super(props);
    this.state = {
      filmes: []
    }
    
    this.editarFilme = this.editarFilme.bind(this);
    this.excluirFilme = this.excluirFilme.bind(this);
    this.pressionouFilme = this.pressionouFilme.bind(this);
    //Buscar os dados dos filmes na base
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM filme ORDER BY descricao', [],
        (tx, res) => {
          //Tratar resultado da consulta
          var temp = [];

          // Percorre toda a lista
          for (let i = 0; i < res.rows.length; i++) {
            temp.push(res.rows.item(i));
          }
          //Seta os filmes na variavel temp
          this.setState({ filmes: temp });
        });
    });
  }
  pressionouFilme(item) {
    Alert.alert(
      'Selecionado: ' + item.descricao,
      'Oque deseja fazer?',
      [
        {
          text: 'Editar', onPress: () => {            
            this.props.navigation.navigate('Filme', { data: item })            
          }
        },
        {
          text: 'Excluir', onPress: () => {
            //excluir do banco
            db.transaction(tx => {
              tx.executeSql('DELETE FROM filme WHERE codigo = ?', [item.codigo],
                (tx, res) => { });
            });
            //remover da lista
            const newData = this.state.filmes.filter(itemLista => itemLista.codigo !== item.codigo);
            this.setState({filmes: newData});
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  editarFilme(item) {
    alert(item.descricao);
  }

  excluirFilme(item) {
    Alert.alert(
      'Excluir filme',
      'Deseja realmente excluir o filme: ' + item.descricao,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim', onPress: () => {
            db.transaction(tx => {
              tx.executeSql('DELETE FROM filme WHERE codigo = ?', [item.codigo],
                (tx, res) => { });
            });
          }
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          extraData={this.state}
          keyExtractor={item => item.codigo.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableHighlight onPress={() => { this.pressionouFilme(item) }} underlayColor="blue" >

                <ImageBackground resizeMode="cover" source={{ uri: item.imagem }} style={{ height: 150 }}>
                  <View style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    paddingLeft: 10,
                    paddingBottom: 10
                  }}>
                    <Text style={{ fontSize: 23, color: '#FFFFFF', fontWeight: 'bold' }}>{item.descricao}</Text>                    
                  </View>
                </ImageBackground>
              </TouchableHighlight>
            </View>
          )}
        ></FlatList>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})