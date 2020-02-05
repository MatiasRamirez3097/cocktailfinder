import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './HomeScreenStyle';

const HomeScreen = props => {
    return (
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../assets/images/HomeBackground.png')}>
                <View 
                    style={styles.view} 
                >
                        <Text style={styles.text}>Cocktail Finder</Text>
                        <TouchableOpacity
                            style={styles.button} 
                            onPress={() => {
                                props.navigation.navigate({routeName: 'Finder'})
                            }}
                        >
                            
                            <Text
                                style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: "#FFF"
                                }}
                            >
                                Ir al Buscador
                            </Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
    );
};

export default HomeScreen;