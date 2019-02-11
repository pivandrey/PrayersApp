import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width),
    display: 'flex',
    alignItems: 'flex-start',
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: (Dimensions.get('window').width),
  },
  membersText: {
    color: '#72A8BC',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  addComment: {
    width: (Dimensions.get('window').width),
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15,
  },
  commentsList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginLeft: 12,
    width: (Dimensions.get('window').width - 80),
  },
  warningText: {
    paddingLeft: 15,
    paddingTop: 15,
    color: '#514D47',
    fontSize: 16,
  }
});
