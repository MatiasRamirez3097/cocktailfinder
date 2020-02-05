import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
                
                <TextInput
                    style={styles.textInput}
                    placeholder="Type to Search"
                    onChangeText={(text) => this.getMoviesFromApi(text)}
                >
                </TextInput>
                <FlatList
                    data={this.state.text}
                    keyExtractor={item => item.idDrink}
                    renderItem={({item, index, separators}) => (
                          <View style={{backgroundColor: 'white'}}>
                            <Text style={{
                                fontSize: 10,
                                color: 'black'
                            }}>{item.strDrink}</Text>
                          </View>
                    )}   
                />

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
                            this.setState({text: responseJson.drinks});
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