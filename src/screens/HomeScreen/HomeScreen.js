import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './HomeScreenStyle';

const HomeScreen = props => {
    return (
        <View style={styles.view}>
            <Text>ASD</Text>
            <TouchableOpacity
                style={styles.button} 
                onPress={() => {
                    props.navigation.navigate({routeName: 'Finder'})
                }}
            >  
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}
                >
                    Ir al Buscador
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;