import React, {Component} from 'react';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import styles from './style';
import PropTypes from 'prop-types';
class Skeleton extends Component {
  render() {
    const {loading} = this.props;
    return (
      <SkeletonContent
        containerStyle={styles.container}
        boneColor="#444"
        animationType="shiver"
        animationDirection="diagonalDownRight"
        isLoading={loading}
        layout={[
          {
            key: 'photo1',
            width: 100,
            height: 100,
            borderRadius: 50,
            marginLeft: 10,
          },
          {
            key: 'name1',
            width: 200,
            height: 30,
            marginLeft: '10%',
          },
        ]}
      />
    );
  }
}
Skeleton.propTypes = {
  loading: PropTypes.bool,
};
export default Skeleton;
