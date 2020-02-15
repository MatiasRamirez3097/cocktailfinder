import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import PropTypes from 'prop-types';
class DefaultButton extends Component {
  render() {
    const {iconName, navigation, text, url} = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate({routeName: url})}>
        <Text style={styles.text}>
          <Icon name={iconName} size={20} />
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
DefaultButton.propTypes = {
  iconName: PropTypes.string,
  navigation: PropTypes.object,
  text: PropTypes.string,
  url: PropTypes.string,
};
export default DefaultButton;