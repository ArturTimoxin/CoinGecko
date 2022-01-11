import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import Image from 'react-native-fast-image';

import styles from './styles';

type PropTypes = {
  symbol: string;
  image: string;
  name: string;
  price: number;
  low24h: number;
  high24h: number;
};

const CoinMarketItem: React.FC<PropTypes> = React.memo(
  ({ symbol, image, name, price, low24h, high24h }: PropTypes) => {
    const uppercaseSymbol = symbol.toUpperCase();
    return (
      <View style={styles.wrapper}>
        <View style={styles.coinCell}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text numberOfLines={1} category="s1" style={styles.symbolText}>
            {uppercaseSymbol}
          </Text>
        </View>
        <Text category="s1" style={styles.cellText}>
          {name}
        </Text>
        <Text style={styles.cellText}>€{price}</Text>
        <Text style={styles.cellText}>€{high24h}</Text>
        <Text style={styles.cellText}>€{low24h}</Text>
      </View>
    );
  },
);

export default CoinMarketItem;
