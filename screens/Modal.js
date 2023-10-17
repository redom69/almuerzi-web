import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text, Button } from 'react-native';

const Orders = ({ route, navigation }) => {
    const { id } = route.params

    const [loading, setLoading] = useState(true)
    const [meal, setMeal] = useState([])

    const fetchMeal = async () => {
        const response = await fetch(`https://create-react-78wk4bxtw-daniels-projects-861d9ac7.vercel.app/api/meals/${id}`)
        const data = await response.json()
        setMeal(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchMeal()
    }, [])

    return (

        <View style={styles.container}>
            <Text>{meal._id}</Text>
            <Text>{meal.name}</Text>
            <Text>{meal.desc}</Text>
            <Button title='Aceptar' onPress={() => {
                fetch(`https://create-react-78wk4bxtw-daniels-projects-861d9ac7.vercel.app/api/orders`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        meal_id: id,
                        user_id: 'ksks'
                    })
                }).then(() => {
                    alert('Orden registrada')
                    navigation.goBack()
                })
            }} />
            <Button title='Cancelar' onPress={() => navigation.goBack()} />
        </View>

    );
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});