/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  // Dimensions,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColors';
import {useEffect, useContext} from 'react';
import {GradientContext} from '../context/GradientContext';

// const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    console.log(movie.poster_path);
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(3);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 10}}>
          <View style={styles.carouselContainer}>
            <HorizontalSlider
              movies={nowPlaying}
              widthFlat={350}
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
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 500,
    marginHorizontal: 20,
  },
});

//  <Carousel
//           layout={'tinder'}
//           data={nowPlaying}
//           renderItem={({item}: any) => <MoviePoster movie={item} />}
//           sliderWidth={windowWidth}
//           itemWidth={300}
//           inactiveSlideOpacity={0.9}
//         />
