import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width),
    display: 'flex',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  }
});
