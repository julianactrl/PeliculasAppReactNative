/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}
export const CastCardItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {actor.name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            opacity: 0.7,
          }}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 6,
    paddingRight: 4,
  },
  actorInfo: {
    marginLeft: 10,
  },
});
