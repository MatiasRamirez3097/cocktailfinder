import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import PropTypes from 'prop-types';
class DefaultFinderMsg extends Component {
  render() {
    const {error, iconName, iconColor} = this.props;
    return (
      <View style={styles.view}>
        <Icon
          name={iconName}
          color={iconColor}
          size={100}
          style={styles.icon}
        />
        <Text style={styles.text}>{error}</Text>
      </View>
    );
  }
}
DefaultFinderMsg.propTypes = {
  error: PropTypes.string,
  iconColor: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
export default DefaultFinderMsg;
