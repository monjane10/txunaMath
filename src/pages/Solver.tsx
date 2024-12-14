import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { solveLinear, solveBiquadratic, solveQuadratic } from '../utils/equations'; // Adicionando a função para resolver equações quadráticas

export default function Solver() {
  const [type, setType] = useState('linear'); // Tipo da equação
  const [input, setInput] = useState(''); // Entrada do usuário
  const [solution, setSolution] = useState(''); // Resultado

  // useEffect para monitorar as mudanças no estado 'type'
  useEffect(() => {
    console.log("Tipo de equação atualizado para:", type); // Verifica a mudança de 'type'
  }, [type]);

  // Função para gerar o exemplo de entrada dependendo do tipo de equação
  const getExample = () => {
    switch (type) {
      case 'linear':
        return 'Exemplo: 2x+3=0 ou x-5=0';
      case 'biquadratic':
        return 'Exemplo: x^4-5x^2+4=0 ou x^4+3x^2-18=0';
      case 'quadratic':
        return 'Exemplo: x^2+3x+2=0 ou 2x^2+5x-3=0';
      default:
        return '';
    }
  };

  const handleSolve = () => {
    console.log("Resolvendo para o tipo:", type); // Verifica o tipo de equação antes de calcular

    try {
      let result = '';
      if (type === 'linear') {
        result = solveLinear(input);
      } else if (type === 'biquadratic') {
        result = solveBiquadratic(input);
      } else if (type === 'quadratic') {
        result = solveQuadratic(input); // Resolvendo para equações quadráticas
      }
      setSolution(result);
    } catch (err) {
      setSolution('Erro ao calcular. Verifique a entrada.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} key={type}> {/* Forçando a renderização com key */}
      <Text style={styles.title}>Escolha o Tipo de Equação:</Text>
      <Button title="Linear" onPress={() => setType('linear')} />
      <Button title="Biquadrática" onPress={() => setType('biquadratic')} />
      <Button title="Quadrática" onPress={() => setType('quadratic')} /> {/* Botão para equação quadrática */}
      
      <Text style={styles.label}>Insira os dados:</Text>
      <TextInput 
        style={styles.input} 
        placeholder={getExample()}
        onChangeText={setInput} 
        value={input} 
      />

      <Button title="Resolver" onPress={handleSolve} />
      <Text style={styles.solution}>Solução: {solution}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, marginVertical: 10 },
  example: { fontSize: 14, color: '#888', marginBottom: 10, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 20 },
  solution: { fontSize: 18, marginTop: 20, textAlign: 'center' },
});
