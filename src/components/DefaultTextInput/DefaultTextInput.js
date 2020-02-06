import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../store/actions/CocktailActions'
import { URL_API } from "../../config/index";

import PropTypes from 'prop-types'
class DefaultTextInput extends Component{
    static propTypes = {
        onChangeText: String,
        placeholder: String,
        style: String
    }
    UNSAFE_componentWillMount()
    {
        this.props.fetchData()
    }
    getDat()
    {
        const {dataaa} =this.props.fetchData()
        return <Text>{dataaa}</Text>
    }
    render = () => {
        const {onChangeText, placeholder} = this.props;
        return(
            <View>
                
                <Text style={{color: 'white'}}>{URL_API}</Text>
                <Text style={{color: 'white'}}>{this.getDat()}</Text>
                <TextInput 
                    style={{color: 'white'}}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {cocktails} = state
    return {cocktails}
};
const mapDIspatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDIspatchToProps)(DefaultTextInput);