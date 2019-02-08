import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: (Dimensions.get('window').width - 30),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  marker: {
    height: 22,
    width: 3,
    backgroundColor: '#AC5253',
    borderRadius: 10,
  },
  title: {
    marginLeft: -5,
    color: '#514D47',
    fontSize: 17,
    width: (Dimensions.get('window').width - 185),
  },
  titleThroughLine: {
    textDecorationLine: 'line-through',
    marginLeft: -5,
    color: '#514D47',
    fontSize: 17,
    width: (Dimensions.get('window').width - 185),
  },
  subscribers: {
    marginLeft: 5,
    width: 21,
    color: '#514D47',
    fontSize: 12,
  },
  count: {
    marginLeft: 5,
    width: 21,
    color: '#514D47',
    fontSize: 12,
  },
});
