/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import {Task} from './App';

interface ItemProps {
    item: Task;
    markDone: () => void;
    deleteFunction: () => void;

}

export default function RenderItem({item, markDone, deleteFunction}: ItemProps) {
    return (
        <View style={styles.itemContainer}>
        <TouchableOpacity onPress={markDone}>
            <Text style={item.done ? styles.textDone : styles.text}>
            {item.tittle}
            </Text>
            <Text style={styles.text}>{item.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {item.done && (
            <TouchableOpacity style={styles.removeButton} onPress={deleteFunction}>
                <Text style={styles.whiteText}>Eliminar</Text>
            </TouchableOpacity>
        )}
        </View>
    );
}
