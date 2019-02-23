import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import DuduText from './src/components/DuduText';


export default class App extends Component {
  render() {
    {/*
      flex: 1 = toda tela
      justifyContent: 'center' = alinha vertical
      alignItems: 'center' = alinha horizontal
    */ }

    let nome = 'Eduardo';

    return (
      <View style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Hello World</Text>

        <DuduText name="Eduardo" lastName="Uliana"></DuduText>

        <Image source={require('./src/img/imgmoto.png')}></Image>

        <Text style={{ fontSize: 20, color: 'black' }}>{nome}</Text>
      </View>
    );
  }
}