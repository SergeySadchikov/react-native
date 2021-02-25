import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10,
        // flexDirection: 'row',
        // flex: 1
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})