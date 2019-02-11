import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import PrayerFact from '../PrayerFact/PrayerFact';

class PrayerData extends React.Component {

  getDateAdded = () => {
    let dataAdded = this.props.prayer.dataAdded;
    if (typeof(dataAdded) === 'string') {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      const year = dataAdded.substring(0, 4);
      const month = Number(dataAdded.substring(5, 7));
      const monthFull = monthNames[month - 1];
      const day = dataAdded.substring(8, 10);
      return monthFull + ' ' + day + ' ' + year;
    } else {
      dataAdded = this.props.prayer.dataAdded + '';
      return dataAdded.substring(4, 7) + ' ' + dataAdded.substring(8, 10) + ' ' + dataAdded.substring(11, 15)
    }
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

PrayerData.propTypes = {
  prayer: PropTypes.object.isRequired,
};

export default PrayerData;