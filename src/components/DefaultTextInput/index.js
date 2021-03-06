import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
class DefaultTextInput extends Component {
  render() {
    const {onChangeText, placeholder, value} = this.props;
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}
DefaultTextInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
export default DefaultTextInput;
