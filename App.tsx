import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#6f6f6f',
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  whiteText: {
    fontSize: 16,
    color: '#FFF',
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 15,
    paddingLeft: 15,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 10,
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas pendientes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.addButton}>
          <text>Agregar</text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
