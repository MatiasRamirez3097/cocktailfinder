import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const FinderScreen = props => {
    return (
        <View style={styles.view}>
            <Text>ASD</Text>
            <Button
                onPress={() => {
                    props.navigation.navigate({ routeName: 'Home' })
                }}
                title="Ir al inicio"
            >
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#000',
        height: '100%'       
    }
});

export default FinderScreen;