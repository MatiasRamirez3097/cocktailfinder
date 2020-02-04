import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = props => {
    return (
        <View style={styles.view}>
            <Text>ASD</Text>
            <Button 
                onPress={() => {
                    props.navigation.navigate({routeName: 'Finder'})
                }}
                title="Ir al buscador"
            >  
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#090',
        height: '100%'       
    }
});

export default HomeScreen;