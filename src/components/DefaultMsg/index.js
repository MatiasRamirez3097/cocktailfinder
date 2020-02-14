import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import PropTypes from 'prop-types';
class DefaultMsg extends Component {
  render() {
    const {msg, iconName, iconColor} = this.props;
    return (
      <View style={styles.view}>
        <Icon
          name={iconName}
          color={iconColor}
          size={100}
          style={styles.icon}
        />
        <Text style={styles.text}>{msg}</Text>
      </View>
    );
  }
}
DefaultMsg.propTypes = {
  msg: PropTypes.string,
  iconColor: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
export default DefaultMsg;
