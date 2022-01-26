import React from 'react';
import { ScrollView, View, RefreshControl, Linking, Alert } from 'react-native';
import {
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  IconProps,
  Spinner,
  Card,
  Divider,
} from '@ui-kitten/components';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../core/store/rootReducer';
import { CoinState } from '../../core/store/coin/reducer';
import { RootStackParamList } from '../../navigation';
import actions from '../../core/actions';

import ErrorLayout from '../../components/ErrorLayout';

import styles from './styles';

const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

type CoinScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Coin'>;
type CoinScreenParams = RouteProp<RootStackParamList, 'Coin'>;

type PropTypes = {
  navigation: CoinScreenNavigation;
  route: CoinScreenParams;
};

const CoinScreen: React.FC<PropTypes> = React.memo(({ navigation, route }: PropTypes) => {
  const dispatch = useDispatch();
  const { coinData, coinError, isLoadingCoinData } = useSelector<GlobalState, CoinState>(
    (state) => state.coin,
  );

  const fetchCoinData = React.useCallback(() => {
    dispatch(actions.coin.sendCoinRequest(route.params.id));
  }, [dispatch, route.params.id]);

  React.useEffect(() => {
    fetchCoinData();
  }, [fetchCoinData]);

  const onPressLink = React.useCallback((url: string) => {
    if (!url) {
      return;
    }
    Linking.openURL(url).catch(() => {
      Alert.alert('Link opening error');
    });
  }, []);

  const BackAction = () => <TopNavigationAction onPress={navigation.goBack} icon={BackIcon} />;

  if (coinError) {
    return (
      <Layout style={styles.layout}>
        <TopNavigation accessoryLeft={BackAction} alignment="center" />
        <ErrorLayout text={coinError} onRefresh={fetchCoinData} />
      </Layout>
    );
  }

  let screenTitle = coinData?.name || '';
  let screenSubtitle = coinData?.symbol?.toUpperCase() || '';
  if (isLoadingCoinData) {
    screenTitle = '';
    screenSubtitle = '';
  }

  // remove link tags from string
  const cleanDescription = coinData?.description?.en?.replace(/<\/?[^>]+(>|$)/g, '') || null;

  return (
    <Layout style={styles.layout}>
      <TopNavigation
        accessoryLeft={BackAction}
        title={screenTitle}
        subtitle={screenSubtitle}
        alignment="center"
      />
      <Divider />
      {isLoadingCoinData ? (
        <View style={styles.centerLayout}>
          <Spinner />
        </View>
      ) : (
        <ScrollView
          refreshControl={<RefreshControl refreshing={false} onRefresh={fetchCoinData} />}
        >
          <Card disabled>
            <View style={styles.tableRow}>
              <Text category="label">Market Cap:</Text>
              <Text category="c2">€{coinData?.market_data?.market_cap?.eur || '-'}</Text>
            </View>
            <Divider />
            <View style={styles.tableRow}>
              <Text category="label">Hashing Algoritm:</Text>
              <Text category="c2">{coinData?.hashing_algorithm || '-'}</Text>
            </View>
            <Divider />
            <View style={styles.tableRow}>
              <Text category="label">Genesis Date:</Text>
              <Text category="c2">{coinData?.genesis_date || '-'}</Text>
            </View>
            <Divider />
            <View style={styles.tableRow}>
              <Text category="label">Homepage:</Text>
              <View style={styles.linksBlock}>
                {coinData?.links?.homepage?.map((link) => {
                  if (!link) {
                    return null;
                  }
                  return (
                    <Text
                      key={link}
                      style={styles.linkText}
                      numberOfLines={1}
                      onPress={() => onPressLink(link)}
                      status="info"
                    >
                      {link}
                    </Text>
                  );
                })}
              </View>
            </View>
          </Card>
          {!!cleanDescription && (
            <Card>
              <Text>{cleanDescription}</Text>
            </Card>
          )}
        </ScrollView>
      )}
    </Layout>
  );
});

export default CoinScreen;
