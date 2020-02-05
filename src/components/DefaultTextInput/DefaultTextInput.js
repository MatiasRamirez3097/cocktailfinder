import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types'
class DefaultTextInput extends Component{
    static propTypes = {
        onChangeText: string,
        placeholder: String,
        style: string
    }
    render = () => {
        const {onChangeText, placeholder} = this.props;
        return(
            <View>
                <TextInput 
                    style={{color: 'white'}}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
        )
    }
}
export default DefaultTextInput;