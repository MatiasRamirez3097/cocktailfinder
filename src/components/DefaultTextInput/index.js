import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
class DefaultTextInput extends Component {
  render() {
    const {onChangeText, placeholder, value} = this.props;
    console.log('esta en el input', value);
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
        />
      </View>
    );
  }
}
DefaultTextInput.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
export default DefaultTextInput;
