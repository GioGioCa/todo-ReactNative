import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import RenderItem from './renderItem';

const task = [
  {
    tittle: 'Alimentar mascota',
    done: false,
    date: new Date(),
  },
  {
    tittle: 'Alimentarme',
    done: false,
    date: new Date(),
  },
];

export interface Task {
  tittle: string;
  done: boolean;
  date: Date;
}
export default function App() {
  const markDone = () => {};
  const deleteFunction = () => {};
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
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={task}
        />
      </View>
    </View>
  );
}
