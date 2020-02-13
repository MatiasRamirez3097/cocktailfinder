import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import PropTypes from 'prop-types';
class Header extends Component {
  render() {
    const {buttonLeft, buttonRight, urlLeft, urlRight, title} = this.props;
    return (
      <View style={styles.view}>
        <View style={styles.leftHeader}>
          {urlLeft && buttonLeft && (
            <TouchableOpacity onPress={urlLeft}>
              <Icon name={buttonLeft} size={30} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.centerHeader}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.rightHeader}>
          {urlRight && buttonRight && (
            <TouchableOpacity onPress={urlRight}>
              <Icon name={buttonRight} size={30} color="white" />
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
  title: PropTypes.string,
  urlLeft: PropTypes.func,
  urlRight: PropTypes.func,
  navigation: PropTypes.object,
};
export default Header;
