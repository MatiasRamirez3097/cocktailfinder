import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import styles from './style';
const FinderNavigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Cocktails search',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerLeft: () => (
      <TouchableOpacity
        style={styles.leftHeader}
        onPress={() => navigation.navigate({routeName: 'Home'})}>
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={styles.rightHeader}
        onPress={() => navigation.navigate({routeName: 'Help'})}>
        <Icon name="question" size={30} color="white" />
      </TouchableOpacity>
    ),
  };
};
export default FinderNavigationOptions;
