import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { solveLinear, solveBiquadratic, solveQuadratic } from '../utils/equations'; // Adicionando a função para resolver equações quadráticas

export default function Solver() {
  const [type, setType] = useState('linear'); // Tipo da equação
  const [input, setInput] = useState(''); // Entrada do usuário
  const [solution, setSolution] = useState(''); // Resultado

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

      {/* Botões com estilo moderno */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, type === 'linear' && styles.selectedButton]} onPress={() => setType('linear')}>
          <Text style={[styles.buttonText, type === 'linear' && styles.selectedButtonText]}>Linear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, type === 'biquadratic' && styles.selectedButton]} onPress={() => setType('biquadratic')}>
          <Text style={[styles.buttonText, type === 'biquadratic' && styles.selectedButtonText]}>Biquadrática</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, type === 'quadratic' && styles.selectedButton]} onPress={() => setType('quadratic')}>
          <Text style={[styles.buttonText, type === 'quadratic' && styles.selectedButtonText]}>Quadrática</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Insira os dados:</Text>
      <TextInput 
        style={styles.input} 
        placeholder={getExample()}
        onChangeText={setInput} 
        value={input} 
        keyboardType="default"
      />

      <TouchableOpacity style={styles.solveButton} onPress={handleSolve}>
        <Text style={styles.solveButtonText}>Resolver</Text>
      </TouchableOpacity>

      {/* Verificação de fallback para garantir que 'solution' tenha sempre um valor */}
      <Text style={styles.solution}>{solution || 'Nenhuma solução disponível.'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8', // Cor de fundo suave
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3e4a59', // Cor de título escura
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3e4a59',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4c8bf5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  selectedButton: {
    backgroundColor: '#5f91f1',
  },
  selectedButtonText: {
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dcdfe6',
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    color: '#3e4a59',
    marginBottom: 30,
    elevation: 2, // Sombra suave no campo de entrada
  },
  solveButton: {
    backgroundColor: '#34c759',
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  solveButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  solution: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3e4a59',
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});
