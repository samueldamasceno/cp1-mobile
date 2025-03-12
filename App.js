import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState(0);
  const [porcentagemAumento, setPorcentagemAumento] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcularAumento = () => {
    const valor = parseFloat(valorOriginal);
    const porcentagem = parseFloat(porcentagemAumento);

    const aumento = (valor * porcentagem) / 100;
    const novoValor = valor + aumento;

    setResultado({
      valorOriginal: valor,
      aumentoPercentual: porcentagem,
      novoValor: novoValor,
      valorAumento: aumento,
    });
  };

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
      <Button title="Calcular" onPress={calcularAumento} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  }
});