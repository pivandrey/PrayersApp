import React from 'react';
import { Image } from 'react-native';

export default class PrayerImg extends React.Component {
  render() {
    return(
      <Image
        source={require('./prayer.png')}
      />
    )
  }
}