import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ({ onPress, name }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    text: {
        fontSize: 18
    }
});
