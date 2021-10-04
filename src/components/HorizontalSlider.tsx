import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.flatListContainer,
        height: title ? 260 : 220,
      }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 8,
    color: 'black',
  },
  flatListContainer: {
    backgroundColor: 'white',
  },
});
