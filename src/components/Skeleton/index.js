import React, {Component} from 'react';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import styles from './style';
class Skeleton extends Component {
  render() {
    const {loading} = this.props;
    return (
      <SkeletonContent
        containerStyle={styles.container}
        boneColor="#444"
        animationDirection="diagonalDownRight"
        isLoading={loading}
        layout={[
          {
            key: 'photo',
            width: 100,
            height: 100,
            borderRadius: 50,
            marginLeft: 10,
            marginTop: 15,
            alignSelf: 'flex-start',
          },
          {
            key: 'name',
            width: 270,
            height: 100,
            marginLeft: 5,
            marginTop: 15,
            alignSelf: 'flex-start',
          },
          {
            key: 'names',
            width: 270,
            height: 100,
            marginLeft: 5,
            marginTop: 15,
            alignSelf: 'flex-start',
          },
        ]}
      />
    );
  }
}

export default Skeleton;
