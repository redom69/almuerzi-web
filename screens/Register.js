import React from "react";
import { Alert, Text, TextInput, View, StyleSheet, Button } from "react-native";

import useForm from '../hooks/useForm'


export default ({ navigation }) => {
    const initialState = {
        email: '',
        password: ''
    }
    const onSubmmit = async values => {
        await fetch('https://create-react-d9k26ueiy-daniels-projects-861d9ac7.vercel.app/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then(x => x.text())
            .then(x => {
                if (x === 'Usuario creado correctamente') {
                    return Alert.alert('Exito', x, [{ text: 'Ir al inicio', onPress: () => navigation.navigate('LoginScreen') }])
                }
                Alert.alert('Error', x)
            })
    }

    const { subscribe, inputs, handleSubmmit } = useForm(initialState, onSubmmit)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Registrarse
            </Text>
            <TextInput
                autoCapitalize="none"
                value={inputs.email}
                onChangeText={subscribe('email')}
                style={styles.input}
                placeholder="Email" />
            <TextInput
                value={inputs.password}
                onChangeText={subscribe('password')}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true} />
            <Button title="Enviar" onPress={handleSubmmit} />
            <Button title="Volver al inicio" onPress={() => { navigation.goBack() }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColork: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15

    },
    input: {
        height: 40,
        borderColor: '#cfcfcf',
        borderWidth: 3,
        alignSelf: 'stretch',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    }
});