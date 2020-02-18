import React, {Component} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
class ClearButton extends Component {
  render() {
    const {onPress, disabled, iconName, iconSize, iconColor} = this.props;
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </Text>
      </TouchableOpacity>
    );
  }
}
ClearButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,,
};
export default ClearButton;
