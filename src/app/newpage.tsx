import { useState } from 'react';
import {useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';



export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Esta es la página de Perfil!</Text>
      
      {/* Enlace para volver a la página de inicio */}
      <Link href="/" style={styles.enlace} onPress={volverInicio}>
        Volver al Inicio
      </Link>
    </View>
  );
}

function volverInicio() {
  // Aquí puedes agregar la lógica para volver a la página de inicio
  console.log('Volviendo a la página de inicio...');
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1919' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#fdfdfd' },
  enlace: { 
    color: '#007AFF',
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '600'
  },
});