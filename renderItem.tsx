/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import {Task} from './App';

interface ItemProps {
  item: Task;
  markDone: (task: Task) => void;
  deleteFunction: (task: Task) => void;
}

export default function RenderItem({
  item,
  markDone,
  deleteFunction,
}: ItemProps) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markDone(item)}>
        <Text style={item.done ? styles.textDone : styles.text}>
          {item.tittle}
        </Text>
        <Text style={styles.text}>{new Date(item.date).toLocaleDateString()}</Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => deleteFunction(item)}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
