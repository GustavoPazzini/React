import React from "react";
import { View, StyleSheet, Button, TextInput, Image } from "react-native";

export default function App() {
  return (
    <View style={estilos.conteiner}>
      <Image style={estilos.logo} source={require("./logo.png")} />
      <TextInput style={estilos.input} placeholder="Email" />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Button title="Entrar" />
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#00000",
    alignItems: "center",
    justifyContent: "center",
    padding: 100
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    borderColor: "#F00"
  },
  logo: {
    height: 100,
    width: 150
  },
});
