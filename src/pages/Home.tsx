import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Defina os tipos de navegação para o seu stack
type RootStackParamList = {
  Home: undefined;
  Solver: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à App de Resolução de Equações</Text>
      <Text style={styles.description}>
        Resolva equações lineares, quadráticas e limites facilmente. Insira os dados e veja os passos detalhados da solução!
      </Text>
      <Button 
        title="Começar" 
        onPress={() => navigation.navigate('Solver')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
});

export default Home;
