import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import PropTypes from 'prop-types';
class DefaultButton extends Component {
  render() {
    const {iconName, iconSize, onPress, text} = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>
          <Icon name={iconName} size={iconSize} />
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
DefaultButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  text: PropTypes.string,
};
export default DefaultButton;
