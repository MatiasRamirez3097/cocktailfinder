import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
class Header extends Component {
  render() {
    const {
      buttonLeft,
      buttonRight,
      navigation,
      urlLeft,
      urlRight,
      title,
    } = this.props;
    return (
      <View style={styles.view}>
        <View style={styles.leftHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate({routeName: urlLeft})}>
            <Icon name={buttonLeft} size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerHeader}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate({routeName: urlRight})}>
            <Icon name={buttonRight} size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Header;
