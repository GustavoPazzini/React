import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function(){
  return(
    <Text style={estilos.txt2}>Texto top</Text>
  )
}
const estilos = StyleSheet.create({
  txt2:{
    color:'#00f',
    fontSize: 50,
  }
});