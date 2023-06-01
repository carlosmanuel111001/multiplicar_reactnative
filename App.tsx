import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function App(): JSX.Element {
  const [numeros, setNumeros] = useState<number[]>([]);
  const [resultado, setResultado] = useState<number | null>(null);

  const multiplicarNumeros = () => {
    let producto = 1;
    for (let i = 0; i < numeros.length; i++) {
      producto *= numeros[i];
    }
    setResultado(producto);
  };
  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.texto}>Ingrese los números separados por comas:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          const numerosEntrada = text.split(',').map(Number);
          setNumeros(numerosEntrada);
        }}
      />
      <Button title="Multiplicar" onPress={multiplicarNumeros} />
      {resultado && (
        <Text style={styles.textoResultado}>El resultado es: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  textoResultado: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default App;
