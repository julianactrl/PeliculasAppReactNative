import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  console.log(movie.poster_path);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.card,
        width,
        height,
      }}>
      <View style={styles.containerImage}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    borderRadius: 18,
  },
  containerImage: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
