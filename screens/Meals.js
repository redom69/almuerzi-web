import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import ListItem from "../components/ListItem";


const Meals = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [meals, setMeals] = useState([])

    const fetchMeals = async () => {
        const response = await fetch('https://create-react-78wk4bxtw-daniels-projects-861d9ac7.vercel.app/api/meals')
        const data = await response.json()
        setMeals(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchMeals()
    }, [])

    return (
        <>
            {loading ?
                <ActivityIndicator style={[styles.container, styles.horizontal]} size="large" />
                :
                <View style={styles.container}>
                    <FlatList
                        style={styles.list}
                        data={meals}
                        keyExtractor={x => x._id}
                        renderItem={({ item }) =>
                            <ListItem
                                name={item.name}
                                onPress={() => navigation.navigate('Modal', { id: item._id, })}
                            />
                        }
                    />
                </View>
            }
        </>
    );
}

export default Meals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
