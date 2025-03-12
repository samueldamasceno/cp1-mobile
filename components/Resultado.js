import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Resultado({ route, navigation }) {
  const { nomeProduto, valorOriginal, aumentoPercentual, novoValor, valorAumento } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.texto}>Produto: {nomeProduto}</Text>
      <Text style={styles.texto}>Valor original: R$ {valorOriginal.toFixed(2)}</Text>
      <Text style={styles.texto}>Aumento: {aumentoPercentual.toFixed(2)}%</Text>
      <Text style={styles.texto}>Novo valor: R$ {novoValor.toFixed(2)}</Text>
      <Text style={styles.texto}>Valor do aumento: R$ {valorAumento.toFixed(2)}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});
