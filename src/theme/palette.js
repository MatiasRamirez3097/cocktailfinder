import {Platform} from 'react-native';

export const colors = {
  defaultBoneColor: '#444',
  defaultSkeletonBackground: '#DDD',
  defaultHomeScreenBackground: 'rgba(0,0,0,0.5)',
};

export function colorByOS(ios, android) {
  return Platform.OS === 'ios' ? ios : android;
}
