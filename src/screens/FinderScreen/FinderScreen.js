import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './FinderScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputFilter from '../../components/inputFilter';
import DefaultText from '../../components/DefaultText/DefaultText';
import { connect } from 'react-redux';
import { chargeCocktails } from '../../store/actions/CocktailActions';
import DefaultTextInput from '../../components/DefaultTextInput/DefaultTextInput';

const FinderScreen = props => {
    return (
        <View style={styles.view}>
            <DefaultText value="asd" />
            <InputFilter />
            <DefaultTextInput
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

const mapStateToProps = (state) => {
    const { cocktails } = state
    return { cocktails }
};
export default connect(mapStateToProps)(FinderScreen);