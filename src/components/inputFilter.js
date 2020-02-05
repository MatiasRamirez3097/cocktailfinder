import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default class InputFilter extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {text: null};
    };
    render()
    {
        return(
            <View>
                <Text style={{
                    color: '#FFF'
                }}>
                    {this.state.text}    
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type to Search"
                    onChangeText={(text) => this.getMoviesFromApi(text)}
                >
                </TextInput>
            </View>
        )
        
    }
    getMoviesFromApi(text) {
        if(text.length >= 3)
        {
            this.setState({text: text})
            try {
                return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+text)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({text: responseJson.drinks[0].strDrink});
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                        } catch (error) {
                            console.error(error);
                        }
        }
    }
}
const styles = StyleSheet.create({
    textInput:{
        width: '80%',
        borderColor: 'blue',
        backgroundColor: "#FFF",
        borderRadius: 5,
        alignSelf:'center'
    }
})