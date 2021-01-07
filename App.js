import{statusBar } from 'expo-status-bar'
import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class  App extends React,Component{

  constructor(props){
    super(props);
    this.state = {contador:0};
    this.incrementarContador = this.incrementarContador.bind(this);
  }

  incrementarContador(){
     this.setState({contador: this.state.contador + 1});
  }

  render(){
      return (
        <View style={styles.container}>
          <TouchableOpacity style={style.botao}>
            <Text>Pressione</Text>
          </TouchableOpacity>
          <Text>{this.state.contador}</Text>
        </View>
      );
  }    
}   
  
const styles = StyleSheet.create({
  botao: {
    paddig:20,
    backgroudColor:"purple",
    marginBotton:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
