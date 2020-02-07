import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import {getCocktails} from '../../store/actions/CocktailActions';

import PropTypes from 'prop-types';
class DefaultTextInput extends Component {
  /*componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const {getCocktailsConnected} = this.props;
    console.log('asd');
    await getCocktailsConnected();
  };*/

  render() {
    const {habdleOnChangeText, placeholder} = this.props;
    return (
      <View>
        <TextInput
          style={{
            width: '80%',
            borderColor: 'blue',
            backgroundColor: '#FFF',
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onChangeText={this.props.handleOnChangeText}
          placeholder={placeholder}
        />
      </View>
    );
  }
}
/*DefaultTextInput.propTypes = {
  onChangeText: PropTypes.function,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};*/
export default DefaultTextInput;
