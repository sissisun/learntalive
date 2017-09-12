import {StyleSheet} from 'react-native'

export default commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  boxShadow: {
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  boxShadowTop: {
    shadowOffset: {width: 0, height: -1},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  lcontent: {
    flex: 1
  },
  noBgText: {
    backgroundColor: 'transparent'
  },
  lheader: {
    height: 84,
    paddingTop: 40,
    marginTop: -40,
    marginBottom: 2,
    justifyContent: 'center'
  }
})