import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingLeft: 15,
    paddingTop: 14,
    paddingBottom: 14,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  userName: {
    fontSize: 17,
    color: '#514D47',
    marginRight: 6,
    fontWeight: 'bold',
  },
  dateAdded: {
    fontSize: 13,
    color: '#9C9C9C',
  },
  title: {
    fontSize: 17,
    color: '#514D47',
    marginRight: 6,
  }
});
