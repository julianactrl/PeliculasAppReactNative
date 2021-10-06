import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
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
        <View style={styles.carouselContainer}>
          {/* <Carousel
            layout={'tinder'}
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          /> */}
          <HorizontalSlider
            movies={nowPlaying}
            widthFlat={windowWidth}
            heightFlat={500}
          />
        </View>
        <HorizontalSlider
          title="Populares"
          movies={popular}
          widthFlat={140}
          heightFlat={200}
        />
        <HorizontalSlider
          title="Más votadas"
          movies={topRated}
          widthFlat={140}
          heightFlat={200}
        />
        <HorizontalSlider
          title="Estrenos"
          movies={upcoming}
          widthFlat={140}
          heightFlat={200}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 500,
  },
});
