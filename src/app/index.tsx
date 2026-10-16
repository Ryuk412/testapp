import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  // TypeScript infiere automáticamente que 'contador' es un number
  const [contador, setContador] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Has presionado el botón:</Text>
      <Text style={styles.numero}>{contador} veces</Text>
      
      <Button 
        title="Incrementar"
        onPress={() => setContador(contador + 1)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#007AFF',
  },
});
