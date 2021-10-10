/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {MovieDetail} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastCardItem} from './CastCardItem';

interface Props {
  movieFull: MovieDetail;
  cast: Cast[];
}

export const MovieDetailCard = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="gray" size={16} />
          <Text style={{color: 'black', marginLeft: 5}}>
            {movieFull.vote_average}
          </Text>
          <Text style={{color: 'black', marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}{' '}
          </Text>
        </View>
        {/* Historia */}
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 23,
          }}>
          Historia
        </Text>
        <Text style={{color: 'black', marginTop: 5, fontSize: 16}}>
          {movieFull.overview}
        </Text>
        {/* PResupuesto */}
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 23,
          }}>
          Presupuesto
        </Text>
        <Text style={{color: 'black', margin: 5, fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* Castings */}
      <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            marginBottom: 10,
            fontWeight: 'bold',
            fontSize: 23,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastCardItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};
