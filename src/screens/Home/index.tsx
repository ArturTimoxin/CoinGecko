import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Layout, Text, TopNavigation, List, Divider, Spinner } from '@ui-kitten/components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalState } from '../../core/store/rootReducer';
import { HomeState } from '../../core/store/home/reducer';
import { RootStackParamList } from '../../navigation';
import actions from '../../core/actions';
import CoinMarketItem from '../../components/CoinMarketItem';
import ErrorLayout from '../../components/ErrorLayout';

import styles from './styles';

type HomeScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type PropTypes = {
  navigation: HomeScreenNavigation;
};

const HomeScreen: React.FC<PropTypes> = React.memo(({ navigation }: PropTypes) => {
  const dispatch = useDispatch();
  const { isLoadingCoinMarkets, coinMarkets, coinMarketsError, page } = useSelector<
    GlobalState,
    HomeState
  >((state) => state.home);

  const fetchCoinMarkets = React.useCallback(
    (coinMarketsPage: number) => {
      dispatch(actions.home.sendCoinMarketsRequest(coinMarketsPage));
    },
    [dispatch],
  );

  const initialFetchCoinMarkets = React.useCallback(() => {
    fetchCoinMarkets(1);
  }, [fetchCoinMarkets]);

  React.useEffect(() => {
    initialFetchCoinMarkets();
  }, [initialFetchCoinMarkets]);

  const onEndReached = React.useCallback(() => {
    const nextPage = page + 1;
    fetchCoinMarkets(nextPage);
  }, [page, fetchCoinMarkets]);

  const renderCoinMarketItem = React.useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Coin', { id: item.id })}>
          <CoinMarketItem
            symbol={item.symbol}
            image={item.image}
            name={item.name}
            price={item.current_price}
            low24h={item.low_24h}
            high24h={item.high_24h}
          />
        </TouchableOpacity>
      );
    },
    [navigation],
  );

  if (coinMarketsError) {
    return <ErrorLayout text={coinMarketsError} onRefresh={initialFetchCoinMarkets} />;
  }

  return (
    <Layout style={styles.layout}>
      <TopNavigation title="Crypto Coins" alignment="center" />
      {isLoadingCoinMarkets && !coinMarkets.length ? (
        <View style={styles.centerLayout}>
          <Spinner />
        </View>
      ) : (
        <>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Coin</Text>
            <Text style={[styles.listHeaderText, styles.listHeaderCell]}>Name</Text>
            <Text style={[styles.listHeaderText, styles.listHeaderCell]}>Price</Text>
            <Text style={[styles.listHeaderText, styles.listHeaderCell]}>24H</Text>
            <Text style={[styles.listHeaderText, styles.listHeaderCell]}>24L</Text>
          </View>
          <Divider />
          <List
            data={coinMarkets}
            ItemSeparatorComponent={Divider}
            renderItem={renderCoinMarketItem}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={styles.listContainer}
            refreshing={isLoadingCoinMarkets}
            onRefresh={initialFetchCoinMarkets}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={true ? <Spinner /> : <View />}
            ListFooterComponentStyle={styles.listFooter}
          />
        </>
      )}
    </Layout>
  );
});

export default HomeScreen;
