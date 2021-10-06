// @ts-nocheck

import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  // const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const nowPlaying = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];
  const {top} = useSafeAreaInsets();

  // if (isLoading) {
  //   return (
  //     // eslint-disable-next-line react-native/no-inline-styles
  //     <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
  //       <ActivityIndicator color="red" size={100} />
  //     </View>
  //   );
  // }
  const _renderItem = ({item}) => {
    return <Text>{item.text}</Text>;
  };

  return (
    <View>
      {/* // // eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{marginTop: top + 20}}>
        <View style={styles.carouselContainer}>
          <Carousel
            layout={'default'}
            data={nowPlaying}
            // renderItem={({item}: any) => <MoviePoster movie={item} />}
            renderItem={_renderItem}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Más votadas" movies={topRated} />
        <HorizontalSlider title="Estrenos" movies={upcoming} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});
