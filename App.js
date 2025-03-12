import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
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
      <Text style={styles.titulo}>Calculadora de Aumento</Text>

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

      <Button title="Calcular" onPress={calcularAumento} color="#007bff" />

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>
            Valor original: R$ {resultado.valorOriginal.toFixed(2)}
          </Text>
          <Text style={styles.resultadoTexto}>
            Aumento: {resultado.aumentoPercentual.toFixed(2)}%
          </Text>
          <Text style={styles.resultadoTexto}>
            Novo valor: R$ {resultado.novoValor.toFixed(2)}
          </Text>
          <Text style={styles.resultadoTexto}>
            Valor do aumento: R$ {resultado.valorAumento.toFixed(2)}
          </Text>
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
    backgroundColor: '#FDFF93FF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 45,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'orange',
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  resultadoTexto: {
    fontSize: 16,
    marginBottom: 8,
  },
});