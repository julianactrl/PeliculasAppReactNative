import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  console.log('Movie en detail', movie?.title);
  return (
    <View>
      <Text style={{color: 'black'}}>Detail Screen</Text>
    </View>
  );
};
