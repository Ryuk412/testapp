import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();

  const [mensaje, setMensaje] = useState<string>('Aquí irá el contenido principal de tu práctica...');
  return (
    <View style={[styles.pantallaCompleta, { backgroundColor: theme.background }]}>
      
      {/* 1. Caja de la Cabecera (Header) */}
      <View style={[styles.cabecera, { backgroundColor: theme.backgroundElement }]}>
        <Pressable 
          style={styles.botonMenu} 
          onPress={() => alert('¡Tocaste el menú!')}
        >
          <Image 
            source={require('@/images/list.png')}
            style={[styles.iconoMenu, {tintColor: theme.text}]}
          />
        </Pressable>

        <Text style={[styles.textoCabecera, { color: theme.text }]}>Mi Aplicación</Text>
      </View>

      {/* 2. Caja del Contenido Central (Body) */}
       <View style={styles.cuerpo}>
        {/* El texto ahora muestra el estado dinámico */}
        <Text style={[styles.textoCuerpo, { color: theme.text }]}>{mensaje}</Text>
      </View>

      {/* 3. Caja de la Botonera (Footer) */}
      <View style={[styles.botonera, { backgroundColor: theme.backgroundElement}]}>
        {/* Usamos Pressable en lugar de Button porque es mucho más fácil de estilizar como dev JS */}
        <Pressable onPress ={() => setMensaje('¡Tocaste el botón 1!')}style={[styles.boton, { backgroundColor: theme.backgroundSelected }]}>
          <Text style={[styles.textoCuerpo, { color: theme.text }]}>Acción 1</Text>
        </Pressable>
        
        <Pressable onPress ={() => setMensaje('¡Tocaste el botón 2!')}style={[styles.boton, { backgroundColor: theme.backgroundSelected }]}>
          <Text style={[styles.textoCuerpo, { color: theme.text }]}>Acción 2</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  pantallaCompleta: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  cabecera: {
    height: 90,
    flexDirection: 'row',       // Permite poner el menú y el título al lado del otro
    alignItems: 'center',       // Los centra verticalmente
    justifyContent: 'center',   // Centra el título principal
    paddingTop: 30,             // Espacio seguro para la barra de estado del celular
    paddingHorizontal: 15,
    position: 'relative',        // Nos sirve para posicionar el botón de menú de forma absoluta respecto al header
  },
  botonMenu: {
    position: 'absolute',       // Flota de forma independiente solo DENTRO de la cabecera
    left: 15,                   // Se pega al borde izquierdo de forma limpia
    bottom: 12,                 // Se alinea a la altura del texto
  },
  iconoMenu: {
    width: 30,                  // Un tamaño estándar para iconos móviles es entre 24px y 32px
    height: 30,
    resizeMode: 'contain',
  },
  textoCabecera: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cuerpo: {
    flex: 1, // Esto hace que el cuerpo ocupe TODO el espacio estirable que sobra entre el header y el footer
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoCuerpo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  botonera: {
    flexDirection: 'row', // Ponemos los botones uno al lado del otro
    justifyContent: 'space-around', // Deja un espacio equitativo alrededor de cada botón
    alignItems: 'center',
    paddingVertical:20,
    paddingBottom: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  boton: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    minWidth: 120,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});