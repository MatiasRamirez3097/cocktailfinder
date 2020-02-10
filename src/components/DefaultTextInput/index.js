import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
class DefaultTextInput extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.props.handleOnChangeText}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
DefaultTextInput.propTypes = {
  onChangeText: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};
export default DefaultTextInput;
