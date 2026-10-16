import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.pantallaCompleta}>
      
      {/* 1. Caja de la Cabecera (Header) */}
      <View style={styles.cabecera}>
        <Text style={styles.textoCabecera}>Mi Aplicación</Text>
      </View>

      {/* 2. Caja del Contenido Central (Body) */}
      <View style={styles.cuerpo}>
        <Text style={styles.textoCuerpo}>Aquí irá el contenido principal de tu práctica...</Text>
      </View>

      {/* 3. Caja de la Botonera (Footer) */}
      <View style={styles.botonera}>
        {/* Usamos Pressable en lugar de Button porque es mucho más fácil de estilizar como dev JS */}
        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Acción 1</Text>
        </Pressable>
        
        <Pressable style={[styles.boton, { backgroundColor: '#28a745' }]}>
          <Text style={styles.textoBoton}>Acción 2</Text>
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
    height: 80,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Espacio para que no choque con la barra de estado del celular
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
    paddingVertical: 20,
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