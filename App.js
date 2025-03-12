import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {

  const [valor, setvalor] = useState(0)
  const [porcentagem, setporcentagem] = useState(0)

  function clicado() {
    console.log("O botão foi clicado")
  }

  return (
    <View>
      <TextInput style={{ margin: 30, fontSize: 30 }}
        placeholder='Digite seu valor'
        value={valor}
        onChangeText={(valor) => setValor(valor)}
      />
      <Text Text>Resultado: {valor}</Text>
      <Button title='Clique aqui' onPress={() => { console.log("Clicando ARROW") }} />
    </View>
  );
}