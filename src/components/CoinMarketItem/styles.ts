import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  coinCell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 27,
  },
  image: {
    width: 20,
    height: 20,
  },
  symbolText: {
    fontSize: 8,
    marginTop: 5,
  },
  cellText: {
    fontSize: 11,
    flex: 1, // fix word break
    width: 65,
    textAlign: 'right',
  },
});
