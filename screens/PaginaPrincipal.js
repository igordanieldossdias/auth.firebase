import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaginaPrincipal = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Jogadores'); // Certifique-se de que o nome da rota corresponde exatamente ao que está no Routes.js
    };

    return (

        <ImageBackground
            source={require('../images/besito-catlove.gif')}
            style={styles.background}
            resizeMode="cover">
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Ir para Jogadores</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#003366',
        textAlign: 'center',
    },
});

export default PaginaPrincipal;