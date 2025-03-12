import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function Formulario({ navigation }) {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [porcentagemAumento, setPorcentagemAumento] = useState('');

  const calcular = () => {
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

    navigation.navigate('Resultado', {
      nomeProduto,
      valorOriginal: valor,
      aumentoPercentual: porcentagem,
      novoValor,
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

      <Button title="Calcular" onPress={calcular} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
  },
});
