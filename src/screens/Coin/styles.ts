import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  layout: {
    flex: 1,
  },
  centerLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  linksBlock: {
    width: 200,
  },
  linkText: {
    textAlign: 'right',
  },
});
