import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Название не должно быть пустым')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setValue}
                style={styles.input}
                value={value}
                placeholder="Введите текст"
            />
            <Button title='Добавить' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15

    },
    input: {
        padding: 10,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})
