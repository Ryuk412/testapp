import { useState } from 'react';
import {useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  // TypeScript infiere automáticamente que 'contador' es un number
  const [contador, setContador] = useState<number>(0);

  return (
    <View style={styles.container1}>
      <Text style={styles.texto}>Has presionado el botón:</Text>
      <Text style={styles.numero}>{contador} veces</Text>
      
      <Button
        title="Incrementar"
        onPress={() => setContador(contador + 1)}
      />

      <Button
        title="Decrementar"
        onPress={() => setContador(contador - 1)}
      />

      <Button
        title="Resetear"
        onPress={() => resetContador(contador, setContador)}
      />

      <Link href="/newpage" style={styles.enlace} onPress={abrirPerfil}>Ir a la página de Perfil</Link>

    </View>
  );
}
function abrirPerfil() {
    // Aquí puedes agregar la lógica para abrir la página de perfil
    console.log('Abriendo la página de perfil...');
}

export function resetContador(contador: number, setContador: React.Dispatch<React.SetStateAction<number>>) {
    // Aquí puedes agregar la lógica para resetear el contador
    console.log('Reseteando el contador...');
    setContador(0);
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1919',
  },
  texto: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#fdfdfd',
  },
  numero: {
    fontSize: 48,
    paddingVertical: 10,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#007AFF',
  },
  enlace: { 
    color: '#007AFF',
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '600'
  },
  boton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  }
});
