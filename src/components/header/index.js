import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import PropTypes from 'prop-types';
class Header extends Component {
  render() {
    const {
      buttonLeft,
      buttonRight,
      iconColor,
      actionLeft,
      actionRight,
      title,
    } = this.props;
    return (
      <View style={styles.view}>
        <View style={styles.leftHeader}>
          {actionLeft && buttonLeft && (
            <TouchableOpacity onPress={actionLeft}>
              <Icon name={buttonLeft} size={30} color={iconColor} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.centerHeader}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.rightHeader}>
          {actionRight && buttonRight && (
            <TouchableOpacity onPress={actionRight}>
              <Icon name={buttonRight} size={30} color={iconColor} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
Header.propTypes = {
  buttonLeft: PropTypes.string,
  buttonRight: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  urlLeft: PropTypes.func,
  urlRight: PropTypes.func,
};
export default Header;
