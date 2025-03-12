import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState(0);
  const [porcentagemAumento, setPorcentagemAumento] = useState(0);
  const [resultado, setResultado] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor original"
        value={valorOriginal}
        onChangeText={setValorOriginal}
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de aumento"
        value={porcentagemAumento}
        onChangeText={setPorcentagemAumento}
      />
      <Button title="Calcular" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});