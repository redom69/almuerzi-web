import React from "react";
import { Text, TextInput, View, StyleSheet, Button, Alert, AsyncStorage } from "react-native";
import useForm from '../hooks/useForm'

export default ({ navigation }) => {
    const initialState = {
        email: '',
        password: ''
    }

    const onSubmmit = async values => {
        await fetch('https://create-react-d9k26ueiy-daniels-projects-861d9ac7.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then(x => x.text())
            .then(x => {
                try {
                    return JSON.parse(x)
                } catch {
                    Alert.alert('Error', e)
                    throw x
                }
            })
            .then(x => {
                navigation.navigate('MealsScreen')
            })
    }

    const { subscribe, inputs, handleSubmmit } = useForm(initialState, onSubmmit)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Iniciar sesión
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
            <Button title="Iniciar sesión" onPress={handleSubmmit} />
            <Button title="Registrarse" onPress={() => { navigation.navigate('RegisterScreen') }} />

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