import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  flagAnsweredContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: (Dimensions.get('window').width - 30),
    display: 'flex',
    alignItems: 'center',
  },
  flagAnsweredBtn: {
    marginTop: 21,
    marginBottom: 21,
    width: 209,
    backgroundColor: '#BFB393',
    borderRadius: 15,
  },
  flagAnsweredText: {
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
