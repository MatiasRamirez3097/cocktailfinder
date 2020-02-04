import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './FinderScreenStyle';

const FinderScreen = props => {
    return (
        <View style={styles.view}>
            <Text>ASD</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="Ej: Vodka"
            />
            <Button
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'Home' })
                }}
                title="Ir al inicio"
            >
            </Button>
        </View>
    );
};

export default FinderScreen;