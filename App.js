import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState(0);
  const [porcentagemAumento, setPorcentagemAumento] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularAumento = () => {
    if (!nomeProduto || !valorOriginal || !porcentagemAumento) {
      Alert.alert('Tem campos em branco');
      return;
    }

    const valor = parseFloat(valorOriginal);
    const porcentagem = parseFloat(porcentagemAumento);

    if (isNaN(valor) || isNaN(porcentagem)) {
      Alert.alert('Valores inválidos');
      return;
    }

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
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de aumento"
        value={porcentagemAumento}
        onChangeText={setPorcentagemAumento}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcularAumento} />

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoText}>Valor original: {resultado.valorOriginal}</Text>
          <Text style={styles.resultadoText}>Aumento percentual: {resultado.aumentoPercentual}%</Text>
          <Text style={styles.resultadoText}>Novo valor: {resultado.novoValor}</Text>
          <Text style={styles.resultadoText}>Valor do aumento: {resultado.valorAumento}</Text>
        </View>
      )}
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