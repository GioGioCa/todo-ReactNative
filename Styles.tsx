/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
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
    textDone: {
        fontSize: 16,
        color: '#6f6f6f',
        textDecorationLine: 'line-through',
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
    scrollContainer: {
        marginTop: 20,
    },
    itemContainer: {
        paddingVertical: 20,
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    removeButton: {
        backgroundColor: '#F33D3D',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
    },
});

export default styles;
