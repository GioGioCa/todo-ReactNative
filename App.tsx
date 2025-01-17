import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from './renderItem';

export interface Task {
  tittle: string;
  done: boolean;
  date: Date;
}
export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('mytodo-tasks', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytodo-tasks');
      //nombre DB 'mytodo-tasks'
      if (value !== null) {
        // value previously stored
        const taskLocal = JSON.parse(value);
        setTasks(taskLocal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      tittle: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    setText('');
  };
  const markDone = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(elemento => elemento.tittle === task.tittle);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
    storeData(tmp);
  };

  const deleteFunction = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(elemento => elemento.tittle === task.tittle);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas pendientes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea"
          onChangeText={(t: string) => setText(t)}
          value={text}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
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
          data={tasks}
        />
      </View>
    </View>
  );
}
