import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../store/actions/CocktailActions'
import PropTypes from 'prop-types'
class DefaultTextInput extends Component{
    static propTypes = {
        onChangeText: String,
        placeholder: String,
        style: String
    }
    componentWillMount()
    {
        this.props.fetchData()
    }
    getDat()
    {
        const {testing} =this.props.drinks
        return <Text>{testing}</Text>
    }
    render = () => {
        const {onChangeText, placeholder} = this.props;
        return(
            <View>
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

const mapStateToProps = state => {
    return {cocktails: state.cocktails}
};
const mapDIspatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}
export default (connect)(DefaultTextInput);