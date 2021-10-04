import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* // // eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{marginTop: top + 20}}>
        {/* Peliculas principales */}
        <View style={styles.carouselContainer}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        {/* Peliculas populares */}
        <HorizontalSlider title="En cine" movies={peliculasEnCine} />
        <HorizontalSlider title="Segunda parte" movies={peliculasEnCine} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});
