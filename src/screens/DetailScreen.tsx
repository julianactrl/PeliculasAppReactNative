import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
const {height: windowHeight} = Dimensions.get('window');

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log('Movie en detail', movie?.title);
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri}} style={styles.posterImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    // flex: 1,
    height: '70%',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
  posterImage: {
    flex: 1,
    borderRadius: 18,
    width: '100%',
    height: windowHeight * 0.7,
  },
});
