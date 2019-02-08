import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style'
import PrayerFact from '../PrayerFact/PrayerFact';

class PrayerData extends React.Component {

  getDateAdded = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const dataAdded = this.props.prayer.dataAdded;
    const year = dataAdded.substring(0, 4);
    const month = Number(dataAdded.substring(5, 7));
    const monthFull = monthNames[month - 1];
    const day = dataAdded.substring(8, 10);
    return monthFull + ' ' + day + ' ' + year;
  };

  render() {
    const prayer = this.props.prayer;
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <PrayerFact 
            data={{dataAdded: this.getDateAdded, text: "Data Added", optional: "Opened for 4 days"}}
          />
          <PrayerFact 
            data={{number: prayer.countPrayedTotal, text: "Times Prayed Total"}}
          />
        </View>
        <View style={styles.row}>
          <PrayerFact 
            data={{number: prayer.countPrayedMe, text: "Times Prayed by Me"}}
          />
          <PrayerFact 
            data={{number: (prayer.countPrayedTotal - prayer.countPrayedMe), text: "Times Prayed by Others"}}
          />
        </View>
      </View>
    )
  }
};

export default PrayerData;