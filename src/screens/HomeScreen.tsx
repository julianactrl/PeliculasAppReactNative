import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import movieDb from '../api/movieDB';
export const HomeScreen = () => {
  useEffect(() => {
    movieDb.get('/now_playing').then(resp => {
      console.log(resp.data);
    });
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
