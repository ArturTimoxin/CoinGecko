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
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  listHeaderText: {
    color: '#A9A9A9',
    fontSize: 12,
    fontWeight: '700',
  },
  listHeaderCell: {
    width: 65,
    textAlign: 'right',
  },
  listContainer: {
    paddingBottom: 20,
  },
  listFooter: {
    height: 50,
    alignItems: 'center',
  },
});
