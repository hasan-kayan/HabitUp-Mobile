// MainPage.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MainPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Main Page!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default MainPage;
