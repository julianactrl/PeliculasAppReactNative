import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  widthFlat?: number;
  heightFlat?: number;
}

export const HorizontalSlider = ({
  title,
  movies,
  widthFlat,
  heightFlat,
}: Props) => {
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
          <MoviePoster movie={item} height={heightFlat} width={widthFlat} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 8,
    color: 'black',
  },
  flatListContainer: {
    flex: 1,
    // backgroundColor: 'white',
  },
});
