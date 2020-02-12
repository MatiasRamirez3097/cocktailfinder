import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
class DefaultError extends Component {
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
export default DefaultError;
