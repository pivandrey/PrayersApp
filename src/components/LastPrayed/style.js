import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: (Dimensions.get('window').width),
    display: 'flex',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  marker: {
    height: 22,
    width: 3,
    backgroundColor: '#AC5253',
    borderRadius: 10,
    marginRight: 12,
  },
  date: {
    fontSize: 17,
    color: '#514D47',
  }
});
