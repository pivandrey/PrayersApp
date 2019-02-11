import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width),
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    marginRight: 5,
  },
  membersText: {
    color: '#72A8BC',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addMember: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#BFB393',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addMemberText: {
    fontSize: 30,
    color: 'white',
    marginTop: -5,
  }
});
