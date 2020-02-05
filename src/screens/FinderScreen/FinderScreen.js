import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './FinderScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputFilter from '../../components/inputFilter';

const FinderScreen = props => {
    return (
        <View style={styles.view}>
            <Text>ASD</Text>
            <InputFilter />
            <TextInput 
                style={styles.textInput} 
                placeholder="Ej: Vodka"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'Home' })
                }}
            >
                <Text>Ir al inicio</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FinderScreen;