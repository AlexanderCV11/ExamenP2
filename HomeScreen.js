import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import styles from './styles';
import Logo from './assets/Burris-logo.gif';


function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Ir a la tienda"
                onPress={() => navigation.navigate('Tasks', {
                    id: 1, 
                    description: 'Aquí va la descripción',
                } )}
            />
            
        </View>
    );
}

export default HomeScreen;